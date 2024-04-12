/* eslint-disable react/prop-types */
import "./TodoList.css";

const TodoList = ({ children }) => {
  return <ul className="TodoList">{children}</ul>;
};

export default TodoList;
