import "./Wallet.css";

interface WalletProps {
  hideWallet: () => void;
  insertCoin: (amount: number) => void;
}

function Wallet({ insertCoin, hideWallet }: WalletProps) {
  const addCash = (amount: number) => () => insertCoin(amount);

  return (
    <div className="wallet">
      <button onClick={addCash(2)}>2 lv.</button>
      <button onClick={addCash(1)}>1 lv.</button>
      <button onClick={addCash(0.5)}>50 st.</button>
      <button onClick={addCash(0.2)}>20 st.</button>
      <button onClick={addCash(0.1)}>10 st.</button>
      <button onClick={addCash(0.05)}>5 st.</button>
      <button onClick={addCash(0.02)}>2 st.</button>
      <button onClick={addCash(0.01)}>1 st.</button>
      <button onClick={hideWallet}>Done</button>
    </div>
  );
}

export default Wallet;
