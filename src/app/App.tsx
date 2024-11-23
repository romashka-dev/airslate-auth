import "./App.scss";
import { Form } from "./pages/Form";
import { Login } from "./pages/Login";
import { Registration } from "./pages/Registration";
import { Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="login/*" element={<Login />} />
      <Route path="register/*" element={<Registration />} />
    </Routes>
  );
}
