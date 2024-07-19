import { Product } from "../models";

export function sortProducts(firstProduct: Product, secondProduct: Product) {
  return firstProduct.name.localeCompare(secondProduct.name);
}

export function verifyQuantity(quantity: number) {
  return (
    !quantity || quantity < 0 || quantity > 15 || !Number.isInteger(quantity)
  );
}

export function verifyPrice(price: number) {
  return !price || price < 0 || price > 99.99;
}
