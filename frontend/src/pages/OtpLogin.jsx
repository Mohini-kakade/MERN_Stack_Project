import { useState } from "react";
import axios from "../api/axios";
import { useLocation, useNavigate } from "react-router-dom";

function OtpLogin() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;
  //   const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpBox, setShowOtpBox] = useState(false);

  const verifyOtp = async () => {
    try {
      const res = await axios.post("/auth/verify-otp", {
        email,
        otp,
      });

      localStorage.setItem("token", res.data.token);
      navigate("/feed");
      alert("Login Success");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Verify OTP</h2>
        <p className="text-center text-gray-500 mb-4">{email}</p>
        <input
          placeholder="Enter Email"
          className="w-full border p-3 rounded mb-4"
          onChange={(e) => setOtp(e.target.value)}
        />

        <button
          onClick={verifyOtp}
          className="w-full bg-green-600 text-white p-3 rounded"
        >
          Verify OTP
        </button>
      </div>
    </div>
  );
}

export default OtpLogin;
