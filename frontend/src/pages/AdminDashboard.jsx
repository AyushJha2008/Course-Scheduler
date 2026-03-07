import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import API from "../api/axios";

function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
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
    } catch (error) { console.log(error); }
  };

  useEffect(() => { fetchStats(); }, []);

  const navLinks = [
    { name: "Add Instructor", path: "/admin/add-instructor" },
    { name: "Instructors List", path: "/admin/instructors" },
    { name: "Add Course", path: "/admin/add-course" },
    { name: "Courses List", path: "/admin/courses" },
    { name: "Assign Lecture", path: "/admin/assign-lecture" },
    { name: "All Lectures", path: "/admin/lectures" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="flex">
        {/* Modern Sidebar */}
        <aside className={`fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="p-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Management</h2>
            <nav className="space-y-1">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path}>
                  <button className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all ${location.pathname === link.path ? "bg-indigo-50 text-indigo-600" : "text-slate-600 hover:bg-slate-50"}`}>
                    {link.name}
                  </button>
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          <header className="bg-white/80 backdrop-blur-md sticky top-0 border-b border-slate-200 p-4 flex items-center gap-4 lg:hidden">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 bg-slate-100 rounded-lg">☰</button>
            <h1 className="font-bold text-slate-800">Admin Dashboard</h1>
          </header>

          <main className="p-6 md:p-10 max-w-7xl mx-auto">
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
          </main>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
