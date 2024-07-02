import { TodoForm } from "../../components/TodoForm";

const EditPage = () => {
  return (
    <TodoForm
      label="Edita tu todo"
      submitText="Editar"
      submitEvent={() => console.log("Editar todo")}
    />
  );
};

export { EditPage };
