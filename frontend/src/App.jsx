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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route
          path="/instructor"
          element={<InstructorDashboard />}
        />
        <Route path="/admin/instructors" element={<Instructors />} />
        <Route path="/admin/add-course" element={<AddCourse />} />
        <Route path="/admin/assign-lecture" element={<AssignLecture />} />
        <Route
          path="/instructor/dashboard"
          element={<InstructorDashboard />}
        />
        <Route path="/admin/courses" element={<Courses />} />
        <Route path="/admin/add-instructor" element={<AddInstructor />} />
        <Route path="/admin/lectures" element={<Lectures />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;