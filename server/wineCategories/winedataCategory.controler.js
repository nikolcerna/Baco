import * as wineModel from "./winedataCategory.model.js";

export async function getWineByCategory (req, res) {
  try {
    let type = req.params.type
    let wine = await wineModel.getWineByType(type);
    res.json(wine).send();
  } catch (error) {
    // res.statusMessage=
    res.status(400).send(error.message);
  }
}

export async function getWineByCountry (req, res) {
  try {
    let country = req.params.country
    let wineByOrigin = await wineModel.getWineByOrigin(country);
    res.json(wineByOrigin).send();
  } catch (error) {
    // res.statusMessage=
    res.status(400).send(error.message);
  }
}

export async function getWineByVintage (req, res) {
  try {
    let vintage = req.params.vintage
    let WineByYear = await wineModel.getWineByYear(vintage);
    res.json(WineByYear).send();
  } catch (error) {
    // res.statusMessage=
    res.status(400).send(error.message);
  }
}