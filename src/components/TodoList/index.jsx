/* eslint-disable react/prop-types */

import "./TodoList.css";

const TodoList = ({
  children,
  error,
  onError,
  loading,
  onLoading,
  searchedTodo,
  onEmptySearchResults,
  onEmptyTodos,
  render,
  total,
  searchValue,
}) => {
  const renderFunc = children || render;
  return (
    <section className="TodoList-Container">
      {error && onError()}
      {loading && onLoading()}
      {!loading && !total && onEmptyTodos()}
      {!!total && !searchedTodo.length && onEmptySearchResults(searchValue)}
      {!loading && !error && searchedTodo?.map(renderFunc)}
      {/* <ul className="TodoList">{children}</ul> */}
    </section>
  );
};

export default TodoList;
