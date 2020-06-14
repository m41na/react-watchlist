import { renderHook, act } from "@testing-library/react-hooks";
import useLoadJson from "../../hooks/useLoadJson";

describe("behavior of symbol context", () => {
  it("should contain initial values from mock json files", async () => {
    const { result } = renderHook(() => useLoadJson());

    const [defaultSymbols, repoSymbols, repoQuotes] = result.current;
    expect(defaultSymbols).toHaveLength(5);
    expect(defaultSymbols).toMatchObject(["SPY", "DJI", "RUSL", "NDX", "TSLA"]);
    expect(repoSymbols).toHaveLength(12);
    expect(Object.keys(repoQuotes)).toHaveLength(12);
  });

  it("should reflect current quotes when a symbol is either dropped or added", () => {
    const { result } = renderHook(() => useLoadJson());

    const dropSymbolQuotes = result.current[4];

    act(() => {
        dropSymbolQuotes("AMZN");
    });

    expect(Object.keys(result.current[2])).toHaveLength(11);
    
    const addSymbolQuotes = result.current[3];

    act(() => {
        addSymbolQuotes("AMZN");
    });

    expect(Object.keys(result.current[2])).toHaveLength(12);
  });
});
