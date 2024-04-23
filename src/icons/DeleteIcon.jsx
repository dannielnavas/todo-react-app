/* eslint-disable react/prop-types */
import { TodoIcon } from "./TodoIcon";

const DeleteIcon = ({ onDelete }) => {
  return <TodoIcon type="delete" color="gray" onClick={onDelete} />;
};

export default DeleteIcon;
