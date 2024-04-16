import "./TodoSearch.css";
const TodoSearch = () => {
  return (
    <input
      placeholder="Cortar cebolla"
      className="TodoSearch"
      onChange={(event) => {
        console.log(event);
        console.log(event.target);
        console.log(event.target.value);
      }}
    />
  );
};

export default TodoSearch;
