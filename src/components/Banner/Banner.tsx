import "./Banner.css";

interface Props {
  img: string;
  text: string;
}

const Banner = ({ img, text }: Props) => {
  return (
    <section
      className="sub-header"
      style={{
        backgroundImage: `linear-gradient(rgba(4, 9, 30, 0.815), rgba(4, 9, 30, 0.774)),
        url(${img})`,
      }}
    >
      <div className="homepage">
        <h1 className="fadeinTop">{text}</h1>
      </div>
      <div className="overlay"></div>
    </section>
  );
};

export default Banner;
