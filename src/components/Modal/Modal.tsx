
import { ReactElement } from "react";

interface ModalProps {
    isOpen : boolean;
    onClose: () => void;
    children: ReactElement;
}
const Modal = ({ isOpen, onClose, children } : ModalProps) => {
    if (!isOpen) return null;

    const handleClick = (e : React.MouseEvent<HTMLElement>) => {

        if ((e.target as HTMLElement).id !== 'outside')
            return;
        onClose();
    }
    return (
        <div id='outside' className="fixed z-30 inset-0 flex
                        items-start justify-center h-100% 
                        bg-black/75" onClick={handleClick}>
            <div className="bg-paper rounded-xl
                            shadow-lg p-6 md:px-15 leading-7 md:leading-9 m-2 max-w-5xl top-5 md:top-15
                            w-4/5 absolute overflow-y-auto overscroll-none max-h-[90vh]">
                <button
                    className="absolute top-3 right-3 text-2xl
                               text-white 
                               cursor-pointer
                               bg-forest hover:bg-fern px-3 py-1 rounded-3xl"
                    onClick={onClose}
                >
                    &#x2715; {/* Close button */}
                </button>
                {children}
            </div>
        </div>
    );
};


export default Modal;