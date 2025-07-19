import React from "react";

const DisplayTodo = (props) => {
  return (
    <div>
      {props.todolist && props.todolist.map((todo , index) => {
        return (
          <div
            key={index}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md mx-auto mt-4"
          >
            <h3 className="text-xl font-semibold text-blue-600">
              {todo.subject}
            </h3>
            <p className="text-gray-700 mt-2">{todo.work}</p>
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => props.editTodo(todo.id)}>
              Edit
            </button>
            <button className="mt-4 ml-2 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => props.deleteTodo(todo.id)}>
              Delete
            </button>
          </div>
          
        );
      })}
    </div>
  );
};

export default DisplayTodo;
