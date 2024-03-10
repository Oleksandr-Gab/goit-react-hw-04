import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onLoad }) {
    return (
        <button type="button" onClick={onLoad} className={css.LoadMoreBtn}>
            Load More
        </button>
    );
}
