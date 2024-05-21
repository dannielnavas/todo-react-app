/* eslint-disable react/prop-types */

import "./TodoList.css";

const TodoList = ({
  children,
  error,
  onError,
  loading,
  onLoading,
  searchedTodo,
  onEmptyTodos,
  render,
}) => {
  return (
    <section className="TodoList-Container">
      {error && onError()}
      {loading && onLoading()}
      {!loading && !searchedTodo?.length && onEmptyTodos()}
      {searchedTodo?.map(render)}
      <ul className="TodoList">{children}</ul>
    </section>
  );
};

export default TodoList;
