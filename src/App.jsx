import "./App.css";
import CreateTodoButton from "./components/CreateTodoButton";
import TodoCounter from "./components/TodoCounter";
import TodoList from "./components/TodoList";
import TodoSearch from "./components/TodoSearch";

function App() {
  const completed = 10;
  const total = 30;
  return (
    <>
      <TodoCounter completed={completed} total={total} />
      <TodoSearch />
      <TodoList>
        <TodoItems />
        <TodoItems />
        <TodoItems />
      </TodoList>

      <CreateTodoButton />
    </>
  );
}
function TodoItems() {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        <span>V</span>
        <p>Llorrar con la Llorona</p>
        <span>X</span>
      </ul>
    </div>
  );
}

export default App;
