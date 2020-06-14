const path = require('path');
const csv = require('csvtojson');
const save = require('write-json-file');
const load = require('load-json-file');

const filename = (symbol, ext = 'json') => `src/__mocks__/${symbol}.${ext}`;
/**
 * read data from csv file in mock folder
 */
const reader = (symbol) => {
    const filePath = path.resolve(".", filename(symbol, 'csv'));
    return csv()
        .fromFile(filePath)
        .then(json => json);
}

/**
 * write data file to temp folder outside of src
 */
const writer = (symbol, data) => {
    const filePath = path.resolve(".", ".ignore", `${symbol}.json`);
    return save(filePath, data);
}

/**
 * load saved json file in mock folder
 */
const loader = (symbol) => {
    const filePath = path.resolve('.', ".ignore", `${symbol}.json`);
    return load(filePath)
}

/**
 * specify a file to transform from csv to json and write to the mock folder
 */
const transform = async (symbol) => {
    const data = await reader(symbol);
    const filePath = path.resolve(".", filename(symbol));
    await save(filePath, data);
    console.log('transformation completed');
}

/**
 * dynamic import - this cannot be used in the DOM
 */
const loadJson = async (symbol) => {
    const filePath = path.resolve(".", filename(symbol));
    const json = await import(filePath);
    return json.default;
}

module.exports = {
    reader,
    writer,
    loader,
    transform,
    loadJson,
};