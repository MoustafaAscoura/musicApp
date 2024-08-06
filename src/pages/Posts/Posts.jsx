import React, { useEffect, useState } from "react";
import axiosInstance from "../../api/config";
import { Alert } from "bootstrap";
import PostComponent from "../../components/Post/Post";
import Spinner from "react-bootstrap/Spinner";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pageSize, setPageSize] = useState(30);

  useEffect(() => {
    console.log("Start API Call");
    setLoading(true)
    axiosInstance
      .get(`post?limit=${pageSize}`)
      .then((res) => {
        console.log(res.data.posts);
        setPosts(res.data.posts);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [pageSize]);

  return (
    <>
      <h1 className="mt-3">Posts Page</h1>
      <div className="container">
        <select
          style={{ position: "absolute", right: "50px", top: "70px" }}
          value={pageSize}
          onChange={(e) => setPageSize(e.target.value)}
        >
          <option>1</option>
          <option>3</option>
          <option>5</option>
          <option>10</option>
          <option>20</option>
          <option>30</option>
          <option>40</option>
        </select>

        {loading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : posts ? (
          <>
            {posts.map((post) => (
              <React.Fragment key={post.id}>
                <PostComponent {...post} />
              </React.Fragment>
            ))}
          </>
        ) : (
          <Alert variant={"danger"}>Error Fetching Data</Alert>
        )}
      </div>
    </>
  );
}
