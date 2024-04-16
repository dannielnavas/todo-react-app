import { useState } from "react";
import "./TodoSearch.css";

const TodoSearch = () => {
  const [searchValue, setSearchValue] = useState("");

  console.log(searchValue);

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
