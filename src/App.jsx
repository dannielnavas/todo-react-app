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

  return (
    <>
      <TodoCounter completed={completed} total={total} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodo.map((todo, index) => (
          <TodoItems key={index} name={todo.text} completed={todo.completed} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
