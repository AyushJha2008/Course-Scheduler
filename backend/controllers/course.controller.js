import { Course } from "../models/course.model.js";

export const createCourse = async (req, res) => {
  try {

    const { name, level, description, image } = req.body;
    if(!name || !level){
      return res.status(400).json({
        message: "course name and level are required"
      })
    }

    const course = await Course.create({
      name,
      level,
      description,
      image
    });

    res.status(201).json(course);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllCourses = async (req, res) => {
  try {

    const courses = await Course.find();

    res.json(courses);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};