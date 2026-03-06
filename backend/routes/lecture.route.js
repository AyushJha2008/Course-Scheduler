import express from "express";
import {isAuthenticated, isAdmin} from "../middlewares/auth.middleware.js"
import {
  createLecture,
  getAllLectures
} from "../controllers/lecture.controller.js";

const router = express.Router();
router.post("/", isAuthenticated, isAdmin, createLecture);
router.get("/", isAuthenticated, isAdmin, getAllLectures);

export default router;