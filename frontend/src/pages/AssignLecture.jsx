import { useEffect, useState } from "react";
import API from "../api/axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function AssignLecture() {
  const navigate = useNavigate()

  const [courses, setCourses] = useState([]);
  const [instructors, setInstructors] = useState([]);

  const [formData, setFormData] = useState({
    courseId: "",
    instructorId: "",
    lectureDate: ""
  });

  const fetchCourses = async () => {
    const res = await API.get("/courses");
    setCourses(res.data);
  };

  const fetchInstructors = async () => {
    const res = await API.get("/instructors");
    setInstructors(res.data);
  };

  useEffect(() => {
    fetchCourses();
    fetchInstructors();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/lectures", formData);
      toast.success("Lecture assigned successfully");

      setFormData({
        courseId: "",
        instructorId: "",
        lectureDate: ""
      });

      navigate("/admin");
    } catch (error) {
      toast.error(error.response?.data?.message || "Error assigning lecture");
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8">

      <h2 className="text-xl font-semibold mb-6">
        Assign Lecture
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow max-w-2xl"
      >

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Course */}
          <div>
            <label className="block text-sm mb-1">
              Course
            </label>

            <select
              name="courseId"
              value={formData.courseId}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            >

              <option value="">Select Course</option>

              {courses.map((course) => (
                <option key={course._id} value={course._id}>
                  {course.name}
                </option>
              ))}

            </select>
          </div>

          {/* Instructor */}
          <div>
            <label className="block text-sm mb-1">
              Instructor
            </label>

            <select
              name="instructorId"
              value={formData.instructorId}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            >

              <option value="">Select Instructor</option>

              {instructors.map((inst) => (
                <option key={inst._id} value={inst._id}>
                  {inst.name}
                </option>
              ))}

            </select>
          </div>

        </div>

        {/* Lecture Date */}
        <div className="mt-4">

          <label className="block text-sm mb-1">
            Lecture Date
          </label>

          <input
            type="date"
            name="lectureDate"
            value={formData.lectureDate}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

        </div>

        <button
          type="submit"
          className="mt-6 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Assign Lecture
        </button>
      </form>
    </div>
  );
}

export default AssignLecture;