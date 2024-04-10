/* eslint-disable react/prop-types */
const TodoList = ({ children }) => {
  return (
    <section>
      <ul>{children}</ul>
    </section>
  );
};

export default TodoList;
