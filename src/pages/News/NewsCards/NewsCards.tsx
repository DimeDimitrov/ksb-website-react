import "./NewsCards.css";
import posts from "../posts";
import { useState } from "react";

interface NewsProps {
  title: string;
  image: string;
  date: string;
  postId: number;
}

const NewsCard = ({ title, image, date, postId }: NewsProps) => {
  return (
    <a
      href={`/news/${Object.keys(posts).length - postId + 1}`}
      className="card"
    >
      <div className="thumb" style={{ backgroundImage: `url(${image})` }}></div>
      <article>
        <h1>{title}</h1>
        <span>Објавено на {date}</span>
      </article>
    </a>
  );
};

const NewsCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedPosts, setDisplayedPosts] = useState(
    Object.values(posts).reverse().slice(0, 8)
  );
  const itemsPerPage = 8;

  const totalPages = Math.ceil(Object.keys(posts).length / itemsPerPage);

  const handleSeeMore = () => {
    const nextPage = currentPage + 1;
    const newPosts = Object.values(posts)
      .reverse()
      .slice((nextPage - 1) * itemsPerPage, nextPage * itemsPerPage);

    setDisplayedPosts([...displayedPosts, ...newPosts]);
    setCurrentPage(nextPage);
  };

  return (
    <>
      <div className="band">
        {displayedPosts.map((post, index) => (
          <div key={index} className={"item"}>
            <NewsCard
              key={index}
              postId={index + 1}
              title={post.title}
              image={post.image}
              date={post.date}
            />
          </div>
        ))}
      </div>
      <br />
      {currentPage < totalPages && (
        <button
          className="see-more-button"
          onClick={handleSeeMore}
          style={{
            padding: "10px 5px",
            border: "1px solid rgb(44, 44, 44)",
            margin: "20px 10px 30px 10px",
          }}
        >
          Прикажи повеке
        </button>
      )}
    </>
  );
};

export default NewsCards;
