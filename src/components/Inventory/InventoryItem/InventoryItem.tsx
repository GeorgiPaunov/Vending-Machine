import { useModalHandler } from "../../../hooks/useModalHandler";
import { Product } from "../../../models";
import ConfirmationModal from "../../Modal/ConfirmationModal";

import "./InventoryItem.css";

interface InventoryItemProps {
  product: Product;
  deleteHandler: (name: string) => void;
  editHandler: (product: Product) => void;
}

function InventoryItem({
  product,
  deleteHandler,
  editHandler,
}: InventoryItemProps) {
  const { isModalOpen, openModal, closeModal } = useModalHandler();

  const handleDelete = () => {
    deleteHandler(product.name);
    closeModal();
  };

  return (
    <>
      <div className="inventory-item">
        <div className="inventory-item__name">{product.name}</div>
        <div className="inventory-item__quantity">{product.quantity} pcs.</div>
        <div className="inventory-item__price">
          {product.price.toFixed(2)} lv.
        </div>
        <div className="inventory-item__button-container">
          <button onClick={() => editHandler(product)} className="edit-btn">
            Update
          </button>
          <button onClick={openModal} className="delete-btn">
            Remove
          </button>
        </div>
      </div>

      <ConfirmationModal
        isOpen={isModalOpen}
        submitHandler={handleDelete}
        cancelHandler={closeModal}
      >
        {product.name} will be removed permanently!
      </ConfirmationModal>
    </>
  );
}

export default InventoryItem;
