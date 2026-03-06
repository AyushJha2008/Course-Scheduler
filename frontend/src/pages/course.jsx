import { useEffect, useState } from "react";
import API from "../api/axios";
import CourseCard from "../components/CourseCard";

function Courses() {

  const [courses, setCourses] = useState([]);
  const fetchCourses = async () => {
    try {
      const res = await API.get("/courses");
      setCourses(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="p-4 md:p-6 lg:p-8">

      <h2 className="text-xl font-semibold mb-6">
        Courses
      </h2>

      {/* Responsive grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

        {courses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}

      </div>

    </div>
  );
}

export default Courses;