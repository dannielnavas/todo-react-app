import { useState } from "react";
import "./App.css";
import CreateTodoButton from "./components/CreateTodoButton";
import TodoCounter from "./components/TodoCounter";
import TodoItems from "./components/TodoItems";
import TodoList from "./components/TodoList";
import TodoSearch from "./components/TodoSearch";

function App() {
  let parsedTodos = JSON.parse(localStorage.getItem("todos"));

  const [searchValue, setSearchValue] = useState("");
  const [todos, setTodos] = useState(parsedTodos);

  const total = todos.length;
  const completed = todos.filter((todo) => !!todo.completed).length;
  const searchedTodo = todos.filter((todo) => {
    const textTodo = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();

    return textTodo.includes(searchText);
  });

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text); // Encuentra el index del todo que se quiere completar
    const newTodos = [...todos]; // Copia el array de todos
    newTodos[todoIndex].completed = true; // Cambia el valor de completed a true
    setTodos(newTodos); // Actualiza el estado de todos
    localStorage.setItem("todos", JSON.stringify(todos)); // Actualiza el localStorage
  };

  const deleteTodo = (text) => {
    // const todoIndex = todos.findIndex((todo) => todo.text === text); // Encuentra el index del todo que se quiere eliminar
    // const newTodos = [...todos]; // Copia el array de todos
    // newTodos.splice(todoIndex, 1); // Elimina el todo del array

    const newTodos = todos.filter((todo) => todo.text !== text); // Filtra los todos que no sean el que se quiere eliminar
    setTodos(newTodos); // Actualiza el estado de todos
    localStorage.setItem("todos", JSON.stringify(todos)); // Actualiza el localStorage
  };

  return (
    <>
      <TodoCounter completed={completed} total={total} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodo.map((todo, index) => (
          <TodoItems
            key={index}
            name={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
