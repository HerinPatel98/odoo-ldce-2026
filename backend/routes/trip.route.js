import express from "express"
import { createTrip, getTrips, getTripById, updateTrip, deleteTrip } from "../controllers/trip.controller.js";
import { authMiddleware } from "../utils/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, createTrip);
router.get("/", authMiddleware, getTrips);
router.get("/:id", authMiddleware, getTripById);
router.put("/:id", authMiddleware, updateTrip);
router.delete("/:id", authMiddleware, deleteTrip);  
=======
import { getTrip, updateChecklist } from "../controllers/trip.controller.js";

export const tripRouter = express.Router();

tripRouter.get("/:slug", getTrip);
tripRouter.patch("/:slug/checklist", updateChecklist);
>>>>>>> bf7957ebb554e6f9a8f3fda69f6290d323526cc8
