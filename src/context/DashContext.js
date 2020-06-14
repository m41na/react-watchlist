import React from "react";

export default React.createContext({
  alert: {
    type: "",
    dismissable: false,
    message: "",
    duration: 3000,
    action: () => {},
  },
  defaultSymbols: [],
  repoSymbols: [],
  quotes: {
    headers: [],
    data: [],
    symbols: [],
  },
  symbol: '',
  setSymbol: (symbol) => {},
  addSymbol: (symbol) => {},
  removeSymbol: (symbol) => {},
  updateSymbol: (symbol) => {},
  restoreSymbols: (symbols) => {},
  showAlert: (alert) => {},
  hideAlert: () => {},
});
