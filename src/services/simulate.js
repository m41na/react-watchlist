const sprintf = require('sprintf-js').sprintf

export default (symbol, period, acceptor, loader) => {
  function generated() {
    acceptor(
      loader(symbol).map((stock) => ({
        ...stock,
        Open: sprintf("%.6f", parseFloat(stock.Open) + Math.random()),
        High: sprintf("%.6f", parseFloat(stock.High) + Math.random()),
        Low: sprintf("%.6f", parseFloat(stock.Low) + Math.random()),
        Close: sprintf("%.6f", parseFloat(stock.Close) + Math.random()),
        Volume: sprintf(
          "%.0f",
          parseFloat(stock.Volume) + Math.random() * 10000
        ),
      }))
    );
  }

  function cancelTimer(handle) {
    clearInterval(handle);
  }
  const timer = setInterval(generated, period);
  return [timer, cancelTimer];
};
