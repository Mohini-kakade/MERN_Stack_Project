
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
          Authorization: `Bearer ${token}`
        }
      });

      setPosts(res.data);
    } catch (error) {
      alert("Unauthorized");
      navigate("/login");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      
<button onClick={() => navigate("/add-feed")}>
  Add New Post
</button>


      <h2>Feed Page</h2>

      {posts.length === 0 ? (
        <p>No Posts Found</p>
      ) : (
        posts.map((item) => (
          <div
            key={item._id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              marginBottom: "15px"
            }}
          >
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <small>
              By: {item.userId?.name}
            </small>
          </div>
        ))
      )}
    </div>
  );
}

export default Feed;

