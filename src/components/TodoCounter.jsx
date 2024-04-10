/* eslint-disable react/prop-types */
const TodoCounter = ({ completed, total }) => {
  return (
    <h2>
      Has completado {completed} de {total} TODOs
    </h2>
  );
};

export default TodoCounter;
