import "./NewsCards.css";
import posts from "../posts";
import { useState } from "react";
import Pagination from "../Pagination/Pagination";

interface NewsProps {
  title: string;
  image: string;
  daysAgo: number;
  postId: number;
}

const NewsCard = ({ title, image, daysAgo, postId }: NewsProps) => {
  return (
    <a
      href={`/news/${Object.keys(posts).length - postId + 1}`}
      className="card"
    >
      <div className="thumb" style={{ backgroundImage: `url(${image})` }}></div>
      <article>
        <h1>{title}</h1>
        <span>Пред {daysAgo} дена</span>
      </article>
    </a>
  );
};

const NewsCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const displayedPosts = Object.values(posts)
    .reverse()
    .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="band">
      {displayedPosts.map((post, index) => (
        <div key={index} className={"item"}>
          <NewsCard
            key={index}
            postId={index + 1}
            title={post.title}
            image={post.image}
            daysAgo={post.daysAgo}
          />
        </div>
      ))}
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(Object.keys(posts).length / itemsPerPage)}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default NewsCards;
