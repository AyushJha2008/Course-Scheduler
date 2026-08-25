import express from "express";
import cors from  "cors"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import connectDB from "./utils/database.utils.js";
import instructorRoutes from "./routes/instructor.route.js"
import courseRoutes from "./routes/course.route.js";
import lectureRoutes  from "./routes/lecture.route.js";
import authRoutes from "./routes/auth.route.js";
dotenv.config({});


const app = express();

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());
const allowedOrigins = [
    "https://course-scheduler-ten.vercel.app",
    "http://localhost:5173",
    "http://localhost:5174",
    "http://127.0.0.1:5173",
    "http://127.0.0.1:5174"
];
const corsOptions = {
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        
        if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}
app.use(cors(corsOptions))

//apis 
app.use("/api/instructors", instructorRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/lectures", lectureRoutes);
app.use("/api/auth", authRoutes);
// *http://localhost:8000/api/v1/user/register

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
    connectDB();
    console.log(`server running on port${PORT}`);
})