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
  const { state, stateUpdaters } = useTodos();

  const {
    error,
    loading,
    searchedTodos,
    totalTodos,
    completedTodos,
    openModal,
    searchValue,
  } = state;
  const {
    setOpenModal,
    addTodo,
    completeTodo,
    deleteTodo,
    setSearchValue,
    sincronizeTodos,
  } = stateUpdaters;

  console.log(searchedTodos);
  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        loading={loading}
      />

      <TodoList
        error={error}
        loading={loading}
        searchedTodo={searchedTodos}
        total={totalTodos}
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
            onEdit={() => console.log("Editando")}
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
      <ChangeAlert sincronize={sincronizeTodos} />

      {openModal && (
        <Modal>
          <TodoForm setOpenModal={setOpenModal} addTodo={addTodo} />
        </Modal>
      )}
    </>
  );
}

export { HomePage };
