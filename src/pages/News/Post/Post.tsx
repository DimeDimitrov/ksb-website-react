import "./Post.css";
import posts from "../posts.ts";
import { useParams } from "react-router-dom";
import Footer from "../../../components/Footer/Footer.tsx";
import Navbar from "../../../components/Navbar/Navbar.tsx";
import NotFound from "../../NotFound/NotFound.tsx";

import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

function Post() {
  const { id }: any = useParams();
  const posta = posts[id];

  if (!posta) {
    return <NotFound />;
  }

  const [post, setPost] = useState("");

  useEffect(() => {
    import(`../Posts/${id}.md`)
      .then((response) => {
        fetch(response.default)
          .then((response) => response.text())
          .then((response) => setPost(response));
      })
      .catch((error) => {
        console.log(error);
        // @ts-ignore
        import(`../Posts/default.md`).then((response) => {
          fetch(response.default)
            .then((response) => response.text())
            .then((response) => setPost(response));
        });
      });
  }, []);

  return (
    <>
      <Navbar />

      <div className="post-container">
        <ReactMarkdown>{post}</ReactMarkdown>
      </div>

      <Footer />
    </>
  );
}
export default Post;
