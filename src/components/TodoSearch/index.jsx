/* eslint-disable react/prop-types */
import "./TodoSearch.css";

const TodoSearch = ({ searchValue, setSearchValue, loading }) => {
  return (
    <input
      placeholder="Cortar cebolla"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => setSearchValue(event.target.value)}
      disabled={loading}
    />
  );
};

export default TodoSearch;
