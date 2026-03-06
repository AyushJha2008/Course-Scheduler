import { useState } from "react";
import API from "../api/axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function AddInstructor() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await API.post("/instructors", formData);

      toast.success("Instructor created successfully");

      setFormData({
        name: "",
        email: "",
        password: ""
      });

    } catch (error) {
      console.log(error);
      toast.error("Error creating instructor");
    }
    navigate("/admin")
  };

  return (
    <div className="p-4 md:p-6 lg:p-8">

      <h2 className="text-xl font-semibold mb-6">
        Add Instructor
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow max-w-md"
      >

        {/* Name */}
        <div className="mb-4">

          <label className="block text-sm mb-1">
            Name
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

        </div>

        {/* Email */}
        <div className="mb-4">

          <label className="block text-sm mb-1">
            Email
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

        </div>

        {/* Password */}
        <div className="mb-4">

          <label className="block text-sm mb-1">
            Password
          </label>

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Create Instructor
        </button>

      </form>

    </div>
  );
}

export default AddInstructor;