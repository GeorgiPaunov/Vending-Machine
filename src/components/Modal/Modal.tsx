import { useEffect, useRef } from "react";

import "./Modal.css";

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
}

function Modal({ isOpen, children }: ModalProps) {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const element = modalRef.current;

    if (element) {
      isOpen ? element.showModal() : element.close();
    }
  }, [isOpen]);

  return (
    <dialog ref={modalRef} className="modal">
      {children}
    </dialog>
  );
}

export default Modal;
