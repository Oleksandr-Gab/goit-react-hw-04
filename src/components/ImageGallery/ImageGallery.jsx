import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ images, onOpen }) {
    return (
        <ul className={css.gallery}>
            {images.map((image) => {
                return (
                    <li className={css.galleryItem} key={image.id}>
                        <ImageCard image={image} onOpen={onOpen} />
                    </li>
                );
            })}
        </ul>
    );
}
