import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import "./App.scss";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login/*" element={<LoginPage />} />
        <Route path="register/*" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}
