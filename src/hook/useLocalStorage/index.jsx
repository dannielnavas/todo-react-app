/* eslint-disable react-hooks/exhaustive-deps */
import React, { useReducer } from "react";

const useLocalStorage = (itemName, initialValue) => {
  const [state, dispatch] = useReducer(reducer, initialState(initialValue));
  const { sincronizedItem, error, loading, items } = state;

  const onError = (error) => dispatch({ type: actionTypes.ERR, payload: error });
  const onSuccess = (payload) => dispatch({ type: actionTypes.SUCCESS, payload });
  const onSave = (item) => dispatch({ type: actionTypes.SAVE, payload: item });
  const onSincronize = () => dispatch({ type: actionTypes.SINCRONIZE });

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
        }
        onSuccess(parsedItem);
      } catch (error) {
        onError(error);
      }
    }, 2000);
  }, [sincronizedItem]);

  const saveItem = (newItem) => {
    try {
      const stringifiedTodos = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedTodos);
      onSave(newItem);
    } catch (error) {
      onError(error);
    }
  };

  const sincronize = () => {
    onSincronize();
  };

  return { items, saveItem, loading, error, sincronize };
};

const initialState = ({ initialValue }) => ({
  loading: true,
  error: false,
  sincronizedItem: true,
  items: initialValue,
});

const reducer = (state, action) => {
  return reducerObject(state, action)[action.type] || state;
};

const actionTypes = {
  SINCRONIZE: "SINCRONIZE",
  ERR: "ERR",
  SUCCESS: "SET",
  SAVE: "SAVE",
};

const reducerObject = (state, action) => ({
  [actionTypes.ERR]: { ...state, error: true, loading: false },
  [actionTypes.SUCCESS]: {
    ...state,
    items: action.payload,
    loading: false,
    sincronizedItem: true,
    error: false,
  },
  [actionTypes.SAVE]: { ...state, items: action.payload },
  [actionTypes.SINCRONIZE]: { ...state, loading: true, sincronizedItem: false },
});

export default useLocalStorage;
