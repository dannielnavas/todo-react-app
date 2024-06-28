/* eslint-disable react/prop-types */
import { TodoIcon } from "../TodoIcon";

const EditIcon = ({ onEdit }) => {
  return <TodoIcon type="edit" onClick={onEdit} />;
};

export default EditIcon;
