const {
  reader: readAsync,
  writer: saveAsync,
  loader: loadAsync,
  loadJson,
} = require("../../services/repository");

describe("loading mock quotes data", () => {
  const symbol = "SPY";
  it("should have valid array of elements", async () => {
    const quotes = await readAsync(symbol, "csv");
    expect(quotes).toHaveLength(253);
  });
});

describe("saving mock quotes as json", () => {
  it("should write to file", async () => {
    const result = await saveAsync("./ignore-this", { data: "some data" });
    expect(result).toBe(undefined);
  });
});

describe("loading saved quotes data", () => {
  it("should load json array data if it exists", async () => {
    try {
      const json = await loadAsync("ignore-this");
      expect(json).toMatchObject({ data: "some data" });
      expect(json.data).toBe("some data");
    } catch (error) {
      console.log("data file does not exist");
    }
  });
});

describe("loading mocked json quotes using loadJson", () => {
  it("should read json from the file", async () => {
    const promised = loadJson("SPY");
    promised
      .then((array) => expect(array).toHaveLength(253))
      .catch((e) => console.log("ignoring error", e));
  });
});
