import { renderHook, act } from "@testing-library/react-hooks";
import useSymbolContext from "../../hooks/useSymbolContext";

describe("behavior of symbol context", () => {
  it("should contain initial values for listing and dropdown", async () => {
    const {result} = renderHook(() =>
      useSymbolContext('SPY')
    );
    
    const [listing, dropdown] = result.current;
    expect(listing).toHaveLength(5);
    expect(listing).toMatchObject([ 'SPY', 'DJI', 'RUSL', 'NDX', 'TSLA' ]);
    expect(dropdown).toHaveLength(7);
  });

  it("should contain updated values after AMZN is selected", () => {
    const {result} = renderHook(() =>
      useSymbolContext('SPY')
    );

    const onSelectSymbol = result.current[2];
    
    act(() => {
      onSelectSymbol('AMZN')
    });

    expect(result.current[0]).toHaveLength(5);
    expect(result.current[0]).toMatchObject([ 'AMZN', 'DJI', 'RUSL', 'NDX', 'TSLA' ]);
  });

  it("should contain updated values after SPY is removed", () => {
    const {result} = renderHook(() =>
      useSymbolContext('SPY')
    );

    const onRemoveSymbol = result.current[3];
    
    act(() => {
      onRemoveSymbol('SPY', jest.fn())
    });

    expect(result.current[0]).toHaveLength(5);
    expect(result.current[0]).toMatchObject([ 'RUT', 'DJI', 'RUSL', 'NDX', 'TSLA' ]);
  })
});
