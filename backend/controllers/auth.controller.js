import { Instructor } from "../models/instructor.model.js";
import jwt from "jsonwebtoken"

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // find user
    const user = await Instructor.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password"
      });
    }

    // check password
    if (user.password !== password) {
      return res.status(400).json({
        message: "Invalid email or password"
      });
    }

    // create token
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      message: "Login successful",
      token,
      user:{
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};