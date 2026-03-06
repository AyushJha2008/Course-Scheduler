import { Link } from "react-router-dom";

function Navbar() {

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <nav className="bg-white shadow p-4 flex items-center justify-between">

      {/* Logo */}
      <Link to="/" className="text-lg font-semibold">
        Lecture Scheduler
      </Link>

      {/* Menu */}
      <div className="flex items-center gap-4">

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;