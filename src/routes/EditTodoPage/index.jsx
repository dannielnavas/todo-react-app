import { useLocation, useParams } from "react-router-dom";
import { TodoForm } from "../../components/TodoForm";
import { useTodos } from "../../hook/useTodos";

const EditPage = () => {
  const location = useLocation();
  const { stateUpdaters, state } = useTodos();
  const { editTodo } = stateUpdaters;
  const { loading, getTodo } = state;

  const params = useParams();
  const id = Number(params.id);

  let todoText = "";

  if (location.state?.todo) {
    todoText = location.state.todo.text;
  } else if (loading) {
    return <p>Loading...</p>;
  } else {
    const todo = getTodo(id);
    todoText = todo?.text;
  }
  return (
    <TodoForm
      label="Edita tu todo"
      submitText="Editar"
      submitEvent={(newText) => editTodo(id, newText)}
      defaultTodoText={todoText}
    />
  );
};

export { EditPage };
