import { HashRouter, Route, Routes } from "react-router-dom";
import { EditPage } from "./routes/EditTodoPage";
import { HomePage } from "./routes/HomePage";
import { NewTodoPage } from "./routes/NewTodoPage";
import { NotFound } from "./routes/NotFount";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<NewTodoPage />} />
        <Route path="/edit/:id" element={<EditPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
