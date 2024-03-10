import Modal from "react-modal";
import { FaHeart } from "react-icons/fa";

import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

export default function ImageModal({ isOpen, onClose, modalContent }) {
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
                    src={modalContent.urls.regular}
                    alt={modalContent.alt_description}
                />
                <div className={css.description}>
                    <p>Autors: {modalContent.user.name}</p>
                    <p>
                        {<FaHeart />} {modalContent.likes}
                    </p>
                </div>
                <p className={css.text}>{modalContent.alt_description}</p>
            </>
        </Modal>
    );
}
