import "./Banner.css";
import { ReactNode } from "react";

interface Props {
  img: string;
  text: string;
  children: ReactNode;
}

const Banner = ({ img, text, children }: Props) => {
  return (
    <section
      className="sub-header"
      style={{
        backgroundImage: `linear-gradient(rgba(4, 9, 30, 0.815), rgba(4, 9, 30, 0.774)),
        url(${img})`,
      }}
    >
      {children}
      <div className="homepage">
        <h1 className="fadeinTop">{text}</h1>
      </div>
      <div className="overlay"></div>
    </section>
  );
};

export default Banner;
