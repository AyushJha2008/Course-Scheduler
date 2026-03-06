function CourseCard({ course }) {

  return (
    <div className="bg-white rounded shadow overflow-hidden">

      {/* Image */}
      {course.image && (
        <img
          src={course.image}
          alt={course.name}
          className="w-full h-40 object-cover"
        />
      )}

      <div className="p-4">

        <h2 className="font-semibold text-lg mb-1">
          {course.name}
        </h2>

        <p className="text-sm text-gray-600 mb-2">
          Level: {course.level}
        </p>

        <p className="text-sm text-gray-500">
          {course.description}
        </p>

      </div>

    </div>
  );
}

export default CourseCard;