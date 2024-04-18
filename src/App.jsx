import { useState } from "react";
import "./App.css";
import CreateTodoButton from "./components/CreateTodoButton";
import TodoCounter from "./components/TodoCounter";
import TodoItems from "./components/TodoItems";
import TodoList from "./components/TodoList";
import TodoSearch from "./components/TodoSearch";

function App() {
  const [searchValue, setSearchValue] = useState("");

  console.log(searchValue);

  const [todos, setTodos] = useState([
    { text: "Cortar cebolla", completed: false },
    { text: "Tomar el curso de intro a React", completed: true },
    { text: "Llorrar con la Llorona", completed: false },
    { text: "Llamar", completed: false },
  ]);

  const completed = todos.filter((todo) => !!todo.completed).length;
  const total = todos.length;

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
  };

  const deleteTodo = (text) => {
    // const todoIndex = todos.findIndex((todo) => todo.text === text); // Encuentra el index del todo que se quiere eliminar
    // const newTodos = [...todos]; // Copia el array de todos
    // newTodos.splice(todoIndex, 1); // Elimina el todo del array

    const newTodos = todos.filter((todo) => todo.text !== text); // Filtra los todos que no sean el que se quiere eliminar
    setTodos(newTodos); // Actualiza el estado de todos
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
