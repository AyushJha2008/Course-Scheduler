import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../api/axios";

function InstructorDashboard() {
  const [lectures, setLectures] = useState([]);

  const fetchLectures = async () => {
    try {
      const res = await API.get("/instructors/my-lectures");
      setLectures(res.data);
    } catch (error) { console.log(error); }
  };

  useEffect(() => { fetchLectures(); }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="max-w-6xl mx-auto p-6 md:p-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">My Schedule</h1>
            <p className="text-slate-500 mt-1">You have {lectures.length} upcoming lectures assigned.</p>
          </div>
          <div className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg shadow-indigo-100">
            Current Term: 2026
          </div>
        </div>

        {lectures.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {lectures.map((lecture) => (
              <div key={lecture._id} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all group">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-lg bg-indigo-50 text-indigo-700 text-xs font-bold uppercase mb-3">
                    Lecture
                  </span>
                  <h2 className="font-extrabold text-xl text-slate-800 group-hover:text-indigo-600 transition-colors">
                    {lecture.course?.name || "Untitled Course"}
                  </h2>
                </div>
                
                <div className="space-y-3 pt-4 border-t border-slate-50">
                  <div className="flex items-center text-slate-600">
                    <span className="text-xs font-bold w-12 text-slate-400">DATE</span>
                    <span className="text-sm font-semibold">
                      {new Date(lecture.lectureDate).toLocaleDateString('en-US', { 
                        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
                      })}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200">
            <p className="text-slate-400 font-medium italic text-lg text-slate-600">No lectures assigned yet.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default InstructorDashboard;