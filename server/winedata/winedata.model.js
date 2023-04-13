import * as fs from "fs/promises";
const WINEDATA_FILE = "./data.json";

// return all customer from file
export async function getAll() {
  try {
    let winesTxt = await fs.readFile(WINEDATA_FILE);
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

function findWine(wineArray, Id) {
  return wineArray.findIndex(
    (currWine) => currWine.wineid === Id
  );
}

// get gustomer by ID
export async function getByID(wineId) {
  let wineArray = await getAll();
  if (wineId < 0 || wineId >= wineArray.length)
    throw new Error(`Wine with ID:${wineId} doesn't exist`);
  else return wineArray[wineId];
}
