import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  let localStorageItem = JSON.parse(localStorage.getItem(key));
  let parsedItem;
  if (!localStorageItem) {
    localStorage.setItem(key, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = localStorageItem;
  }

  const [items, setItems] = useState(parsedItem);

  const saveItem = (newItem) => {
    const stringifiedTodos = JSON.stringify(newItem);
    localStorage.setItem(key, stringifiedTodos);
    setItems(newItem);
  };

  return [items, saveItem];
};

export default useLocalStorage;
