import express from "express"

import {
  createCourse,
  getAllCourses
} from "../controllers/course.controller.js";
import { isAdmin, isAuthenticated } from "../middlewares/auth.middleware.js";

const router = express.Router();
// add course
router.post("/", isAuthenticated, isAdmin, createCourse);
// get all courses
router.get("/",isAuthenticated, getAllCourses);

export default router