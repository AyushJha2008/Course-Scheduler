import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function AddCourse() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    level: "",
    description: "",
    image: ""
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
      await API.post("/courses", formData);
      toast.success("Course created successfully");

      setFormData({
        name: "",
        level: "",
        description: "",
        image: ""
      });

      navigate("/admin");
    } catch (error) {
      toast.error(error.response?.data?.message || error.message || "Error creating course");
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8">

      <h2 className="text-xl font-semibold mb-6">
        Add Course
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow max-w-2xl"
      >

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Course Name */}
          <div>
            <label className="block mb-1 text-sm">
              Course Name
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

          {/* Level */}
          <div>
            <label className="block mb-1 text-sm">
              Level
            </label>

            <select
              name="level"
              value={formData.level}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            >

              <option value="">Select Level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>

            </select>
          </div>

        </div>

        {/* Description */}
        <div className="mt-4">

          <label className="block mb-1 text-sm">
            Description
          </label>

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            rows="4"
          />

        </div>

        {/* Image */}
        <div className="mt-4">

          <label className="block mb-1 text-sm">
            Image URL
          </label>

          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

        </div>

        {/* Button */}
        <button
          type="submit"
          className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Create Course
        </button>

      </form>

    </div>
  );
}

export default AddCourse;