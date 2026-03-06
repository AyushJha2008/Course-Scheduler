import { Lecture } from "../models/lecture.model.js";

export const createLecture = async (req, res) => {
  try {

    const { courseId, instructorId, lectureDate } = req.body;
    if (!courseId || !instructorId || !lectureDate) {
    return res.status(400).json({
      message: "courseId, instructorId and lectureDate are required"
    });
    }

    // CHECK SCHEDULE CLASH
    const existingLecture = await Lecture.findOne({
      instructor: instructorId,
      lectureDate
    });

    if (existingLecture) {
      return res.status(400).json({
        message: "Instructor already assigned a lecture on this date"
      });
    }

    const lecture = await Lecture.create({
      course: courseId,
      instructor: instructorId,
      lectureDate
    });

    res.status(201).json(lecture);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }

};

export const getAllLectures = async (req, res) => {
  try {

    const lectures = await Lecture.find()
      .populate("course", "name")
      .populate("instructor", "name email");

    res.json(lectures);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};