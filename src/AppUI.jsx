/* eslint-disable react/prop-types */
import CreateTodoButton from "./components/CreateTodo";
import EmptyTodos from "./components/EmptyTodos";
import TodoCounter from "./components/TodoCounter";
import TodoItems from "./components/TodoItems";
import TodoList from "./components/TodoList";
import TodoSearch from "./components/TodoSearch";
import TodosError from "./components/TodosError";
import TodosLoading from "./components/TodosLoading";

import { TodoContext } from "./TodoContext";

const AppUI = () => {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoContext.Consumer>
        {({ searchedTodo, completeTodo, deleteTodo, loading, error }) => (
          <div>
            {error && <TodosError error={error} />}
            {loading && <TodosLoading />}
            {!loading && !searchedTodo.length && <EmptyTodos />}
            <TodoList>
              {searchedTodo.map((todo) => (
                <TodoItems
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
                />
              ))}
            </TodoList>
          </div>
        )}
      </TodoContext.Consumer>
      <CreateTodoButton />
    </>
  );
};

export default AppUI;
