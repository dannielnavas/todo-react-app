/* eslint-disable react/prop-types */
const TodoCounter = ({ complete, total }) => {
  return (
    <h2>
      Has completado {complete} de {total} TODOs
    </h2>
  );
};

export default TodoCounter;
