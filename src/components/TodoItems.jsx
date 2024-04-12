/* eslint-disable react/prop-types */

import "./TodoItem.css";

const TodoItems = ({ name, completed }) => {
  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${completed && "Icon-check--active"}`}>
        V
      </span>
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>{name}</p>
      <span className="Icon Icon-delete">X</span>
    </li>
  );
};

export default TodoItems;
