/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TodoForm.css";

const TodoForm = ({ submitEvent, label, submitText }) => {
  const navigate = useNavigate();
  const [newTodoValue, setNewTodoValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    // addTodo(newTodoValue);
    submitEvent(newTodoValue);
    navigate("/");

    // setOpenModal(false);
  };

  const onCancel = () => {
    // setOpenModal(false);
    navigate("/");
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>{label}</label>
      <textarea
        placeholder="Hacer tareas"
        value={newTodoValue}
        onChange={onChange}
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          {submitText || "Agregar"}
        </button>
      </div>
    </form>
  );
};

export { TodoForm };
