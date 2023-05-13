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

// const News = () => {
//   return (
//     <div className="band">
//       <div className="item-1">
//         <a
//           href="https://design.tutsplus.com/articles/international-artist-feature-malaysia--cms-26852"
//           className="card"
//         >
//           <div className="thumb"></div>
//           <article>
//             <h1>International Artist Feature: Malaysia</h1>
//             <span>Mary Winkler</span>
//           </article>
//         </a>
//       </div>
//       <div className="item-2">
//         <a
//           href="https://webdesign.tutsplus.com/articles/how-to-conduct-remote-usability-testing--cms-27045"
//           className="card"
//         >
//           <div className="thumb"></div>
//           <article>
//             <h1>How to Conduct Remote Usability Testing</h1>
//             <span>Harry Brignull</span>
//           </article>
//         </a>
//       </div>
//       <div className="item-3">
//         <a
//           href="https://design.tutsplus.com/articles/envato-tuts-community-challenge-created-by-you-july-edition--cms-26724"
//           className="card"
//         >
//           <div className="thumb"></div>
//           <article>
//             <h1>Created by You, July Edition</h1>
//             <p>
//               Welcome to our monthly feature of fantastic tutorial results
//               created by you, the Envato Tuts+ community!{" "}
//             </p>
//             <span>Melody Nieves</span>
//           </article>
//         </a>
//       </div>
//     </div>
//   );
// };

export default News;
