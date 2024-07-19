import { Product } from "../../../models";

import "./ProductDisplayItem.css";

interface DisplayItemProps {
  product: Product;
  order: (product: Product) => void;
}

function ProductDisplayItem({ product, order }: DisplayItemProps) {
  return (
    <div className="product-item" onClick={() => order(product)}>
      <div className="product-item__left">
        <span className="product-name">{product.name}</span>
        <span className="product-quantity">({product.quantity} pcs)</span>
      </div>
      <div className="product-item__right">{product.price.toFixed(2)} lv.</div>
    </div>
  );
}

export default ProductDisplayItem;
