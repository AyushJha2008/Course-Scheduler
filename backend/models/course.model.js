import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
{
  name: {
    type: String,
    required: true
  },

  level: {
    type: String,
    enum: ["Beginner", "Intermediate", "Advanced"],
    required: true
  },

  description: {
    type: String,
  },

  image: {
    type: String
  }
},
{
  timestamps: true
}
);

export const Course = mongoose.model("Course", courseSchema);