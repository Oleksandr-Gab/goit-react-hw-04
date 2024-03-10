import SearchBar from "../SearchBar/SearchBar";
import { fetchArticles } from "../../article-api";
import { useEffect, useState } from "react";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import css from "./App.module.css";
import ImageModal from "../ImageModal/ImageModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    const [search, setSearch] = useState("");
    const [articles, setArticles] = useState([]);
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
                const data = await fetchArticles(search, page);
                data.length > 0
                    ? setArticles((prevArticles) => {
                          return [...prevArticles, ...data];
                      })
                    : notify();
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
    }, [articles]);

    const notify = () => toast.info("Nothing was found for your request!");

    const handleSearch = (newSearch) => {
        setSearch(newSearch);
        setPage(1);
        setArticles([]);
    };

    const handleLoadMore = () => {
        setPage(page + 1);
    };

    function openModal(data) {
        setModalContent(data);
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
                {articles !== 0 && (
                    <ImageGallery
                        articles={articles}
                        page={page}
                        onOpen={openModal}
                        onContent={setModalContent}
                    />
                )}
                {isLoading && <Loader />}
                {error && <ErrorMessage />}
                {articles.length >= 12 && !isLoading && (
                    <LoadMoreBtn onLoad={handleLoadMore} />
                )}
            </div>
            {Object.keys(modalContent).length > 0 && (
                <ImageModal
                    isOpen={modalIsOpen}
                    modalContent={modalContent}
                    onClose={closeModal}
                />
            )}
        </>
    );
}

export default App;
