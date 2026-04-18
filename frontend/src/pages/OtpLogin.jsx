
import { useState } from "react";
import axios from "../api/axios";
import {
  useLocation,
  useNavigate
} from "react-router-dom";

function OtpLogin() {
      const navigate = useNavigate();
  const location = useLocation();
   const email = location.state?.email;
//   const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpBox, setShowOtpBox] = useState(false);

  const sendOtp = async () => {
    try {
      const res = await axios.post("/auth/login/otp", {
        email
      });

      alert("OTP: " + res.data.otp);
      setShowOtpBox(true);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const verifyOtp = async () => {
    try {
      const res = await axios.post("/auth/verify-otp", {
        email,
        otp
      });

      localStorage.setItem("token", res.data.token);

      alert("Login Success");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Verify OTP</h2>
    <p>{email}</p>
      <input
        placeholder="Enter Email"
         onChange={(e) =>
          setOtp(e.target.value)
        }
      />

      
      <br /><br />
      <button onClick={verifyOtp}>
        Verify OTP
      </button>

    </div>
  );
}

export default OtpLogin;
