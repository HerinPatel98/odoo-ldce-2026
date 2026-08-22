import express from "express";
import { getTrip, updateChecklist } from "../controllers/trip.controller.js";

export const tripRouter = express.Router();

tripRouter.get("/:slug", getTrip);
tripRouter.patch("/:slug/checklist", updateChecklist);