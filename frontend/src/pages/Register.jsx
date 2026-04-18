import { useState } from "react";
import axios from "../api/axios";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/auth/register", form);

      alert("Registration Successful");
      navigate("/login");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-300 ">
     

      <form onSubmit={submitHandler}  className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8">
      
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Create Account
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Register to continue
        </p>
        <input
          placeholder="Name"
          className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />
        <br /><br />

        <input
          placeholder="Email"
           className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />
        <br /><br />

        <input
          type="password"
          className="w-full border border-gray-300 p-3 rounded-lg mb-5 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Password"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />
     

        <button type="submit"  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold p-3 rounded-lg transition duration-300">Register</button>
          <p className="text-center text-gray-600 mt-5">
        Already have account? <Link to="/login" className="text-purple-600 font-semibold hover:underline">Login</Link>
      </p>
      </form>

    
    </div>
  );
}

export default Register;

