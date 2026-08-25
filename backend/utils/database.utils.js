import mongoose from "mongoose";
import { Instructor } from "../models/instructor.model.js";
import bcrypt from "bcrypt";

const seedDefaultUsers = async () => {
  try {
    const instructorCount = await Instructor.countDocuments({});
    if (instructorCount === 0) {
      console.log("Seeding default instructors...");
      
      const adminPassword = await bcrypt.hash("admin123", 10);
      const ayushPassword = await bcrypt.hash("ayush@123", 10);
      const vishalPassword = await bcrypt.hash("vishal@123", 10);
      const atharvaPassword = await bcrypt.hash("atharva@123", 10);

      await Instructor.create([
        {
          name: "Admin User",
          email: "admin@gmail.com",
          password: adminPassword,
          role: "admin",
        },
        {
          name: "Ayush",
          email: "ayush@gmail.com",
          password: ayushPassword,
          role: "instructor",
        },
        {
          name: "Vishal",
          email: "vishal@gmail.com",
          password: vishalPassword,
          role: "instructor",
        },
        {
          name: "Atharva",
          email: "atharva@gmail.com",
          password: atharvaPassword,
          role: "instructor",
        }
      ]);
      console.log("Default instructors seeded successfully!");
    }
  } catch (error) {
    console.error("Error seeding default instructors:", error);
  }
};

const connectDB = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("MONGODB CONECTED");
        await seedDefaultUsers();
    } catch (error) {
        console.log("db error", error);
    }
}

export default connectDB