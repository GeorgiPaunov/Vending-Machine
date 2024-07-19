import Modal from "./Modal";

import "./ConfirmationModal.css";

interface ModalProps {
  isOpen: boolean;
  children?: React.ReactNode;
  submitHandler: () => void;
  cancelHandler: () => void;
}

function ConfirmationModal({
  isOpen,
  children,
  submitHandler,
  cancelHandler,
}: ModalProps) {
  return (
    <Modal isOpen={isOpen}>
      <div className="confirmation">
        <h3>ARE YOU SURE</h3>
        {children ? <div className="children">{children}</div> : null}
        <div className="button-container">
          <button onClick={submitHandler}>Confirm</button>
          <button onClick={cancelHandler}>Cancel</button>
        </div>
      </div>
    </Modal>
  );
}

export default ConfirmationModal;
