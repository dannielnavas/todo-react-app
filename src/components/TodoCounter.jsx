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
      Has completado <span>{completed}</span> de <span>{total}</span> TODOs
    </h1>
  );
};

export default TodoCounter;
