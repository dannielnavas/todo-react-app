/* eslint-disable react/prop-types */

import "./TodoItem.css";

const TodoItems = ({ name, completed, onComplete, onDelete }) => {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${completed && "Icon-check--active"}`}
        onClick={onComplete}
      >
        V
      </span>
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>{name}</p>
      <span className="Icon Icon-delete" onClick={onDelete}>
        X
      </span>
    </li>
  );
};

export default TodoItems;
