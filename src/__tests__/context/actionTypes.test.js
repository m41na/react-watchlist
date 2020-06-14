import {
    ADD_SYMBOL,
    REMOVE_SYMBOL,
    UPDATE_SYMBOL,
    AddSymbolAction, 
    RemoveSymbolAction,
    UpdateSymbolAction,
    SetSymbolAction,
    InitStateAction,
    INIT_STATE,
    SET_SYMBOL,
    SHOW_ALERT,
    ShowAlertAction,
    HideAlertAction,
    HIDE_ALERT,
    RestoreSymbolsAction,
    RESTORE_SYMBOLS}
    from '../../context/actionTypes';

describe("creating actions", () => {
    it('init app state action should match object with correct type and contents', () => {
        const initState = InitStateAction({});
        expect(initState).toEqual(expect.objectContaining({
            type: INIT_STATE,
            quotes: expect.any(Object)
        }))
    });

    it('add symbol action should match object with correct type and contents', () => {
        const addSymbol = AddSymbolAction("abc");
        expect(addSymbol).toEqual(expect.objectContaining({
            type: ADD_SYMBOL,
            symbol: 'abc'
        }))
    });

    it('remove symbol action should match object with correct type and contents', () => {
        const removeSymbol = RemoveSymbolAction("def", 'ghi', () => {});
        expect(removeSymbol).toEqual(expect.objectContaining({
            type: REMOVE_SYMBOL,
            symbol: 'def',
            nextSymbol: 'ghi',
            callback: expect.any(Function)
        }))
    });

    it('update symbol action should match object with correct type and contents', () => {
        const updateSymbol = UpdateSymbolAction("ghi", []);
        expect(updateSymbol).toEqual(expect.objectContaining({
            type: UPDATE_SYMBOL,
            symbol: 'ghi',
            data: expect.any(Array)
        }))
    });

    it('restore symbols action should match object with correct type and contents', () => {
        const restoreSymbols = RestoreSymbolsAction('ABC', {});
        expect(restoreSymbols).toEqual(expect.objectContaining({
            type: RESTORE_SYMBOLS,
            symbol: 'ABC',
            quotes: expect.any(Object)
        }))
    });

    it('set selected symbol action should match object with correct type and contents', () => {
        const setSymbol = SetSymbolAction("ghi", []);
        expect(setSymbol).toEqual(expect.objectContaining({
            type: SET_SYMBOL,
            symbol: 'ghi',
            data: expect.any(Array)
        }))
    });

    it('show alert action should match object with correct type and contents', () => {
        const setSymbol = ShowAlertAction({message: "hi"});
        expect(setSymbol).toEqual(expect.objectContaining({
            type: SHOW_ALERT,
            alert: expect.any(Object)
        }))
    });

    it('hide alert action should match object with correct type and contents', () => {
        const setSymbol = HideAlertAction();
        expect(setSymbol).toEqual(expect.objectContaining({
            type: HIDE_ALERT,
        }))
    });
})