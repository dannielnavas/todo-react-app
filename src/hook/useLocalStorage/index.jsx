/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";

const useLocalStorage = (itemName, initialValue) => {
  const [items, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [sincronizedItem, setSincronizedItem] = useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItems = localStorage.getItem(itemName);
        let parsedItem;
        if (!localStorageItems) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItems);
          setItem(parsedItem);
        }
        setLoading(false);
        setSincronizedItem(true);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, [sincronizedItem]);

  const saveItem = (newItem) => {
    const stringifiedTodos = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedTodos);
    setItem(newItem);
  };

  const sincronize = () => {
    setLoading(true);
    setSincronizedItem(false);
  };

  return { items, saveItem, loading, error, sincronize };
};

export default useLocalStorage;
