/* eslint-disable react/prop-types */
import CreateTodoButton from "./components/CreateTodo";
import TodoCounter from "./components/TodoCounter";
import TodoItems from "./components/TodoItems";
import TodoList from "./components/TodoList";
import TodoSearch from "./components/TodoSearch";

const AppUI = ({
  total,
  completed,
  searchValue,
  setSearchValue,
  searchedTodo,
  completeTodo,
  deleteTodo,
}) => {
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
};

export default AppUI;
