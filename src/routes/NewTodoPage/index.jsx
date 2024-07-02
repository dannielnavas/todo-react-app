import { TodoForm } from "../../components/TodoForm";
import { useTodos } from "../../hook/useTodos";

const NewTodoPage = () => {
  const { stateUpdaters } = useTodos();
  const { addTodo } = stateUpdaters;
  return (
    <>
      <TodoForm
        label="Escribe eu nuevo todo"
        submitText="Añadir"
        submitEvent={(text) => addTodo(text)}
      />
    </>
  );
};

export { NewTodoPage };
