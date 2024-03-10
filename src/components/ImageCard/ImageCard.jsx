export default function ImageCard({ article }) {
    return <img src={article.urls.small} alt={article.alt_description} />;
}
