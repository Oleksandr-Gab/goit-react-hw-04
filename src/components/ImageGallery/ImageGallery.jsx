import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ articles, page, onOpen }) {
    return (
        <ul key={page} className={css.gallery}>
            {articles.map((article) => {
                return (
                    <li
                        className={css.galleryItem}
                        key={article.id}
                        onClick={() => onOpen(article)}
                    >
                        <ImageCard article={article} />
                    </li>
                );
            })}
        </ul>
    );
}
