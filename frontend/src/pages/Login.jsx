
import { useState } from "react";
import axios from "../api/axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Login() {
    const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/auth/login", form);
         alert("OTP: " + res.data.otp);
      localStorage.setItem("token", res.data.token);

      navigate("/otp-login", {
        state: {
          email: form.email
        }
      });
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-300 ">
     

      <form onSubmit={submitHandler}  className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
         <h2 className="text-3xl font-bold mb-6 text-center">
          Login
        </h2>
        <input
          placeholder="Email"
           className="w-full border p-3 rounded mb-4"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />
        <br /><br />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded mb-4"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />
        <br /><br />

        <button type="submit" className="w-full bg-indigo-600 text-white p-3 rounded hover:bg-indigo-700">Login</button>
        <p>
        No account? <Link to="/" className="text-purple-600 font-semibold hover:underline">Register</Link>
      </p>
      </form>

      
    </div>
  );
}

export default Login;

