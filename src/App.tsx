import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import News from "./pages/News/News";
import Struki from "./pages/Struki/Struki";
import About from "./pages/About/About";
import Gallery from "./pages/Gallery/Gallery";
import Post from "./pages/News/Post/Post";
import NewPost from "./pages/News/NewPost/NewPost";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/index" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/struki" element={<Struki />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<NotFound />} />

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
