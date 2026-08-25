import { useEffect, useState } from "react";
import API from "../api/axios";

function AdminDashboard() {
  const [stats, setStats] = useState({ courses: 0, instructors: 0, lectures: 0 });

  const fetchStats = async () => {
    try {
      const courses = await API.get("/courses");
      const instructors = await API.get("/instructors");
      const lectures = await API.get("/lectures");
      setStats({
        courses: courses.data.length,
        instructors: instructors.data.length,
        lectures: lectures.data.length
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Overview</h1>
        <p className="text-slate-500 mt-1">Real-time status of your scheduling system.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { label: "Total Courses", value: stats.courses, color: "bg-blue-600" },
          { label: "Total Instructors", value: stats.instructors, color: "bg-indigo-600" },
          { label: "Total Lectures", value: stats.lectures, color: "bg-violet-600" }
        ].map((stat, idx) => (
          <div key={idx} className="relative overflow-hidden bg-white p-6 rounded-2xl shadow-sm border border-slate-200 group hover:shadow-md transition-shadow">
            <div className={`absolute top-0 left-0 h-1 w-full ${stat.color}`} />
            <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">{stat.label}</p>
            <h2 className="text-4xl font-black text-slate-800 mt-2">{stat.value}</h2>
          </div>
        ))}
      </div>
    </>
  );
}

export default AdminDashboard;
