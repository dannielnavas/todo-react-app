import { useParams } from "react-router-dom";
import { TodoForm } from "../../components/TodoForm";
import { useTodos } from "../../hook/useTodos";

const EditPage = () => {
  const { stateUpdaters } = useTodos();
  const { editTodo } = stateUpdaters;

  const params = useParams();
  const id = Number(params.id);

  return (
    <TodoForm
      label="Edita tu todo"
      submitText="Editar"
      submitEvent={(newText) => editTodo(id, newText)}
    />
  );
};

export { EditPage };
