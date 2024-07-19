import { useState } from "react";
import { useModalHandler } from "../../hooks/useModalHandler";
import { Product } from "../../models";
import InventoryItem from "./InventoryItem/InventoryItem";
import ProductForm from "./ProductForm/ProductForm";
import Modal from "../Modal/Modal";

import "./Inventory.css";

interface InventoryProps {
  products: Product[];
  createProduct: (product: Product) => void;
  editProduct: (oldName: string, newData: Product) => void;
  deleteProduct: (name: string) => void;
}

function Inventory({
  products,
  createProduct,
  editProduct,
  deleteProduct,
}: InventoryProps) {
  const { isModalOpen, openModal, closeModal } = useModalHandler();
  const [productToEdit, setProductToEdit] = useState<Product | undefined>();

  const handleEditClick = (product: Product) => {
    setProductToEdit(product);
    openModal();
  };

  const handleFormCancel = () => {
    closeModal();
    setProductToEdit(undefined);
  };

  const handleFormSubmit = (product: Product) => {
    if (productToEdit) {
      editProduct(productToEdit.name, product);
      setProductToEdit(undefined);
    } else {
      createProduct(product);
    }
  };

  return (
    <>
      <section className="inventory">
        <button className="create-btn" onClick={openModal}>
          Create new product
        </button>
        <div className="inventory-list">
          {products.length ? (
            products.map((p) => (
              <InventoryItem
                key={p.name}
                product={p}
                editHandler={handleEditClick}
                deleteHandler={deleteProduct}
              />
            ))
          ) : (
            <h4>There are no products yet.</h4>
          )}
        </div>
      </section>

      <Modal isOpen={isModalOpen}>
        <ProductForm
          product={productToEdit}
          usedNames={products.map((p) => p.name)}
          closeForm={handleFormCancel}
          submitHandler={handleFormSubmit}
        />
      </Modal>
    </>
  );
}

export default Inventory;
