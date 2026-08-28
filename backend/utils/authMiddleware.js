export function authMiddleware(req, res, next) {
    if (req.session && req.session.userId) {
        return next();
    }
<<<<<<< HEAD
<<<<<<< HEAD
    return res.status(401).json({ message: 'Unauthorized. Please log in.' });
=======
    res.status(401).json({ message: 'Unauthorized. Please log in.' });
>>>>>>> 04ca680 (new db migrations for trips, cities, trip stops, activities, trip activities, expenses, saved destinations, trip shares, and password resets. Added trip controller and route. Updated frontend index and dashboard pages.)
=======
    return res.status(401).json({ message: 'Unauthorized. Please log in.' });
>>>>>>> 8a4723b (trip code added)
}
