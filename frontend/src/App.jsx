import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import OtpLogin from "./pages/OtpLogin";
import Feed from "./pages/Feed";

function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp-login" element={<OtpLogin />} />
        <Route path="/feed" element={<Feed />} />



      </Routes>
    </BrowserRouter>
  )
}

export default App
