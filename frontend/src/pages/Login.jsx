import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";
import toast from "react-hot-toast";
import { decodeToken } from "../components/ProtectedRoute";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const decoded = decodeToken(token);
    if (decoded) {
      if (decoded.role === "admin") {
        navigate("/admin", { replace: true });
      } else {
        navigate("/instructor/dashboard", { replace: true });
      }
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      
      const role = res.data.user.role;
      toast.success("Welcome back, " + res.data.user.name + "!");
      if (role === "admin") {
        navigate("/admin", { replace: true });
      } else {
        navigate("/instructor/dashboard", { replace: true });
      }
    } catch (err) {
      if (err.message === "Network Error") {
        toast.error("Network Error: Could not connect to backend server. Please verify the backend is running on port 8000.");
      } else {
        toast.error(err.response?.data?.message || err.message || "Login failed");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="max-w-md w-full">
        <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-slate-900">Welcome Back</h2>
            <p className="text-slate-500 mt-2">Please enter your details to sign in</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
              <input
                type="email"
                placeholder="name@company.com"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-indigo-200 transition-all transform active:scale-[0.98]">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
