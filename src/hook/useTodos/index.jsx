/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { useState } from "react";
import useLocalStorage from "../useLocalStorage";

const useTodos = () => {
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const {
    items: todos,
    saveItem: saveTodos,
    loading,
    error,
    sincronize,
  } = useLocalStorage("TODOS_V1", []);

  const total = todos.length;
  const completed = todos.filter((todo) => !!todo.completed).length;
  const searchedTodo = todos.filter((todo) => {
    const textTodo = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();

    return textTodo.includes(searchText);
  });

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text); // Encuentra el index del todo que se quiere completar
    const newTodos = [...todos]; // Copia el array de todos
    newTodos[todoIndex].completed = true; // Cambia el valor de completed a true
    // setTodos(newTodos); // Actualiza el estado de todos
    saveTodos(todos); // Actualiza el localStorage
  };

  const deleteTodo = (text) => {
    // const todoIndex = todos.findIndex((todo) => todo.text === text); // Encuentra el index del todo que se quiere eliminar
    // const newTodos = [...todos]; // Copia el array de todos
    // newTodos.splice(todoIndex, 1); // Elimina el todo del array

    const newTodos = todos.filter((todo) => todo.text !== text); // Filtra los todos que no sean el que se quiere eliminar
    // setTodos(newTodos); // Actualiza el estado de todos
    saveTodos(newTodos); // Actualiza el localStorage
  };

  const addTodo = (text) => {
    const newTodos = [...todos]; // Copia el array de todos
    newTodos.push({
      text,
      completed: false,
    });
    saveTodos(newTodos); // Actualiza el localStorage
  };

  return {
    total,
    completed,
    searchValue,
    setSearchValue,
    searchedTodo,
    completeTodo,
    deleteTodo,
    loading,
    error,
    openModal,
    setOpenModal,
    addTodo,
    sincronize,
  };
};

export { useTodos };
