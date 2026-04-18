import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import OtpLogin from "./pages/OtpLogin";

function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp-login" element={<OtpLogin />} />


      </Routes>
    </BrowserRouter>
  )
}

export default App
