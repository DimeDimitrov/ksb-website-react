import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { lazy } from "react";

const Home = lazy(() => import("./pages/Home/Home"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const News = lazy(() => import("./pages/News/News"));
const Struki = lazy(() => import("./pages/Struki/Struki"));
const About = lazy(() => import("./pages/About/About"));
const Gallery = lazy(() => import("./pages/Gallery/Gallery"));
const Post = lazy(() => import("./pages/News/Post/Post"));
const NewPost = lazy(() => import("./pages/News/NewPost/NewPost"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
const Elektro = lazy(() => import("./pages/Struki/Elektro/Elektro"));
const Masinski = lazy(() => import("./pages/Struki/Masinski/Masinski"));
const Metalurski = lazy(() => import("./pages/Struki/Metalurski/Metalurski"));
// import Home from "./pages/Home/Home";
// import Contact from "./pages/Contact/Contact";
// import News from "./pages/News/News";
// import Struki from "./pages/Struki/Struki";
// import About from "./pages/About/About";
// import Gallery from "./pages/Gallery/Gallery";
// import Post from "./pages/News/Post/Post";
// import NewPost from "./pages/News/NewPost/NewPost";
// import NotFound from "./pages/NotFound/NotFound";

// import Elektro from "./pages/Struki/Elektro/Elektro"
// import Masinski from "./pages/Struki/Masinski/Masinski"
// import Metalurski from "./pages/Struki/Metalurski/Metalurski"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/index" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<NotFound />} />

          <Route path="/struki">
            <Route index element={<Struki />} />
            <Route path="elektro" element={<Elektro />} />
            <Route path="masinski" element={<Masinski />} />
            <Route path="metalurski" element={<Metalurski />} />
          </Route>

          <Route path="/news">
            <Route index element={<News />} />
            <Route path=":id" element={<Post />} />
            <Route path="new" element={<NewPost />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
