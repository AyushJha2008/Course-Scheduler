import { Link } from "react-router-dom";

function Navbar() {

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-3 flex items-center justify-between">

      {/* Logo */}
      <Link to="/" className="text-xl font-extrabold tracking-tight text-indigo-600 hover:text-indigo-700 transition-colors">
        Lecture<span className="text-slate-800">Scheduler</span>
      </Link>

      {/* Menu */}
      <div className="flex items-center gap-6">

        <button
          onClick={handleLogout}
          className="text-sm font-medium text-slate-600 hover:text-red-600 transition-all-custom px-4 py-2 rounded-lg hover:bg-red-50"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;