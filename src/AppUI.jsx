/* eslint-disable react/prop-types */
import CreateTodoButton from "./components/CreateTodo";
import EmptyTodos from "./components/EmptyTodos";
import TodoCounter from "./components/TodoCounter";
import TodoItems from "./components/TodoItems";
import TodoList from "./components/TodoList";
import TodoSearch from "./components/TodoSearch";
import TodosError from "./components/TodosError";
import TodosLoading from "./components/TodosLoading";

const AppUI = ({
  total,
  completed,
  searchValue,
  setSearchValue,
  searchedTodo,
  completeTodo,
  deleteTodo,
  loading,
  error,
}) => {
  return (
    <>
      <TodoCounter completed={completed} total={total} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {loading && <TodosLoading />}
        {error && <TodosError />}
        {!loading && !searchedTodo.length && <EmptyTodos />}

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
