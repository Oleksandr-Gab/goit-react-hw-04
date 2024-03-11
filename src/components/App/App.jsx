import { fetchImages } from "../../Unsplash-api";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import css from "./App.module.css";

import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

function App() {
    const [search, setSearch] = useState("");
    const [images, setImages] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const [error, setError] = useState(false);
    const [page, setPage] = useState(1);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState({});

    useEffect(() => {
        if (search === "") {
            return;
        }
        async function getData() {
            try {
                setError(false);
                setisLoading(true);
                const data = await fetchImages(search, page);
                data.length > 0
                    ? setImages((prevImeges) => {
                          return [...prevImeges, ...data];
                      })
                    : notifyInfo();
            } catch (e) {
                setError(true);
            } finally {
                setisLoading(false);
            }
        }
        getData();
    }, [search, page]);

    useEffect(() => {
        scrollToBottom();
    }, [images]);

    const notifyInfo = () => toast.info("Nothing was found for your request!");

    const handleSearch = (newSearch) => {
        if (search === newSearch) return;
        setSearch(newSearch);
        setPage(1);
        setImages([]);
    };

    const handleLoadMore = () => {
        setPage(page + 1);
    };

    function getImg(image) {
        setModalContent(image);
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    function scrollToBottom() {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
        });
    }

    return (
        <>
            <SearchBar onSearch={handleSearch} />
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <div className={css.galleryContainer}>
                {images.length > 0 && (
                    <ImageGallery
                        images={images}
                        onOpen={getImg}
                        onContent={setModalContent}
                    />
                )}
                {isLoading && <Loader />}
                {error && <ErrorMessage />}
                {images.length >= 12 && !isLoading && (
                    <LoadMoreBtn onLoad={handleLoadMore} />
                )}
            </div>
            {Object.keys(modalContent).length > 0 && (
                <ImageModal
                    isOpen={modalIsOpen}
                    image={modalContent}
                    onClose={closeModal}
                />
            )}
        </>
    );
}

export default App;
