/* eslint-disable react/prop-types */
import { useContext } from "react";
import { TodoContext } from "./TodoContext";
import CreateTodoButton from "./components/CreateTodo";
import EmptyTodos from "./components/EmptyTodos";
import Modal from "./components/Modal";
import TodoCounter from "./components/TodoCounter";
import TodoForm from "./components/TodoForm";
import TodoItems from "./components/TodoItems";
import TodoList from "./components/TodoList";
import TodoSearch from "./components/TodoSearch";
import TodosError from "./components/TodosError";
import TodosLoading from "./components/TodosLoading";

const AppUI = () => {
  const {
    openModal,
    setOpenModal,
    completed,
    total,
    searchValue,
    setSearchValue,
    addTodo,
  } = useContext(TodoContext);
  return (
    <>
      <TodoCounter completed={completed} total={total} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
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
      <CreateTodoButton setOpenModal={setOpenModal} />

      {openModal && (
        <Modal>
          <TodoForm setOpenModal={setOpenModal} addTodo={addTodo} />
        </Modal>
      )}
    </>
  );
};

export default AppUI;
