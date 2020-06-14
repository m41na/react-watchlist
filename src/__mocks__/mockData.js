export const fakeUser = {
  token: "123",
  name: "tester",
};

export const repoSymbols = [
  {
    symbol: "NDX",
    name: "NASDAQ 100 (^NDX)",
    description: "Nasdaq GIDS - Nasdaq GIDS Real Time Price. Currency in USD",
  },
  {
    symbol: "TSLA",
    name: "Tesla, Inc. (TSLA)",
    description: "NasdaqGS - NasdaqGS Real Time Price. Currency in USD",
  },
  {
    symbol: "RUT",
    name: "Russell 2000 (^RUT)",
    description:
      "Chicago Options - Chicago Options Delayed Price. Currency in USD",
  },
  {
    symbol: "RUSL",
    name: "Direxion Daily Russia Bull 2X Shares (RUSL)",
    description: "NYSEArca - Nasdaq Real Time Price. Currency in USD",
  },
  {
    symbol: "DJI",
    name: "Dow Jones Industrial Average (^DJI)",
    description: "DJI - DJI Real Time Price. Currency in USD",
  },
  {
    symbol: "SPY",
    name: "SPDR S&P 500 ETF Trust (SPY)",
    description: "NYSEArca - Nasdaq Real Time Price. Currency in USD",
  },
  {
    symbol: "CSV",
    name: "Carriage Services, Inc. (CSV)",
    description: "NYSE - NYSE Delayed Price. Currency in USD",
  },
  {
    symbol: "AMZN",
    name: "Amazon.com, Inc. (AMZN)",
    description: "NasdaqGS - NasdaqGS Real Time Price. Currency in USD",
  },
  {
    symbol: "BRK-B",
    name: "Berkshire Hathaway Inc. (BRK-B)",
    description: "NYSE - Nasdaq Real Time Price. Currency in USD",
  },
  {
    symbol: "CVX",
    name: "Chevron Corporation (CVX)",
    description: "NYSE - NYSE Delayed Price. Currency in USD",
  },
  {
    symbol: "NUGT",
    name: "Direxion Daily Gold Miners Index Bull 2X Shares (NUGT)",
    description: "NYSEArca - NYSEArca Delayed Price. Currency in USD",
  },
  {
    symbol: "XOM",
    name: "Exxon Mobil Corporation (XOM)",
    description: "NYSE - NYSE Delayed Price. Currency in USD",
  },
];

export const repoQuotes = {
  NDX: require("./NDX.json"),
  TSLA: require("./TSLA.json"),
  RUT: require("./RUT.json"),
  RUSL: require("./RUSL.json"),
  DJI: require("./DJI.json"),
  SPY: require("./SPY.json"),
  XOM: require("./XOM.json"),
  NUGT: require("./NUGT.json"),
  CVX: require("./CVX.json"),
  SBUX: require("./SBUX.json"),
  AMZN: require("./AMZN.json"),
  CSV: require("./CSV.json"),
  "BRK-B": require("./BRK-B.json"),
};

export const defaultSymbols = ["SPY", "DJI", "RUSL", "NDX", "TSLA"];

export const defaultHeaders = ["Open", "Close", "High", "Low", "Volume"];
