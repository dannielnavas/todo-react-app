import "./App.css";
import CreateTodoButton from "./components/CreateTodoButton";
import TodoCounter from "./components/TodoCounter";
import TodoItems from "./components/TodoItems";
import TodoList from "./components/TodoList";
import TodoSearch from "./components/TodoSearch";

function App() {
  const completed = 10;
  const total = 30;
  const defaultTodos = [
    { text: "Cortar cebolla", completed: false },
    { text: "Tomar el curso de intro a React", completed: false },
    { text: "Llorrar con la Llorona", completed: false },
    { text: "Llamar", completed: false },
  ];
  return (
    <>
      <TodoCounter completed={completed} total={total} />
      <TodoSearch />
      <TodoList>
        {defaultTodos.map((todo, index) => (
          <TodoItems key={index} name={todo.text} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
