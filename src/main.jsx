/* eslint-disable react/prop-types */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// function App(props) {
//   return (
//     <h1>
//       ¡{props.saludo}, {props.nombre}!
//     </h1>
//   );
// }

// function withSaludo(WrappedComponent) {
//   return function WrappedComponentWithSaludo(saludo) {
//     return function component(props) {
//       return (
//         <>
//           <WrappedComponent {...props} saludo={saludo} />
//           <p>Hola</p>
//         </>
//       );
//     };
//   };
// }

// const AppWithSaludo = withSaludo(App)("Hey");

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <AppWithSaludo nombre="Danniel" />
//   </React.StrictMode>
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
