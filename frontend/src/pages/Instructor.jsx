import { useEffect, useState } from "react";
import API from "../api/axios";

function Instructors() {

  const [instructors, setInstructors] = useState([]);

  const fetchInstructors = async () => {
    try {
      const res = await API.get("/instructors");
      setInstructors(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchInstructors();
  }, []);

  return (
    <div className="p-4 md:p-6 lg:p-8">

      <h2 className="text-xl font-semibold mb-4">
        Instructors
      </h2>

      {/* Responsive table */}
      <div className="overflow-x-auto bg-white rounded shadow">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>
              <th className="text-left p-3">Name</th>
              <th className="text-left p-3">Email</th>
            </tr>

          </thead>

          <tbody>

            {instructors.map((inst) => (

              <tr
                key={inst._id}
                className="border-t hover:bg-gray-50"
              >

                <td className="p-3">
                  {inst.name}
                </td>

                <td className="p-3">
                  {inst.email}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Instructors;