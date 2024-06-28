import "../../App.css";
import ChangeAlert from "../../components/ChangeAlert";

import CreateTodoButton from "../../components/CreateTodo";
import EmptyTodos from "../../components/EmptyTodos";
import Modal from "../../components/Modal";
import TodoCounter from "../../components/TodoCounter";
import TodoForm from "../../components/TodoForm";
import TodoItems from "../../components/TodoItems";
import TodoList from "../../components/TodoList";
import TodoSearch from "../../components/TodoSearch";
import TodosError from "../../components/TodosError";
import TodosLoading from "../../components/TodosLoading";
import { useTodos } from "../../hook/useTodos";

function HomePage() {
  const { states, stateUpdaters } = useTodos();

  const { total, completed, searchValue, searchedTodo, loading, error, openModal } =
    states;

  const {
    setSearchValue,
    completeTodo,
    deleteTodo,
    setOpenModal,
    addTodo,
    sincronize,
  } = stateUpdaters;

  console.log(searchedTodo);
  return (
    <>
      <TodoCounter completed={completed} total={total} />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        loading={loading}
      />

      <TodoList
        error={error}
        loading={loading}
        searchedTodo={searchedTodo}
        total={total}
        searchValue={searchValue}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={(searchText) => (
          <p>No hay resultados para: {searchText}</p>
        )}
        // TODO: RENDER PROPS
        // render={(todo) => (
        //   <TodoItems
        //     key={todo.text}
        //     text={todo.text}
        //     completed={todo.completed}
        //     onComplete={() => completeTodo(todo.text)}
        //     onDelete={() => deleteTodo(todo.text)}
        //   />
        // )}
      >
        {/* RENDER FUNCTION */}

        {(todo) => (
          <TodoItems
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}

        {/* {error && <TodosError error={error} />}
        {loading && <TodosLoading />}
        {!loading && !searchedTodo.length && <EmptyTodos />} */}

        {/* {searchedTodo?.map((todo) => (
          <TodoItems
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))} */}
      </TodoList>

      <CreateTodoButton setOpenModal={setOpenModal} />

      {/* <ChangeAlertWithStorageListener sincronize={sincronize} /> */}
      <ChangeAlert sincronize={sincronize} />

      {openModal && (
        <Modal>
          <TodoForm setOpenModal={setOpenModal} addTodo={addTodo} />
        </Modal>
      )}
    </>
  );
}

export { HomePage };
