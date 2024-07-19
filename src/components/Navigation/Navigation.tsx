import { View } from "../../models";

import "./Navigation.css";

interface NavProps {
  currentView: View;
  selectView: (view: View) => void;
}

function Navigation({ currentView, selectView }: NavProps) {
  const getTabClass = (tabName: string) => {
    return tabName === currentView ? "active" : "inactive";
  };

  return (
    <nav className="navigation">
      <div
        className={getTabClass(View.MACHINE)}
        onClick={() => selectView(View.MACHINE)}
      >
        {View.MACHINE}
      </div>
      <div
        className={getTabClass(View.INVENTORY)}
        onClick={() => selectView(View.INVENTORY)}
      >
        {View.INVENTORY}
      </div>
    </nav>
  );
}

export default Navigation;
