import AdminLoginPage from "./pages/admin/AdminLoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminSignupPage from "./pages/admin/AdminSignupPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin/signup" element={<AdminSignupPage />} />
          <Route path="/admin/login" element={<AdminLoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
