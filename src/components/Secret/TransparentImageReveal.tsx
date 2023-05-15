import { useState, useEffect } from "react";

interface Props {
  imageUrl: string;
  duration: number;
}

const TransparentImageReveal = ({ imageUrl, duration }: Props) => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const revealInterval = setInterval(() => {
      setOpacity((prevOpacity) => prevOpacity - 1 / (duration * 10)); // Reduce opacity gradually over time
    }, 100);

    // Clear interval when component is unmounted or duration changes
    return () => clearInterval(revealInterval);
  }, [duration]);

  return (
    <div>
      <div
        style={{
          opacity,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 9999,
          background: "white",
        }}
      ></div>
      <img
        src={imageUrl}
        alt="Revealing Image"
        style={{ opacity: 1 - opacity }}
      />
    </div>
  );
};

export default TransparentImageReveal;
