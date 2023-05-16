import "./SortButtons.css";

const Animation = () => {
  return (
    <>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </>
  );
};


const SortButtons = () => {
  return (
    <div className="button-container">
      <nav>
        <ul>
          <li className="fadeinLeft">
            Историја
            <Animation />
          </li>
          <li className="fadeinTop">
            Мисија и визија
            <Animation />
          </li>
          <li className="fadeinRight">
            Наставен кадар
            <Animation />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SortButtons;
