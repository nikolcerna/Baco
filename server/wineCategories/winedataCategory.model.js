import * as fs from "fs/promises";
const DATA_FILE = "./data.json";

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
  let wineIndex = wineData.findIndex(wineData => wineData.type === type)
  if (wineIndex !== -1) {
    return wineData[wineIndex]
  } else {
    throw new Error(`no such type: ${type}`);
  }
}