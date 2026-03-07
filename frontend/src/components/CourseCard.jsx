function CourseCard({ course }) {
  return (
    <div className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Image Container with Overlay */}
      <div className="relative h-48 overflow-hidden">
        {course.image ? (
          <img
            src={course.image}
            alt={course.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-indigo-100 flex items-center justify-center text-indigo-400">
            No Image Available
          </div>
        )}
        <div className="absolute top-3 right-3">
          <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-indigo-600 shadow-sm">
            {course.level}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h2 className="font-bold text-xl text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">
          {course.name}
        </h2>
        <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
          {course.description}
        </p>
        <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between items-center">
          <button className="text-indigo-600 text-sm font-semibold hover:underline">
            View Details →
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;