export default function ImageCard({ image, onOpen }) {
    return (
        <img
            onClick={() => onOpen(image)}
            src={image.urls.small}
            alt={image.alt_description}
        />
    );
}
