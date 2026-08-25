import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Overview", path: "/admin" },
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
        <div className="flex-1 min-w-0">
          <header className="bg-white/80 backdrop-blur-md sticky top-0 border-b border-slate-200 p-4 flex items-center gap-4 lg:hidden">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 bg-slate-100 rounded-lg">☰</button>
            <h1 className="font-bold text-slate-800">Admin Dashboard</h1>
          </header>

          <main className="p-6 md:p-10 max-w-7xl mx-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
