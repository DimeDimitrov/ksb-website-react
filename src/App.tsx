import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { lazy } from "react";
import { Suspense } from "react";
import Loader from "./components/Loader/Loader";

const Home = lazy(() => import("./pages/Home/Home"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const News = lazy(() => import("./pages/News/News"));
const Struki = lazy(() => import("./pages/Struki/Struki"));
const About = lazy(() => import("./pages/About/About"));
const Gallery = lazy(() => import("./pages/Gallery/Gallery"));
const Post = lazy(() => import("./pages/News/Post/Post"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
const Elektro = lazy(() => import("./pages/Struki/Elektro/Elektro"));
const Masinski = lazy(() => import("./pages/Struki/Masinski/Masinski"));
const Metalurski = lazy(() => import("./pages/Struki/Metalurski/Metalurski"));
const Upisi = lazy(() => import("./pages/Upisi/Upisi"));
const Stories = lazy(() => import("./pages/Stories/Stories"));

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
            path="/stories"
            element={
              <Suspense fallback={<Loader />}>
                <Stories />
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
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
