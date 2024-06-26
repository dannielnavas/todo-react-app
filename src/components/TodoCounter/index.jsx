import "./TodoCounter.css";

/* eslint-disable react/prop-types */
const TodoCounter = ({ completed, total }) => {
  return (
    // <h2
    //   style={{ fontSize: "24px", textAlign: "center", margin: 0, padding: "48px" }}
    // >
    //   Has completado {completed} de {total} TODOs
    // </h2>

    <h1 className="TodoCounter">
      {total > 0 ? `Has completado ${completed} de ${total} TODOs` : "No hay TODOs"}
    </h1>
  );
};

export default TodoCounter;
