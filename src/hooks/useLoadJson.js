import { useState, useEffect } from "react";

const useLoadJson = () => {
  const [defaultSymbols, setDefaultSymbols] = useState([]);
  const [repoSymbols, setRepoSymbols] = useState([]);
  const [repoQuotes, setRepoQuotes] = useState({});

  const addSymbolQuotes = (symbol) => {
    setRepoQuotes({
      ...repoQuotes,
      [symbol]: require(`../__mocks__/${symbol}.json`),
    });
  };

  const dropSymbolQuotes = (symbol) => {
    const reducedQuotes = {};
    for (let [key, value] of Object.entries(repoQuotes)) {
      if (key !== symbol) {
        reducedQuotes[key] = value;
      }
    }
    setRepoQuotes(reducedQuotes);
  };

  useEffect(() => {
    const symbols = require("../__mocks__/symbols.json");
    setDefaultSymbols(symbols.defaultSymbols);
    setRepoSymbols(symbols.repoSymbols);
    setRepoQuotes(
      symbols.repoSymbols.reduce((acc, curr) => {
        acc[curr.symbol] = require(`../__mocks__/${curr.symbol}.json`);
        return acc;
      }, {})
    );
  }, []);

  return [
    defaultSymbols,
    repoSymbols,
    repoQuotes,
    addSymbolQuotes,
    dropSymbolQuotes,
  ];
};

export default useLoadJson;
