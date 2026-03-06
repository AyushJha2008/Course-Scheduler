import express from "express"
import
  {createInstructor,
  getAllInstructors,
  getInstructorLectures,
  getMyLectures
} from "../controllers/instructor.controller.js";
import { isAdmin, isAuthenticated } from "../middlewares/auth.middleware.js";

const router = express.Router();
// create instructor
router.post("/", isAuthenticated, isAdmin, createInstructor);
// get all instructors
router.get("/", getAllInstructors, isAdmin, isAuthenticated);
// get lectures of instructor
router.get("/:id/lectures",isAuthenticated, isAdmin, getInstructorLectures);
router.get("/my-lectures", isAuthenticated, getMyLectures)

//
export default router;