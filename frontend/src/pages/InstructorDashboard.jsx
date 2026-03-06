import { useEffect, useState } from "react";
import API from "../api/axios";

function InstructorDashboard() {

  const [lectures, setLectures] = useState([]);

  const fetchLectures = async () => {
    try {

      const res = await API.get("/instructors/my-lectures");

      setLectures(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLectures();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6 lg:p-8">

      <h1 className="text-2xl font-semibold mb-6">
        My Lectures
      </h1>

      {/* Responsive grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

        {lectures.map((lecture) => (

          <div
            key={lecture._id}
            className="bg-white rounded shadow p-5"
          >

            <h2 className="font-semibold text-lg mb-2">
              {lecture.course?.name}
            </h2>

            <p className="text-gray-600">
              Date:
            </p>

            <p className="font-medium">
              {new Date(lecture.lectureDate).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InstructorDashboard;