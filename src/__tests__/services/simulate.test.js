const simulateStockTick = require("../../services/simulate");
const {loadJson} = require('../../services/repository');

jest.useFakeTimers();

describe("stock data is randomly changed", () => {
  const symbol = "SPY";

  it("should print out data changes 3 times for the first row of data", async () => {
    const [timer, cancelTimer] = simulateStockTick(
      symbol,
      2000,
      (data) => {
        console.log(JSON.stringify(data.slice(0, 1)));
      },
      loadJson
    );

    await setTimeout(() => cancelTimer(timer), 6000);
    expect(setInterval).toHaveBeenCalledTimes(1);
    expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 2000);
  });
});
