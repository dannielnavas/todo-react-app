import PropTypes from "prop-types";

const TodoList = ({ children }) => {
  return (
    <section>
      <ul>{children}</ul>
    </section>
  );
};

TodoList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TodoList;
