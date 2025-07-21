import "./App.css";
import Navbar from "./Components/Navbar";
import Form from "./Components/TodoForm";
import DisplayTodo from "./Components/DisplayTodo";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import About from "./Components/About";
// import Services from "./Components/Services";
// import Contact from "./Components/Contact"
import { useEffect, useState } from "react";

function App() {
  let initTodo;
  if(localStorage.getItem("todolist") == null){
    setTodolist([])
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todolist"))
  }

  const [todolist, setTodolist] = useState(initTodo);
  useEffect( () => {
    localStorage.setItem("todolist" , JSON.stringify(todolist))
  } , [todolist])
  const [showEditForm, setShowEditForm] = useState(false);
  const [editData, setEditData] = useState(null);
  const [title, setTitle] = useState("");
  const [work, setWork] = useState("");

  const addTodo = (todo) => {
    if (!todo || !todo.subject || !todo.work) return;
    const newTodo = { ...todo, id: todolist.length + 1 };
    setTodolist([...todolist, newTodo]);
    localStorage.setItem("todos", JSON.stringify(todolist));
  };

  const deleteTodo = (id) => {
    setTodolist(todolist.filter((todo) => todo.id !== id));
    setShowEditForm(false);
    localStorage.setItem("todos", JSON.stringify(todolist));
  };

  const editTodo = (id) => {
    const todoToEdit = todolist.find((todo) => todo.id === id);
    if (todoToEdit) {
      setEditData(todoToEdit);
      setTitle(todoToEdit.subject);
      setWork(todoToEdit.work);
      setShowEditForm(true);
      localStorage.setItem("todos", JSON.stringify(todolist));
    } else {
      alert("Todo not found");
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!title || !work) {
      alert("Title and Work can't be blank");
    } else {
      const updateTodo = { ...editData, subject: title, work: work };
      setTodolist(
        todolist.map((todos) =>
          todos.id === updateTodo.id ? updateTodo : todos
        )
      );
      setShowEditForm(false);
      setTitle("");
      setWork("");
      setEditData(null);
    }
  };

  return (
    <>
      {/* <Router basename="/Todo-React-JS"> */}
        <Navbar />
        {/* <Routes> */}
          {/* <Route
            exact
            path="/"
            element={ */}
              <>
                <Form addTodo={addTodo} />
                <DisplayTodo
                  todolist={todolist}
                  deleteTodo={deleteTodo}
                  editTodo={editTodo}
                />

                {showEditForm && (
                  <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative">
                      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
                        Edit Todo
                      </h2>
                      <form
                        onSubmit={handleUpdate}
                        className="bg-white shadow-md rounded px-8 pt-6 pb-8 max-w-md mx-auto mt-10"
                      >
                        <div>
                          <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                              Subject
                            </label>
                            <input
                              type="text"
                              value={title}
                              onChange={(e) => setTitle(e.target.value)}
                              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                          </div>

                          <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                              Work
                            </label>
                            <input
                              type="text"
                              value={work}
                              onChange={(e) => setWork(e.target.value)}
                              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                          </div>

                          <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
                          >
                            Update Todo
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </>
            {/* }
          ></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/services" element={<Services />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
