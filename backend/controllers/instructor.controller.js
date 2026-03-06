import { Instructor } from "../models/instructor.model.js";
import { Lecture } from "../models/lecture.model.js";

export const createInstructor = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const instructor = await Instructor.create({
      name,
      email,
      password
    });

    res.status(201).json(instructor);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllInstructors = async (req, res) => {
  try {
    const instructors = await Instructor.find();

    res.json(instructors);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getInstructorLectures = async (req, res) => {
  try {

    const instructorId = req.params.id;

    const lectures = await Lecture.find({ instructor: instructorId })
      .populate("course", "name")
      .sort({ lectureDate: 1 });

    res.json(lectures);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMyLectures = async (req, res) => {

  const instructorId = req.user.id;
  const lectures = await Lecture.find({
    instructor: instructorId
  }).populate("course", "name");

  res.json(lectures);
};