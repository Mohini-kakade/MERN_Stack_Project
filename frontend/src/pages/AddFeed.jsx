
import { useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

function AddFeed() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    image: ""
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      await axios.post("/feed", form, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      alert("Post Added");

      navigate("/feed");
    } catch (error) {
      alert("Failed");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Add Feed Post</h2>

      <form onSubmit={submitHandler}>
        <input
          placeholder="Title"
          onChange={(e) =>
            setForm({
              ...form,
              title: e.target.value
            })
          }
        />

        <br /><br />

        <textarea
          placeholder="Description"
          onChange={(e) =>
            setForm({
              ...form,
              description: e.target.value
            })
          }
        />

        <br /><br />

        <input
          placeholder="Image URL"
          onChange={(e) =>
            setForm({
              ...form,
              image: e.target.value
            })
          }
        />

        <br /><br />

        <button type="submit">
          Add Post
        </button>
      </form>
    </div>
  );
}

export default AddFeed;

