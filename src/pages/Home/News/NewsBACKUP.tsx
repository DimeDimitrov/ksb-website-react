import "./News.css";
import posts from "../../News/posts";

interface NewsProps {
  title: string;
  image: string;
  daysAgo: number;
  postId: number;
}

const NewsCard = ({ title, image, daysAgo, postId }: NewsProps) => {
  return (
    <div
      className="col-sm-4"
      onClick={() => {
        window.location.href = `/news/${postId}`;
      }}
      style={{ cursor: "pointer" }}
    >
      <div className="card">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{daysAgo} days ago</p>
        </div> 
      </div>
    </div>
  );
};

interface Props {
  numPosts: number;
}

const News = ({ numPosts }: Props) => {
  const postKeys = Object.keys(posts)
    .map(Number)
    .sort((a, b) => b - a);
  const latestPosts = postKeys.slice(0, numPosts);

  return (
    <div className="container">
      <div className="row">
        {latestPosts.map((postId) => (
          <NewsCard
            key={postId}
            postId={postId}
            title={posts[postId].title}
            image={posts[postId].image}
            daysAgo={posts[postId].daysAgo}
          />
        ))}
      </div>
    </div>
  );
};

export default News;
