import React, { useState, useCallback, useReducer, useEffect } from "react";
import DashContext from "./DashContext";
import { DashReducer } from "./DashReducer";
import {
  InitStateAction,
  SetSymbolAction,
  AddSymbolAction,
  RemoveSymbolAction,
  UpdateSymbolAction,
  RestoreSymbolsAction,
  ShowAlertAction,
  HideAlertAction,
} from "./actionTypes";
import {
  ALERT_SUCCESS_TYPE,
  ALERT_WARNING_TYPE,
  ALERT_INFO_TYPE,
} from "../constants";
import {
  defaultHeaders,
  defaultSymbols,
  repoQuotes,
  repoSymbols,
  simulateStockTick,
} from "../services";

const DashProvider = (props) => {
  const initialState = {
    alert: {
      type: "",
      dismissable: false,
      message: "",
      duration: 3000,
      action: () => {},
    },
    defaultSymbols, 
    repoSymbols,
    quotes: {
      headers: defaultHeaders,
      symbols: repoSymbols,
      data: [],
    },
    symbol: "",
  };

  const [state, dispatch] = useReducer(DashReducer, initialState);
  const [ticker, setTicker] = useState([]);

  const showAlert = useCallback((alert) => {
    if (!alert.dismissable) {
      setTimeout(() => {
        hideAlert();
      }, alert.duration || 3000);
      dispatch(ShowAlertAction(alert));
    } else {
      dispatch(ShowAlertAction({ ...alert, action: () => hideAlert() }));
    }
  }, []);

  const hideAlert = () => {
    dispatch(HideAlertAction());
  };

  const initAppData = useCallback(
    (symbol, initalData) => {
      dispatch(InitStateAction(initalData));
      dispatch(SetSymbolAction(symbol, repoQuotes[symbol]));
      showAlert({ type: ALERT_SUCCESS_TYPE, message: "initial data loaded" });
    },
    [showAlert]
  );

  const setSymbol = (symbol) => {
    dispatch(SetSymbolAction(symbol, repoQuotes[symbol]));
  };

  const addSymbol = (symbol) => {
    dispatch(AddSymbolAction(symbol));
    showAlert({ type: ALERT_INFO_TYPE, message: "new symbol added" });
  };

  const removeSymbol = (
    symbol,
    nextSymbol,
    callback = (next) => repoQuotes[next]
  ) => {
    dispatch(RemoveSymbolAction(symbol, nextSymbol, callback));
    showAlert({
      type: ALERT_WARNING_TYPE,
      message: `${symbol} symbol has been removed`,
    });
  };

  const updateSymbol = (symbol, toggle, period = 5000) => {
    if (toggle) {
      const [timer, cancelTimer] = simulateStockTick(
        symbol,
        period,
        (data) => dispatch(UpdateSymbolAction(symbol, data)),
        (symbol) => repoQuotes[symbol]
      );
      setTicker([timer, cancelTimer]);
    } else {
      if (ticker && ticker.length === 2) {
        ticker[1](ticker[0]);
        setTicker([]);
      }
    }
  };

  const restoreSymbols = (selected) => {
    const symbol = selected[0];
    dispatch(RestoreSymbolsAction(symbol, {data: repoQuotes[symbol], symbols: repoSymbols, headers: defaultHeaders}));
    showAlert({ type: ALERT_INFO_TYPE, message: "selected symbols restored" });
  }

  useEffect(() => {
    if (repoSymbols.length > 0) {
      const symbol = repoSymbols[0].symbol;
      initAppData(symbol, {
        data: [],
        headers: defaultHeaders,
        symbols: repoSymbols,
      });
    }
  }, [initAppData]);

  return (
    <DashContext.Provider
      value={{
        alert: state.alert,
        defaultSymbols: state.defaultSymbols, 
        repoSymbols: state.repoSymbols,
        quotes: state.quotes,
        symbol: state.symbol,
        setSymbol,
        addSymbol,
        removeSymbol,
        updateSymbol,
        restoreSymbols,
        showAlert,
        hideAlert,
      }}
    >
      {props.children}
    </DashContext.Provider>
  );
};

export default DashProvider;
