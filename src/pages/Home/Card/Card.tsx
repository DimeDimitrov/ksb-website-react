import { useState } from "react";
import "./Card.css";

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  story: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, description, story }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div
      className="card-story"
      onMouseEnter={toggleDropdown}
      onMouseLeave={toggleDropdown}
    >
      <div className="card-content-story">
        <img src={imageSrc} alt="Card Image" className="card-image-story" />
        <div className="card-details-story">
          <h3 className="card-title-story">{title}</h3>
          <p className="card-description-story">{description}</p>
        </div>
      </div>
      {!isDropdownOpen && (
        <div className="dropdown-story">
          <p className="dropdown-content-story">{story}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
