import { useEffect, useState } from "react";
import { Product } from "../models";
import { sortProducts } from "../utils/helpers";
import { notifySuccess } from "../utils/notifications";
import {
  PRODUCT_CREATED,
  PRODUCT_DELETED,
  PRODUCT_UPDATED,
} from "../utils/messages";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  function addProduct(newProduct: Product) {
    setProducts([...products, newProduct].sort(sortProducts));
    notifySuccess(PRODUCT_CREATED);
  }

  function removeProduct(name: string) {
    setProducts(products.filter((p) => p.name !== name));
    notifySuccess(PRODUCT_DELETED);
  }

  function editProduct(name: string, newData: Product) {
    setProducts(
      products.map((p) => (p.name === name ? newData : p)).sort(sortProducts)
    );
    notifySuccess(PRODUCT_UPDATED);
  }

  function sellProduct(name: string) {
    // If the last product is sold, remove the product from the list
    if (products.find((p) => p.name === name)?.quantity === 1) {
      setProducts(products.filter((p) => p.name !== name));
    } else {
      setProducts(
        products.map((p) =>
          p.name === name ? { ...p, quantity: p.quantity - 1 } : p
        )
      );
    }
  }

  useEffect(() => {
    fetch("/initialProducts.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.sort(sortProducts)))
      .catch((err) => console.log(err));
  }, []);

  return { products, addProduct, removeProduct, editProduct, sellProduct };
}
