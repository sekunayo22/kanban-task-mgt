import { createPortal } from "react-dom";

import { ModalOverlay } from "./styles";

interface ModalProps {
  children: React.ReactNode;
  toggleModal: boolean;
  handleClose: () => void;
  closeOnOverlayClick?: boolean;
}

const Modal = ({
  toggleModal,
  handleClose,
  children,
  closeOnOverlayClick = true,
}: ModalProps) => {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && closeOnOverlayClick) {
      handleClose();
    }
  };

  const handleModalContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const modalContent = (
    <ModalOverlay
      dataDisplay={toggleModal}
      onClick={handleOverlayClick}
      data-testid="modal-overlay"
    >
      <div data-testid="modal-content" onClick={handleModalContentClick}>
        {children}
      </div>
    </ModalOverlay>
  );

  if (typeof document !== "undefined" && document.body) {
    return createPortal(modalContent, document.body);
  }

  return modalContent;
};

export default Modal;
