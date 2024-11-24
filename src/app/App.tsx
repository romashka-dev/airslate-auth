import "./App.scss";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { RegistrationPage } from "./pages/RegistrationPage";
import { Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="login/*" element={<LoginPage />} />
      <Route path="register/*" element={<RegistrationPage />} />
    </Routes>
  );
}
