import "./TodoForm.css";

const TodoForm = () => {
  const submit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submit(event)}>
      <label>Esribe tu nuevo TODO</label>
      <textarea placeholder="Hacer tareas" />
      <div className="TodoForm-buttonContainer">
        <button type="button" className="TodoForm-button TodoForm-button--cancel">
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Añadir
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
