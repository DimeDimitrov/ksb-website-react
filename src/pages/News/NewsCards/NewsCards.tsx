import "./NewsCards.css";

const posts = {
  post1: {
    title: "Decata sega imaat prevoz",
    image: "/News/3.jpg",
    daysAgo: 20,
  },
  post2: {
    title: "Sirenata alarmirase vo KSB",
    image: "/News/2.jpg",
    daysAgo: 20,
  },
  post3: {
    title: "Najdobriot dzudist na 2023",
    image: "/News/1.jpg",
    daysAgo: 20,
  },
};

const NewsCards = () => {
  const postCards = Object.entries(posts)
    .reverse() // reverse the order of the post objects
    .map(([postId, post]) => (
      <div className="col" key={postId}>
        <div className="card h-100">
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
          </div>
        </div>
      </div>
    ));

  return <div className="row row-cols-1 row-cols-md-3 g-4">{postCards}</div>;
};

export default NewsCards;
