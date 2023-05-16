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
    <a href={`/news/${postId}`} className="card">
      <div className="thumb" style={{ backgroundImage: `url(${image})` }}></div>
      <article>
        <h1>{title}</h1>
        <span>Пред {daysAgo} дена</span>
      </article>
    </a>
  );
};

interface Props {
  numPosts: number;
}

const News = ({ numPosts }: Props) => {
  const postKeys = Object.keys(posts)
    .map(Number)
    .sort((a, b) => b - a);

  const latestPosts = postKeys.slice(0, numPosts - 1);
  const latestPost = latestPosts[latestPosts.length - latestPosts.length];

  return (
    <>
    <h1 style={{color: "white"}}>Новости</h1>
      <div className="band">
        <div className="item-1">
          {
            <NewsCard
              key={latestPost}
              postId={latestPost}
              title={posts[latestPost].title}
              image={posts[latestPost].image}
              daysAgo={posts[latestPost].daysAgo}
            />
          }
        </div>
        {latestPosts.map((postId) => (
          <div key={postId} className={`item-${latestPost - postId + 2}`}>
            <NewsCard
              key={postId}
              postId={postId - 1}
              title={posts[postId - 1].title}
              image={posts[postId - 1].image}
              daysAgo={posts[postId - 1].daysAgo}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default News;
