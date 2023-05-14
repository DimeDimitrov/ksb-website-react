import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { lazy } from "react";
import { Suspense } from "react";

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
          <Route
            index
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Home />
              </Suspense>
            }
          />

          <Route
            path="/index"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/home"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/gallery"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Gallery />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <NotFound />
              </Suspense>
            }
          />
          <Route path="/struki">
            <Route
              index
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Struki />
                </Suspense>
              }
            />
            <Route
              path="elektro"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Elektro />
                </Suspense>
              }
            />
            <Route
              path="masinski"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Masinski />
                </Suspense>
              }
            />
            <Route
              path="metalurski"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Metalurski />
                </Suspense>
              }
            />
          </Route>
          <Route path="/news">
            <Route
              index
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <News />
                </Suspense>
              }
            />
            <Route
              path=":id"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Post />
                </Suspense>
              }
            />
            <Route
              path="new"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <NewPost />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
