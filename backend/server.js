import express from "express"
import cors from "cors"
import { authRouter } from "./routes/auth.route.js"
import dotenv from 'dotenv'
import session from "express-session"
dotenv.config()

const PORT = 8000

const app = express()

app.use(express.json())
app.use(
    cors({
        origin: true,
        credentials: true
    })
)
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            secure: false,
            maxAge: 3 * 60 * 60 * 24
        }
    })
);
app.use("/api/auth", authRouter)
app.listen(PORT, () => console.log(`http://localhost:${PORT}`))