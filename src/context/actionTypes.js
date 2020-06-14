export const ADD_SYMBOL = 'ADD_SYMBOL';
export const REMOVE_SYMBOL = 'REMOVE_SYMBOL';
export const UPDATE_SYMBOL = 'UPDATE_SYMBOL';
export const SHOW_ALERT = 'SHOW_ALERT';
export const HIDE_ALERT = 'HIDE_ALERT';
export const INIT_STATE = 'INIT_STATE';
export const SET_SYMBOL = 'SET_SYMBOL';

export const InitStateAction = (quotes) => ({
    type: INIT_STATE,
    quotes
});

export const SetSymbolAction = (symbol, data) => ({
    type: SET_SYMBOL,
    symbol,
    data: data || []
})

export const AddSymbolAction = (symbol) => ({
    type: ADD_SYMBOL,
    symbol
});

export const RemoveSymbolAction = (symbol, nextSymbol, callback) => ({
    type: REMOVE_SYMBOL,
    symbol,
    nextSymbol,
    callback
});

export const UpdateSymbolAction = (symbol, data) => ({
    type: UPDATE_SYMBOL,
    symbol,
    data
});

export const ShowAlertAction = (alert) => ({
    type: SHOW_ALERT,
    alert
});

export const HideAlertAction = () => ({
    type: HIDE_ALERT
});