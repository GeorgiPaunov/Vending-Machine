import { useCashier } from "../../hooks";
import { Product } from "../../models";
import { notifyError, notifySuccess } from "../../utils/notifications";
import { INSUFFICIENT_CASH, SUCCESSFUL_BUY } from "../../utils/messages";
import Cashier from "./Cashier/Cashier";
import ProductDisplayItem from "./ProductDisplayItem/ProductDisplayItem";

import "./VendingMachine.css";

interface VMProps {
  products: Product[];
  sellProduct: (name: string) => void;
}

function VendingMachine({ products, sellProduct }: VMProps) {
  const { cash, insertCash, clearCash } = useCashier();

  const order = (product: Product) => {
    if (cash >= product.price) {
      sellProduct(product.name);
      clearCash();
      notifySuccess(
        product.name + SUCCESSFUL_BUY + (cash - product.price).toFixed(2)
      );
    } else {
      notifyError(INSUFFICIENT_CASH);
    }
  };

  return (
    <section className="vending-machine">
      <Cashier sum={cash} insertCoin={insertCash} reset={clearCash} />
      <div className="product-display">
        {products.length ? (
          products.map((p) => (
            <ProductDisplayItem key={p.name} product={p} order={order} />
          ))
        ) : (
          <h4>There are no products yet.</h4>
        )}
      </div>
    </section>
  );
}

export default VendingMachine;
