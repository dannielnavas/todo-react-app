/* eslint-disable react/prop-types */
import "./CreateTodoButton.css";
const CreateTodoButton = ({ setOpenModal }) => {
  return (
    <button
      className="CreateTodoButton"
      onClick={() => {
        setOpenModal((state) => !state);
      }}
    >
      +
    </button>
  );
};

export default CreateTodoButton;
