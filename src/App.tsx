import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { lazy } from "react";
import { Suspense } from "react";
import Loader from "./components/Loader/Loader";
import Secret from "./components/Secret/Secret";

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
const Upisi = lazy(() => import("./pages/Upisi/Upisi"));
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
              <Suspense fallback={<Loader />}>
                <Home />
              </Suspense>
            }
          />

          <Route
            path="/index"
            element={
              <Suspense fallback={<Loader />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/home"
            element={
              <Suspense fallback={<Loader />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<Loader />}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<Loader />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/gallery"
            element={
              <Suspense fallback={<Loader />}>
                <Gallery />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<Loader />}>
                <NotFound />
              </Suspense>
            }
          />
          <Route
            path="upisi"
            element={
              <Suspense fallback={<Loader />}>
                <Upisi />
              </Suspense>
            }
          />
          <Route path="/struki">
            <Route
              index
              element={
                <Suspense fallback={<Loader />}>
                  <Struki />
                </Suspense>
              }
            />
            <Route
              path="elektro"
              element={
                <Suspense fallback={<Loader />}>
                  <Elektro />
                </Suspense>
              }
            />
            <Route
              path="masinski"
              element={
                <Suspense fallback={<Loader />}>
                  <Masinski />
                </Suspense>
              }
            />
            <Route
              path="metalurski"
              element={
                <Suspense fallback={<Loader />}>
                  <Metalurski />
                </Suspense>
              }
            />
          </Route>
          <Route path="/news">
            <Route
              index
              element={
                <Suspense fallback={<Loader />}>
                  <News />
                </Suspense>
              }
            />
            <Route
              path=":id"
              element={
                <Suspense fallback={<Loader />}>
                  <Post />
                </Suspense>
              }
            />
            <Route
              path="new"
              element={
                <Suspense fallback={<Loader />}>
                  <NewPost />
                </Suspense>
              }
            />
          </Route>
          <Route path="/news/420" element={<Secret />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
