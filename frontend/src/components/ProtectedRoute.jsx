import { Navigate, Outlet } from "react-router-dom";

export const decodeToken = (token) => {
  if (!token) return null;
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    const decoded = JSON.parse(jsonPayload);
    
    // Check if token is expired
    if (decoded.exp && decoded.exp * 1000 < Date.now()) {
      localStorage.removeItem("token");
      return null;
    }
    return decoded;
  } catch (e) {
    localStorage.removeItem("token");
    return null;
  }
};

function ProtectedRoute({ requiredRole }) {
  const token = localStorage.getItem("token");
  const decoded = decodeToken(token);

  if (!decoded) {
    return <Navigate to="/" replace />;
  }

  if (requiredRole && decoded.role !== requiredRole) {
    if (decoded.role === "admin") {
      return <Navigate to="/admin" replace />;
    } else {
      return <Navigate to="/instructor/dashboard" replace />;
    }
  }

  return <Outlet />;
}

export default ProtectedRoute;
