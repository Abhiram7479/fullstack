import { useState } from "react";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";

export default function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Abhiram", age: 20 },
    { id: 2, name: "Bobby", age: 21 },
    { id: 3, name: "Sreekar", age: 22 },
  ]);

  const addStudent = (name, age) => {
    const newStudent = {
      id: students.length + 1,
      name,
      age: parseInt(age),
    };
    setStudents([...students, newStudent]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Student List</h1>
      <StudentForm onAddStudent={addStudent} />
      <StudentList students={students} />
    </div>
  );
}p
