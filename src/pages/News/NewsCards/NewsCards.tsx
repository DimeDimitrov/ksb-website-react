import "./NewsCards.css";
import posts from "../posts";
import { Link } from "react-router-dom";
import { useState } from "react";

const NewsCards = () => {
  const [postId, setPostId] = useState("-1");

  const postCards = Object.entries(posts)
    .reverse() // reverse the order of the post objects
    .map(([postId, post]) => (
      <div className="col color-gray" key={postId}>
        <div className="card">
          <img
            src={post.image}
            className="card-img-top"
            alt="..."
            style={{ objectFit: "cover", height: "200px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary">
              Пред {post.daysAgo} дена
            </small>
            <Link to={`/news/${postId}`}>Link</Link>
          </div>
        </div>
      </div>
    ));

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {postCards} <Link to={"/news/new"}>New Post</Link>
      <Link to={`/news/${postId}`} state={postId}>
        Post {postId}
      </Link>
      <input type="number" onChange={(e) => setPostId(e.target.value)} />
    </div>
  );
};

export default NewsCards;
