
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
     

      <form onSubmit={submitHandler}  className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
         <h2  className="text-2xl font-bold mb-5 text-center">Add Feed Post</h2>
        <input
          placeholder="Title"
          className="w-full border p-3 rounded mb-4"
          onChange={(e) =>
            setForm({
              ...form,
              title: e.target.value
            })
          }
        />

    

        <textarea
          placeholder="Description"
           className="w-full border p-3 rounded mb-4"
          onChange={(e) =>
            setForm({
              ...form,
              description: e.target.value
            })
          }
        />

      

        <input
          placeholder="Image URL"
           className="w-full border p-3 rounded mb-4"
          onChange={(e) =>
            setForm({
              ...form,
              image: e.target.value
            })
          }
        />

        <br /><br />

        <button type="submit"  className="w-full bg-indigo-600 text-white p-3 rounded">
          Add Post
        </button>
      </form>
    </div>
  );
}

export default AddFeed;

