import { useState } from "react";

export default function StudentForm({ onAddStudent }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !age) return;
    onAddStudent(name, age);
    setName("");
    setAge("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg p-4 mb-6 max-w-md mx-auto"
    >
      <h2 className="text-xl font-semibold mb-4">Add New Student</h2>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="number"
          placeholder="Age"
          className="w-full p-2 border rounded"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
      >
        Add Student
      </button>
    </form>
  );
}
