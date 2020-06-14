import React, { useState, useCallback, useReducer, useEffect } from "react";
import DashContext from "./DashContext";
import { DashReducer } from "./DashReducer";
import {
  InitStateAction,
  SetSymbolAction,
  ShowAlertAction,
  HideAlertAction,
  AddSymbolAction,
  RemoveSymbolAction,
  UpdateSymbolAction,
} from "./actionTypes";
import {
  ALERT_SUCCESS_TYPE,
  ALERT_WARNING_TYPE,
  ALERT_INFO_TYPE,
} from "../constants";
import {
  defaultHeaders,
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

  const setSymbol = (symbol) => {
    dispatch(SetSymbolAction(symbol, repoQuotes[symbol]));
  };

  useEffect(() => {
    const symbol = repoSymbols[0].symbol;
    initAppData(symbol, {
      data: [],
      headers: defaultHeaders,
      symbols: repoSymbols,
    });
  }, [initAppData]);

  return (
    <DashContext.Provider
      value={{
        alert: state.alert,
        quotes: state.quotes,
        symbol: state.symbol,
        addSymbol,
        removeSymbol,
        updateSymbol,
        setSymbol,
        showAlert,
        hideAlert,
      }}
    >
      {props.children}
    </DashContext.Provider>
  );
};

export default DashProvider;
