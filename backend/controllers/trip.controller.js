
import db from "../db.js";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";
import path from "path";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const createTrip = async (req, res) => {
    try {



        const {
            name,
            description,
            start_date,
            end_date,
            cover_photo
        } = req.body;


        if (!name || !start_date || !end_date) {
            return res.status(400).json({
                message: "Trip name, start date and end date are required"
            });
        }


        if (new Date(start_date) > new Date(end_date)) {
            return res.status(400).json({
                message: "Start date cannot be after end date"
            });
        }

        // 5. Get logged-in user's ID from session
        const userId = req.session.userId;

        // 6. Insert trip
        const [tripId] = await db("trips").insert({
            user_id: userId,
            name: name,
            description: description || null,
            start_date: start_date,
            end_date: end_date,
            cover_photo: cover_photo || null,
            is_public: false
        });

        // 7. Get the newly created trip
        const trip = await db("trips")
            .where("id", tripId)
            .first();

        // 8. Return response
        return res.status(201).json({
            message: "Trip created successfully",
            trip: trip
        });

    } catch (error) {
        console.error("Add trip error:", error);

        return res.status(500).json({
            message: "Internal server error"
        });
    }
}
export const getTrips = async (req, res) => { }

export const getTripById = async (req, res) => { }

export const updateTrip = async (req, res) => { }

export const deleteTrip = async (req, res) => { }