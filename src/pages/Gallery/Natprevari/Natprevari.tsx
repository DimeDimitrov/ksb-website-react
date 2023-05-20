import { useState } from "react";
import "./Natprevari.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const images = [
  "/Gallery/Natprevari/1.webp",
  "/Gallery/Natprevari/2.webp",
  "/Gallery/Natprevari/3.webp",
  "/Gallery/Natprevari/4.webp",
  "/Gallery/Natprevari/5.webp",
  "/Gallery/Natprevari/6.webp",
  "/Gallery/Natprevari/7.webp",
  "/Gallery/Natprevari/8.webp",
  "/Gallery/Natprevari/9.webp",
];

const Natprevari = () => {
  const [data, setData] = useState({ img: "", i: 0 });

  const viewImage = (img: string, i: number) => {
    setData({ img, i });
  };
  const imgAction = (action: string) => {
    let i = data.i;
    if (action === "next-img") {
      setData({ img: images[i + 1], i: i + 1 });
    }
    if (action === "previous-img") {
      setData({ img: images[i - 1], i: i - 1 });
    }
    if (!action) {
      setData({ img: "", i: 0 });
    }
  };

  return (
    <section id="natprevari">
      <h1 style={{ color: "white", padding: "10px" }}>Натпревари</h1>
      {data.img && (
        <div
          style={{
            width: "100%",
            height: "100vh",
            background: "black",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            zIndex: 100,
          }}
        >
          <button
            onClick={() => imgAction("")}
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              padding: "10px",
              backgroundColor: "transparent",
              borderWidth: 0,
              fontSize: "2rem",
            }}
          >
            x
          </button>
          <button
            onClick={() => imgAction("previous-img")}
            style={{
              position: "absolute",
              backgroundColor: "transparent",
              borderWidth: 0,
              fontSize: "4rem",
              margin: "1%",
              left: 0,
            }}
          >
            ‹
          </button>
          <img
            src={data.img}
            style={{
              width: "auto",
              maxWidth: "90%",
              maxHeight: "90%",
            }}
          />
          <button
            onClick={() => imgAction("next-img")}
            style={{
              position: "absolute",
              backgroundColor: "transparent",
              borderWidth: 0,
              fontSize: "4rem",
              margin: "1%",
              right: 0,
            }}
          >
            ›
          </button>
        </div>
      )}
      <div className="fadeinTop" style={{ padding: "10px" }}>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 3, 1200: 4 }}
        >
          <Masonry gutter="20px">
            {images.map((image, i) => {
              return (
                <img
                  key={i}
                  src={image}
                  style={{
                    width: "100%",
                    scale: "100%",
                    display: "block",
                    cursor: "pointer",
                  }}
                  alt=""
                  onClick={() => viewImage(image, i)}
                />
              );
            })}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </section>
  );
};

export default Natprevari;
