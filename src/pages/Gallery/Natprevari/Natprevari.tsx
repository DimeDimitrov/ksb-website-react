import { useState } from "react";
import "./Natprevari.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const images = [
  "/Gallery/Natprevari/1.jpg",
  "/Gallery/Natprevari/2.jpg",
  "/Gallery/Natprevari/3.jpg",
  "/Gallery/Natprevari/4.jpg",
  "/Gallery/Natprevari/5.jpg",
  "/Gallery/Natprevari/6.jpg",
  "/Gallery/Natprevari/7.jpg",
  "/Gallery/Natprevari/8.jpg",
  "/Gallery/Natprevari/9.jpg",
];

const Natprevari = () => {
  const [data, setData] = useState({ img: "", i: 0 });

  const viewImage = (img: string, i: number) => {
    setData({ img, i });
  };
  const imgAction = (action) => {
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
    <>
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
              border: "none",
              padding: "10px",
              background: "gray",
            }}
          >
            X
          </button>
          <button onClick={() => imgAction("previous-img")}>Previous</button>
          <img
            src={data.img}
            style={{
              width: "auto",
              maxWidth: "90%",
              maxHeight: "90%",
            }}
          />
          <button onClick={() => imgAction("next-img")}>Next</button>
        </div>
      )}
      <div style={{ padding: "10px" }}>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
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
    </>
  );
};

export default Natprevari;
