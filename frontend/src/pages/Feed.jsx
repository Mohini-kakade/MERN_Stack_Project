import { useEffect, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

function Feed() {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get("/feed", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setPosts(res.data);
    } catch (error) {
      alert("Unauthorized");
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between mb-6">
          <h1 className="text-3xl font-bold">Feed Posts</h1>

          <button
            onClick={() => navigate("/add-feed")}
            className="bg-indigo-600 text-white px-4 py-2 rounded"
          >
            Add New Post
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((item) => (
            <div key={item._id} className="bg-white rounded-xl shadow p-4">
              <img
                src={item.image}
                alt=""
                className="h-52 w-full object-cover rounded"
              />

              <h2 className="text-xl font-bold mt-3">{item.title}</h2>

              <p className="text-gray-600 mt-2">{item.description}</p>

              <p className="text-sm mt-2 text-indigo-600">
                By {item.userId?.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Feed;
