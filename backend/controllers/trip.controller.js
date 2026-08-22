import { db } from "../config/db.js";

const parseJson = (value) => typeof value === "string" ? JSON.parse(value) : value;

const requireSession = (req, res) => {
    if (!req.session.userId) {
        res.status(401).json({ message: "Authentication required" });
        return false;
    }
    return true;
};

export const getTrip = async (req, res) => {
    if (!requireSession(req, res)) return;

    try {
        const trip = await db("trips")
            .where("slug", req.params.slug)
            .where((query) => query.whereNull("user_id").orWhere("user_id", req.session.userId))
            .first();

        if (!trip) return res.status(404).json({ message: "Trip not found" });

        return res.json({
            trip: {
                ...trip,
                expenses: parseJson(trip.expenses),
                checklist: parseJson(trip.checklist)
            }
        });
    } catch (error) {
        console.error("Get trip error:", error);
        return res.status(500).json({ message: "Could not load trip" });
    }
};

export const updateChecklist = async (req, res) => {
    if (!requireSession(req, res)) return;

    const { checklist } = req.body;
    if (!Array.isArray(checklist) || checklist.some((item) => !item.label || typeof item.completed !== "boolean")) {
        return res.status(400).json({ message: "A valid checklist is required" });
    }

    try {
        const updated = await db("trips")
            .where("slug", req.params.slug)
            .where((query) => query.whereNull("user_id").orWhere("user_id", req.session.userId))
            .update({ checklist: JSON.stringify(checklist), updated_at: db.fn.now() });

        if (!updated) return res.status(404).json({ message: "Trip not found" });
        return res.json({ message: "Checklist updated", checklist });
    } catch (error) {
        console.error("Update checklist error:", error);
        return res.status(500).json({ message: "Could not update checklist" });
    }
};