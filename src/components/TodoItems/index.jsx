/* eslint-disable react/prop-types */

import CompleteIcon from "../../icons/CompleteIcon";
import DeleteIcon from "../../icons/DeleteIcon";
import EditIcon from "../../icons/EditIcon";
import "./TodoItem.css";

const TodoItems = (props) => {
  return (
    <li className="TodoItem">
      <CompleteIcon completed={props.completed} onComplete={props.onComplete} />

      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <EditIcon onEdit={props.onEdit} />
      <DeleteIcon onDelete={props.onDelete} />
    </li>
  );
};

export default TodoItems;
