import "./NewsCards.css";
import posts from "../posts";
import { Link } from "react-router-dom";
import { useState } from "react";

const NewsCards = () => {
  const [postId, setPostId] = useState("-1");

  const postCards = Object.entries(posts)
    .reverse() // reverse the order of the post objects
    .map(([postId, post]) => (
      <div className="col" key={postId}>
        <div className="card">
          <img
            src={post.image}
            className="card-img-top"
            alt="..."
            style={{ objectFit: "cover", height: "200px" }}
          />
          <div className="card-body">
            <Link className="card-title" to={`/news/${postId}`}>
              {post.title}
            </Link>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary">
              Пред {post.daysAgo} дена
            </small>
          </div>
        </div>
      </div>
    ));

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {postCards}
      <div className="card">
        <Link to={`/news/${postId}`} state={postId}>
          Goto Post {postId}
        </Link>
        <input type="number" onChange={(e) => setPostId(e.target.value)} />
      </div>
    </div>
  );
};

export default NewsCards;
