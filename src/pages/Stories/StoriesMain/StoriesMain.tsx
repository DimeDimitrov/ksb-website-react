import "./StoriesMain.css";
import storiesContent from "../../Home/Stories/storiesContent";

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

const StoriesMain = () => {
  const Stories = Object.values(storiesContent);

  return (
    <>
      {Stories.map((story, index) => (
        <StoryCard
          key={index}
          title={story.title}
          image={story.image}
          description={story.description}
          content={story.content}
        />
      ))}
    </>
  );
};

export default StoriesMain;
