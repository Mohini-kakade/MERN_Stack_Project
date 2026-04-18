
import { useState } from "react";
import axios from "../api/axios";
import { Link } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/auth/login", form);

      localStorage.setItem("token", res.data.token);

      alert("Login Successful");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Login</h2>

      <form onSubmit={submitHandler}>
        <input
          placeholder="Email"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />
        <br /><br />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />
        <br /><br />

        <button type="submit">Login</button>
      </form>

      <p>
        No account? <Link to="/">Register</Link>
      </p>
    </div>
  );
}

export default Login;

