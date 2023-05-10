import { useState } from "react";
import "./Natprevari.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const images = [
  "/Gallery/Natprevari/1.jpg",
  "/Gallery/Natprevari/2.jpg",
  "/Gallery/Natprevari/3.jpg",
  "/Gallery/Natprevari/4.jpg",
  "/Gallery/Natprevari/5.jpg",
];

const Natprevari = () => {
  const [data, setData] = useState({ img: "", i: 0 });

  const viewImage = (img: string, i: number) => {
    setData({ img, i });
    console.log(img);
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
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <img
            src={data.img}
            style={{
              width: "auto",
              maxWidth: "90%",
              maxHeight: "90%",
            }}
          />
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
