export default function StudentCard({ student }) {
    return (
      <div className="bg-white shadow-md rounded-lg p-4 text-center hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">{student.name}</h3>
        <p className="text-gray-600">Age: {student.age}</p>
        <p className="text-gray-500 text-sm mt-2">ID: {student.id}</p>
      </div>
    );
  }
  