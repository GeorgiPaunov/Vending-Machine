import { useState } from "react";
import { notifySuccess } from "../../../utils/notifications";
import { CASHIER_RESET } from "../../../utils/messages";
import Wallet from "../Wallet/Wallet";

import "./Cashier.css";

interface CashierUnitProps {
  sum: number;
  insertCoin: (amount: number) => void;
  reset: () => void;
}

function Cashier({ sum, insertCoin, reset }: CashierUnitProps) {
  const [isWalletOpen, setIsWalletOpen] = useState(false);

  const showWallet = () => setIsWalletOpen(true);
  const hideWallet = () => setIsWalletOpen(false);

  const handleReset = () => {
    notifySuccess(CASHIER_RESET + sum.toFixed(2));
    reset();
  };

  return (
    <section className="cashier">
      <div className="cashier-unit">
        <div className="cashier-unit__sum">
          <div>{sum.toFixed(2)}</div>
          <span>Amount</span>
        </div>
        <button onClick={showWallet}>Insert coin</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      {isWalletOpen && (
        <Wallet insertCoin={insertCoin} hideWallet={hideWallet} />
      )}
    </section>
  );
}

export default Cashier;
