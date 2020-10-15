import { Router } from "express";
import multer from "multer";
import multerConfig from "./config/upload";

import OrphanagesController from "./controllers/OrphanagesController";

const routes = Router();
const uploader = multer(multerConfig);


routes.get( '/orphanages', OrphanagesController.index)
routes.get( '/orphanages/:id', OrphanagesController.show)
routes.post( '/orphanages',uploader.array('images'), OrphanagesController.create)

export default routes;