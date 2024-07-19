import { useState } from "react";

export function useCashier() {
  const [cash, setCash] = useState(0);

  function insertCash(amount: number) {
    setCash(cash + amount);
  }

  function clearCash() {
    setCash(0);
  }

  return { cash, insertCash, clearCash };
}
