import React, { useContext } from "react";
import DashContext from "../../context/DashContext";
import DashBoard from "./DashBoard";

const DashBoardContainer = () => {
  const { defaultSymbols, repoSymbols, quotes, symbol, showAlert, setSymbol, addSymbol, removeSymbol, updateSymbol, restoreSymbols } = useContext(DashContext);

  return (
    <DashBoard
      defaultSymbols={defaultSymbols} 
      repoSymbols={repoSymbols}
      quotes={quotes}
      symbol={symbol}
      showAlert={showAlert}
      setSymbol={setSymbol}
      addSymbol={addSymbol}
      removeSymbol={removeSymbol}
      updateSymbol={updateSymbol}
      restoreSymbols={restoreSymbols}
    />
  );
};

export default DashBoardContainer;
