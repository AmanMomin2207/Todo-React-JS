import React from "react";
import { useState } from "react";

const TodoForm = (props) => {
  const [title, setTitle] = useState("");
  const [work, setWork] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !work) {
      alert("Please fill in both fields");
      // console.log("Todo added:", { subject: title, work: work }); 
    } else {
      props.addTodo({ subject: title, work: work });
      setTitle("");
      setWork("");
    }
  }

  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 max-w-md mx-auto mt-10" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
        Add New Todo
      </h2>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Subject
        </label>
        <input
          type="text"
          value={title}
          placeholder="e.g. Home, Work, Study"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Work
        </label>
        <input
          type="text"
          value={work}
          placeholder="Enter your task here"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setWork(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
      >
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
