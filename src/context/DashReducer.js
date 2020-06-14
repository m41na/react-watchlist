import {
  SHOW_ALERT,
  HIDE_ALERT,
  INIT_STATE,
  SET_SYMBOL,
  REMOVE_SYMBOL,
  UPDATE_SYMBOL,
  RESTORE_SYMBOLS,
} from "./actionTypes";

const showAlert = (alert, state) => {
  return { ...state, alert: { ...state.alert, ...alert } };
};

const hideAlert = (state) => {
  return {
    ...state,
    alert: { ...state.alert, type: "", message: "", action: null },
  };
};

const initState = (quotes, state) => {
  return { ...state, quotes };
};

const setSymbol = (symbol, data, state) => {
  return { ...state, quotes: { ...state.quotes, data }, symbol };
};

const removeSymbol = (symbol, nextSymbol = "", callback, state) => {
  let filtered = state.quotes.symbols.filter((sy) => sy.symbol !== symbol);
  return {
    ...state,
    quotes: {
      ...state.quotes,
      symbols: filtered,
      data: callback(nextSymbol) || [],
    },
    symbol: nextSymbol,
  };
};

const updateSymbol = (symbol, data, state) => {
  return { ...state, quotes: { ...state.quotes, data }, symbol };
};

const restoreSymbols = (symbol, quotes, state) => {
  return { ...state, quotes, symbol };
};

export const DashReducer = (state, action) => {
  switch (action.type) {
    case INIT_STATE: {
      return initState(action.quotes, state);
    }
    case SHOW_ALERT: {
      return showAlert(action.alert, state);
    }
    case HIDE_ALERT: {
      return hideAlert(state);
    }
    case SET_SYMBOL: {
      return setSymbol(action.symbol, action.data, state);
    }
    case REMOVE_SYMBOL: {
      return removeSymbol(
        action.symbol,
        action.nextSymbol,
        action.callback,
        state
      );
    }
    case UPDATE_SYMBOL: {
      return updateSymbol(action.symbol, action.data, state);
    }
    case RESTORE_SYMBOLS: {
      return restoreSymbols(action.symbol, action.quotes, state);
    }
    default: {
      return state;
    }
  }
};
