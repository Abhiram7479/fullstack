import StudentCard from "./StudentCard";

export default function StudentList({ students }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
      {students.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
}
