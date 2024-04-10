/* eslint-disable react/prop-types */
const TodoItems = ({ name }) => {
  return (
    <>
      <li>
        <span>V</span>
        <p>{name}</p>
        <span>X</span>
      </li>
    </>
  );
};

export default TodoItems;
