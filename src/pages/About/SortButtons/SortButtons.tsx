import "./SortButtons.css";

const SortButtons = () => {
  return (
    <div className="button-container fadeinTop">
      <a href="#history">
        <button className="sort-btn">Историја</button>
      </a>
      <a href="#mission">
        <button className="sort-btn">Мисија и визија</button>
      </a>
      <a href="#administrativen">
        <button className="sort-btn">Административен Кадар</button>
      </a>
      <a href="#kadar">
        <button className="sort-btn">Наставен Кадар</button>
      </a>
    </div>
  );
};

export default SortButtons;
