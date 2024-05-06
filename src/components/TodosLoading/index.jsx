import "./TodosLoading.css";

const TodosLoading = () => {
  return (
    <div className="loader">
      <div data-glitch="Loading..." className="glitch">
        Loading...
      </div>
    </div>
  );
};

export default TodosLoading;
