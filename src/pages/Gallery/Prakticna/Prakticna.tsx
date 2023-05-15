import { useState } from "react";
import "./Prakticna.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const images = [
  "/Gallery/Prakticna/1.jpg",
  "/Gallery/Prakticna/2.jpg",
  "/Gallery/Prakticna/3.jpg",
  "/Gallery/Prakticna/4.jpg",
  "/Gallery/Prakticna/5.jpg",
  "/Gallery/Prakticna/6.jpg",
  "/Gallery/Prakticna/7.jpg",
  "/Gallery/Prakticna/8.jpg",
  "/Gallery/Prakticna/9.jpg",
  "/Gallery/Prakticna/10.jpg",
  "/Gallery/Prakticna/11.jpg",
  "/Gallery/Prakticna/12.jpg",
  "/Gallery/Prakticna/13.jpg",
  "/Gallery/Prakticna/14.jpg",
  "/Gallery/Prakticna/15.jpg",
  "/Gallery/Prakticna/16.jpg",
  "/Gallery/Prakticna/17.jpg",
  "/Gallery/Prakticna/18.jpg",
  "/Gallery/Prakticna/19.jpg",
  "/Gallery/Prakticna/20.jpg",
  "/Gallery/Prakticna/21.jpg",
];

const Prakticna = () => {
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
    <section id="prakticna">
      <h1 style={{ color: "white", padding: "10px" }}>Практична</h1>
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
          <button onClick={() => imgAction("previous-img")}style={{
            position: "absolute",
            backgroundColor: "transparent",
            borderWidth: 0,
            fontSize: "4rem",
            margin: "1%",
            left: 0,
          }}>‹</button>
          <img
            src={data.img}
            style={{
              width: "auto",
              maxWidth: "90%",
              maxHeight: "90%",
            }}
          />
          <button onClick={() => imgAction("next-img")}style={{
            position: "absolute",
            backgroundColor: "transparent",
            borderWidth: 0,
            fontSize: "4rem",
            margin: "1%",
            right: 0,
            
          }}>›</button>
        </div>
      )}
      <div style={{ padding: "10px" }}>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 3, 1200: 4, 1800: 4 }}
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

export default Prakticna;
