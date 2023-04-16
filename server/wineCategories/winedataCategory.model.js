import * as fs from "fs/promises";
import {getDataFilePath, save} from "../common.js";

const DATA_FILE = getDataFilePath();

// return all wines from file

export async function getAll() {
  try {
    let winesTxt = await fs.readFile(DATA_FILE);
    let wines = JSON.parse(winesTxt);
    return wines.wine_data;
  } catch (err) {
    if (err.code === "ENOENT") {
      // file does not exits
      await save([]); // create a new file with ampty array
      return []; // return empty array
    } // // cannot handle this exception, so rethrow
    else throw err;
  }
}

// get wine by type

export async function getWineByType(type) {
  let wineData = await getAll();
  let typeData = wineData.filter(wineData => wineData.type === type)
  if (typeData.length > 0) {
    return typeData
  } else {
    throw new Error(`no such type: ${type}`);
  }
}