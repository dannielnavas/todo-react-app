import { TodoForm } from "../../components/TodoForm";

const NewTodoPage = () => {
  return (
    <>
      <TodoForm
        label="Escribe eu nuevo todo"
        submitText="Añadir"
        submitEvent={() => console.log("Agregar nuevo todo")}
      />
    </>
  );
};

export { NewTodoPage };
