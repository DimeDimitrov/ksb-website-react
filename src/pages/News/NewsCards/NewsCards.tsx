import "./NewsCards.css";
import posts from "../posts";
import { Link } from "react-router-dom";
import { useState } from "react";
import Pagination from "../Pagination/Pagination";

const NewsCards = () => {
 // const [postId, setPostId] = useState("-1");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  
    const displayedPosts = Object.values(posts)
    .sort((a, b) => b.index - a.index) // sort by index in descending order
    .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // const postCards = Object.entries(posts)
  //   .reverse() // reverse the order of the post objects
  //   .map(([postId, post]) => (
  //     <div className="col" key={postId}>
  //       <div className="card">
  //         <img
  //           src={post.image}
  //           className="card-img-top"
  //           alt="..."
  //           style={{ objectFit: "cover", height: "200px" }}
  //         />
  //         <div className="card-body">
  //           <Link className="card-title" to={`/news/${postId}`}>
  //             {post.title}
  //           </Link>
  //         </div>
  //         <div className="card-footer">
  //           <small className="text-body-secondary">
  //             Пред {post.daysAgo} дена
  //           </small>
  //         </div>
  //       </div>
  //     </div>
  //   ));

    return (
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {displayedPosts.map((post, index) => (
          <div key={index} className="card">
            <h3>{post.title}</h3>
            <img src={post.image} alt={post.title} height={"600px"}/>
            <p>{post.daysAgo} days ago</p>
            <Link to={`/news/${index + 1}`} state={index + 1}>
          Goto Post {index + 1}
            </Link>
          </div>
        ))}
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(Object.keys(posts).length / itemsPerPage)}
          onPageChange={setCurrentPage}
        />
      </div>
    );

  // return (
  //   <>
  //   <div className="row row-cols-1 row-cols-md-3 g-4">
  //     {postCards}
  //     <div className="card">
  //       <Link to={`/news/${postId}`} state={postId}>
  //         Goto Post {postId}
  //       </Link>
  //       <input type="number" onChange={(e) => setPostId(e.target.value)} />
  //     </div>
  //   </div>
  //   <Pagination 
  //     currentPage={currentPage}
  //     totalPages={Math.ceil(Object.keys(posts).length / itemsPerPage)}
  //     onPageChange={setCurrentPage}/>
  //   </>
  // );
};

export default NewsCards;
