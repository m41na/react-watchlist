import { useState, useEffect } from "react";

const useSymbols = (defaultSymbols, repoSymbols) => {
  const [listing, setListing] = useState([]);
  const [dropdown, setDropdown] = useState([]);

  useEffect(() => {
    if (defaultSymbols && repoSymbols) {
      setListing(defaultSymbols);
      setDropdown(
        repoSymbols
          .map((sy) => sy.symbol)
          .filter((sy) => !defaultSymbols.includes(sy))
      );
    }
  }, [defaultSymbols, repoSymbols]);

  const onSelectSymbol = (symbol) => {
    if (!listing.includes(symbol)) {
      const swapSymbol = listing[0];
      setListing([symbol, ...listing.slice(1)]);
      setDropdown([...dropdown.filter((sy) => sy !== symbol), swapSymbol]);
    }
  };

  const onRemoveSymbol = (symbol, removeSymbol) => {
    if (dropdown.length > 0) {
      const nextSymbol = dropdown[0];
      setListing([nextSymbol, ...listing.filter((sy) => sy !== symbol)]);
      setDropdown(dropdown.slice(1));
      removeSymbol(symbol, nextSymbol);
    } else {
      const newListing = listing.filter((sy) => sy !== symbol);
      setListing(newListing);
      removeSymbol(symbol, newListing[0]);
    }
  };

  const onReloadSymbols = (symbols) => {
    setListing(symbols);
  }

  return [listing, dropdown, onSelectSymbol, onRemoveSymbol, onReloadSymbols];
};

export default useSymbols;
