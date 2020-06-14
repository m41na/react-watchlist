import React, { useContext } from "react";
import DashContext from "../../context/DashContext";
import DashBoard from "./DashBoard";

const DashBoardContainer = () => {
  const { quotes, symbol, showAlert, setSymbol, addSymbol, removeSymbol, updateSymbol } = useContext(DashContext);

  return (
    <DashBoard
      quotes={quotes}
      symbol={symbol}
      showAlert={showAlert}
      setSymbol={setSymbol}
      addSymbol={addSymbol}
      removeSymbol={removeSymbol}
      updateSymbol={updateSymbol}
    />
  );
};

export default DashBoardContainer;
