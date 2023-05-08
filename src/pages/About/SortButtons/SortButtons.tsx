import "./SortButtons.css";

const SortButtons = () => {
  return (
    <div className="sort-buttons">
      <button className="sort-btn fadeinLeft" data-category="About-us">
        За нас
      </button>
      <button className="sort-btn fadeinTop" data-category="mission">
        Мисија и Визија
      </button>
      <button
        className="sort-btn fadeinRight"
        data-category="kadar"
        id="kadar-button"
      >
        Наставен кадар
      </button>
    </div>
  );
};

export default SortButtons;
