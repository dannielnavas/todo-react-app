/* eslint-disable react/prop-types */
import { useContext } from "react";
import { TodoContext } from "./../../TodoContext";
import "./TodoSearch.css";

const TodoSearch = () => {
  const { searchValue, setSearchValue } = useContext(TodoContext);

  return (
    <input
      placeholder="Cortar cebolla"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => setSearchValue(event.target.value)}
    />
  );
};

export default TodoSearch;
