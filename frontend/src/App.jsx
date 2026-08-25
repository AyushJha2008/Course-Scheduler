import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import InstructorDashboard from "./pages/InstructorDashboard";
import Instructors from "./pages/Instructor";
import AddCourse from "./pages/AddCourse";
import AssignLecture from "./pages/AssignLecture";
import Courses from "./pages/course";
import AddInstructor from "./pages/AddInstructor";
import Lectures from "./pages/Lectures";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminLayout from "./components/AdminLayout";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="bottom-left" />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />

        {/* Admin Routes */}
        <Route element={<ProtectedRoute requiredRole="admin" />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="instructors" element={<Instructors />} />
            <Route path="add-instructor" element={<AddInstructor />} />
            <Route path="courses" element={<Courses />} />
            <Route path="add-course" element={<AddCourse />} />
            <Route path="assign-lecture" element={<AssignLecture />} />
            <Route path="lectures" element={<Lectures />} />
          </Route>
        </Route>

        {/* Instructor Routes */}
        <Route element={<ProtectedRoute requiredRole="instructor" />}>
          <Route path="/instructor" element={<InstructorDashboard />} />
          <Route path="/instructor/dashboard" element={<InstructorDashboard />} />
        </Route>

        {/* Fallback route */}
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;