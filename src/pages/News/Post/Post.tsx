import "./Post.css";
import posts from "../posts.ts";
import { useParams } from "react-router-dom";
import postsContent from "../postsContent.ts";
import Footer from "../../../components/Footer/Footer.tsx";
import Navbar from "../../../components/Navbar/Navbar.tsx";
import NotFound from "../../NotFound/NotFound.tsx";

function Post() {
  const { id }: any = useParams();

  const post = posts[id];
  let values = Object.values(posts);
  console.log(values);
  if (!post) {
    return <NotFound />;
  }
  return (
    <div>
      <Navbar />

      <div dangerouslySetInnerHTML={{ __html: postsContent[id].content }} />

      <Footer />
    </div>
  );
}
export default Post;
