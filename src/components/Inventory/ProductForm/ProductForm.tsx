import { useEffect, useState } from "react";
import { Product } from "../../../models";
import { verifyPrice, verifyQuantity } from "../../../utils/helpers";
import { notifyError } from "../../../utils/notifications";
import {
  INVALID_NAME,
  INVALID_PRICE,
  INVALID_QUANTITY,
  NO_NAME,
} from "../../../utils/messages";

import "./ProductForm.css";

interface FormProps {
  product?: Product;
  usedNames: string[];
  closeForm: () => void;
  submitHandler: (product: Product) => void;
}

function ProductForm({
  product,
  usedNames,
  submitHandler,
  closeForm,
}: FormProps) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const clearState = () => {
    setName("");
    setQuantity("");
    setPrice("");
  };

  const handleCancel = () => {
    closeForm();
    clearState();
  };

  const handleSubmit = () => {
    const newQuantity = +quantity;
    const newPrice = +price;

    if (!name.trim()) return notifyError(NO_NAME);
    if (
      (!product || product.name !== name) &&
      usedNames.find((n) => n === name)
    )
      return notifyError(INVALID_NAME);
    if (verifyQuantity(newQuantity)) return notifyError(INVALID_QUANTITY);
    if (verifyPrice(newPrice)) return notifyError(INVALID_PRICE);

    // Format the price to the second digit, as this is the allowed format
    submitHandler({ name, quantity: newQuantity, price: +newPrice.toFixed(2) });
    closeForm();
    clearState();
  };

  // Listen for changes to product, as the form is loaded with the Inventory
  // and initial values in useState do not work
  useEffect(() => {
    if (product) {
      setName(product.name);
      setQuantity(product.quantity.toString());
      setPrice(product.price.toString());
    } else {
      clearState();
    }
  }, [product]);

  return (
    <div className="product-form">
      <h3>{product ? "Update" : "Create"} Product</h3>
      <form>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(evt) => setName(evt.target.value)}
        />

        <label htmlFor="quantity">Quantity (max: 15)</label>
        <input
          id="quantity"
          type="number"
          value={quantity}
          onChange={(evt) => setQuantity(evt.target.value)}
          min={0}
          max={15}
        />

        <label htmlFor="price">Price (max: 99.9)</label>
        <input
          id="price"
          type="number"
          value={price}
          onChange={(evt) => setPrice(evt.target.value)}
          min={0}
          max={99.5}
        />
        <div className="button-container">
          <button type="button" onClick={handleSubmit}>
            Save
          </button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProductForm;
