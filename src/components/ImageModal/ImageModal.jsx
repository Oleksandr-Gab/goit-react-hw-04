import Modal from "react-modal";
import { FaHeart } from "react-icons/fa";

import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

export default function ImageModal({
    isOpen,
    onClose,
    image: { urls, alt_description, user, likes },
}) {
    return (
        <Modal
            isOpen={isOpen}
            overlayClassName={css.overlay}
            className={css.content}
            onRequestClose={onClose}
        >
            <>
                <img
                    className={css.img}
                    src={urls.regular}
                    alt={alt_description}
                />
                <div className={css.description}>
                    <p>Autors: {user.name}</p>
                    <p>
                        {<FaHeart />} {likes}
                    </p>
                </div>
                <p className={css.text}>{alt_description}</p>
            </>
        </Modal>
    );
}
