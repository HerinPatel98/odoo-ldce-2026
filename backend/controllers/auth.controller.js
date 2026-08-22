import { db } from "./../config/db.js"
import bcrypt from "bcrypt"
export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;


        if (!name || !email || !password) {
            return res.status(400).json({
                message: "Name, email and password are required"
            });
        }


        const existingUser = await db("users")
            .where("email", email)
            .first();

        if (existingUser) {
            return res.status(409).json({
                message: "Email is already registered"
            });
        }


        const passwordHash = await bcrypt.hash(password, 12);


        const [userId] = await db("users").insert({
            name: name,
            email: email,
            password_hash: passwordHash
        });


        return res.status(201).json({
            message: "User registered successfully",
            user: {
                id: userId,
                name: name,
                email: email
            }
        });

    } catch (error) {
        console.error("Registration error:", error);

        return res.status(500).json({
            message: "Internal server error"
        });
    }
}
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log("Login request body:", req.body);

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required"
            });
        }


        const user = await db("users")
            .where("email", email)
            .first();


        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }


        const passwordMatches = await bcrypt.compare(
            password,
            user.password_hash
        );


        if (!passwordMatches) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }


        req.session.userId = user.id;


        return res.status(200).json({
            message: "Login successful",
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {
        console.error("Login error:", error);

        return res.status(500).json({
            message: "Internal server error"
        });
    }
}
export const logoutUser = async (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error("Logout error:", err);

            return res.status(500).json({
                message: "Could not log out"
            });
        }

        res.clearCookie("connect.sid");

        return res.status(200).json({
            message: "Logout successful"
        });
    });
}