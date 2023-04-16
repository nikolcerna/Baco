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