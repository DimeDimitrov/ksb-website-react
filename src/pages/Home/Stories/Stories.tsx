import "./Stories.css";
import storiesContent from "./storiesContent.ts";

interface Props {
  title: string;
  image: string;
  description: string;
  content: string;
}

const StoryCard = ({ title, image, description, content }: Props) => {
  return (
    <div className="card1-main">
      <div className="card1">
        <div className="card-body1">
          <div className="CImg">
            <img src={image} alt="" />
          </div>
          <div className="card-titles">
            <h1>{title}</h1>
            <h2>{description}</h2>
          </div>
          <div className="dropdown-content1">
            <h3>{content}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

const Stories = () => {
  const latestStories = Object.values(storiesContent).slice(-2);

  return (
    <>
      <h1 style={{ color: "white" }}>Успешни приказни</h1>
      {latestStories.map((story, index) => (
        <StoryCard
          key={index}
          title={story.title}
          image={story.image}
          description={story.description}
          content={story.content}
        />
      ))}

      <a href="/stories" role="button" className="btn btn-primary btn-lg">
        Повеќе приказни
      </a>
    </>
  );
};

export default Stories;
