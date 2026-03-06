import { useState } from "react";
import { Link } from "react-router-dom";

function AdminDashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <div className={`fixed lg:static z-40 w-64 bg-white shadow-md h-full transition-transform 
      ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}>

        <div className="p-5 font-bold text-xl border-b">
          Admin Panel
        </div>
        <nav className="p-4 space-y-3">
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
          <Link  to="/admin/assign-lecture">
          <button className="block w-full text-left hover:bg-gray-100 p-2 rounded">
            Assign Lecture
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
              Total Courses
            </div>

            <div className="bg-white p-5 rounded shadow">
              Total Instructors
            </div>

            <div className="bg-white p-5 rounded shadow">
              Total Lectures
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;