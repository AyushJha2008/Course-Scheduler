import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import API from "../api/axios";

function AdminDashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [stats, setStats] = useState({
    courses: 0,
    instructors: 0,
    lectures: 0
  });

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
    <div>
      <Navbar/>
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <div className={`fixed lg:static z-40 w-64 bg-white shadow-md h-full transition-transform 
      ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}>

        <div className="p-5 font-bold text-xl border-b">
          Admin Panel
        </div>
        <nav className="p-4 space-y-3">
          <Link  to="/admin/add-instructor">
          <button className="block w-full text-left hover:bg-gray-100 p-2 rounded">
            Add Instructor
          </button>
          </Link>

          <Link to="/admin/instructors">
          <button className="block w-full text-left hover:bg-gray-100 p-2 rounded">
            Instructors
          </button>
          </Link>
          <Link to="/admin/add-course">
          <button className="block w-full text-left hover:bg-gray-100 p-2 rounded">
            Add Course
          </button>
          </Link>

          <Link  to="/admin/courses">
          <button className="block w-full text-left hover:bg-gray-100 p-2 rounded">
            Courses
          </button>
          </Link>

          <Link  to="/admin/assign-lecture">
          <button className="block w-full text-left hover:bg-gray-100 p-2 rounded">
            Assign Lecture
          </button>
          </Link>

          <Link  to="/admin/lectures">
          <button className="block w-full text-left hover:bg-gray-100 p-2 rounded">
            All Lectures
          </button>
          </Link>

        </nav>

      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Topbar */}
        <header className="flex items-center justify-between bg-white shadow p-4">

          <button
            className="lg:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ☰
          </button>

          <h1 className="font-semibold text-lg">
            Dashboard
          </h1>

        </header>

        {/* Content */}
        <main className="p-4 md:p-6 lg:p-8">

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            <div className="bg-white p-5 rounded shadow">
              <p className="text-gray-500">Total Courses</p>
              <h2 className="text-2xl font-bold">{stats.courses}</h2>
            </div>

            <div className="bg-white p-5 rounded shadow">
              <p className="text-gray-500">Total Instructors</p>
              <h2 className="text-2xl font-bold">{stats.instructors}</h2>
            </div>

            <div className="bg-white p-5 rounded shadow">
              <p className="text-gray-500">Total Lectures</p>
              <h2 className="text-2xl font-bold">{stats.lectures}</h2>
            </div>

          </div>
        </main>
      </div>
    </div>
    </div>
  );
}

export default AdminDashboard;