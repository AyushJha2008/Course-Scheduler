import { useEffect, useState } from "react";
import API from "../api/axios";

function Lectures() {

  const [lectures, setLectures] = useState([]);

  const fetchLectures = async () => {
    try {

      const res = await API.get("/lectures");

      setLectures(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLectures();
  }, []);

  return (
    <div className="p-4 md:p-6 lg:p-8">

      <h2 className="text-xl font-semibold mb-6">
        All Lectures
      </h2>

      <div className="overflow-x-auto bg-white rounded shadow">

        <table className="w-full">

          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Course</th>
              <th className="p-3 text-left">Instructor</th>
              <th className="p-3 text-left">Date</th>
            </tr>
          </thead>

          <tbody>

            {lectures.map((lecture) => (

              <tr key={lecture._id} className="border-t">

                <td className="p-3">
                  {lecture.course?.name}
                </td>

                <td className="p-3">
                  {lecture.instructor?.name}
                </td>

                <td className="p-3">
                  {new Date(lecture.lectureDate).toLocaleDateString()}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Lectures;