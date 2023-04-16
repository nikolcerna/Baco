// index.js
import express from 'express'
import {getWineByCategory} from './winedataCategory.controler.js'

export const winedataCategoryRouter = express.Router();

// middleware specific to this route
winedataCategoryRouter.use(express.json())

// route handlers
//winedataRouter.get("/winedata", getAllWines);
winedataCategoryRouter.get("/winedata/:type", getWineByCategory);