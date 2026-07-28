import { useEffect } from "react";
import { IoClose } from "react-icons/io5";

interface ImageModalProps {
    image: string;
    isOpen: boolean;
    onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ image, isOpen, onClose }) => {

    useEffect(() => {

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        if (isOpen) {
            window.addEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "hidden"; // Prevent scrolling
        }

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "auto";
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={onClose}
        >
            <button
                onClick={onClose}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/20 hover:bg-white/30"
            >
                <IoClose size={30} className="text-white" />
            </button>

            <img
                src={image}
                alt="Preview"
                onClick={(e) => e.stopPropagation()}
                className="max-w-[95vw] max-h-[95vh] object-contain rounded-lg shadow-2xl"
            />
        </div>
    );
};

export default ImageModal;