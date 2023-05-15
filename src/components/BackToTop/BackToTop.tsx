import { useState, useEffect } from "react";
import "./BackToTop.css";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="scroll-to-top-wrapper">
      {isVisible && (
        <button
          className="scroll-to-top-button btn btn-danger btn-floating btn-lg"
          onClick={scrollToTop}
        >
          <span>&#8593;</span>
        </button>
      )}
    </div>
  );
};

export default BackToTop;
