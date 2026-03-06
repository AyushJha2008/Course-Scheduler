import mongoose from "mongoose";

const instructorSchema = new mongoose.Schema(
{
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "instructor"],
    default: "instructor"
  }
},
{
  timestamps: true
}
);

export const Instructor = mongoose.model("Instructor", instructorSchema);