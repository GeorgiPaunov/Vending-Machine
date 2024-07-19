import { useState } from "react";
import { useProducts } from "./hooks";
import { View } from "./models";
import Navigation from "./components/Navigation/Navigation";
import VendingMachine from "./components/VendingMachine/VendingMachine";
import Inventory from "./components/Inventory/Inventory";

import "./App.css";

function App() {
  const [view, setView] = useState(View.MACHINE);
  const { products, sellProduct, addProduct, removeProduct, editProduct } =
    useProducts();

  return (
    <section className="App">
      <Navigation currentView={view} selectView={setView} />
      {view === View.MACHINE ? (
        <VendingMachine products={products} sellProduct={sellProduct} />
      ) : (
        <Inventory
          products={products}
          createProduct={addProduct}
          editProduct={editProduct}
          deleteProduct={removeProduct}
        />
      )}
    </section>
  );
}

export default App;
