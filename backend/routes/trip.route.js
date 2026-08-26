import express from "express";
<<<<<<< HEAD
import { createTrip, getTrips, getTripById, updateTrip, deleteTrip } from "../controllers/trip.controller.js";
import { authMiddleware } from "../utils/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, createTrip);
router.get("/", authMiddleware, getTrips);
router.get("/:id", authMiddleware, getTripById);
router.put("/:id", authMiddleware, updateTrip);
router.delete("/:id", authMiddleware, deleteTrip);  
