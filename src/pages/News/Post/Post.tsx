import "./Post.css";
import posts from "../posts.ts";
import { useParams } from "react-router-dom";
import postsContent from "../postsContent.ts";

function Post() {
  const { id }: any = useParams();

  const post = posts[id];
  let values = Object.values(posts);
  console.log(values);
  if (!post) {
    return <div>Post not found.</div>;
  }
  return (
    <div>
      <h1>{post.title}</h1>
      <img src={post.image} alt={post.title} height={240} width={1080} />
      <p>{post.daysAgo} days ago</p>

      <div dangerouslySetInnerHTML={{ __html: postsContent[id].content }} />
    </div>
  );
}
export default Post;
