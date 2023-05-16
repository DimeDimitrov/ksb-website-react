import "./Navigation.css";

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

const Navigation = () => {
  return (
    <div className="button-container">
      <nav>
        <ul>
          <li className="fadeinLeft">
            Еко
            <Animation />
          </li>
          <li className="fadeinTop">
            Практична настава
            <Animation />
          </li>
          <li className="fadeinRight">
            Натпревари
            <Animation />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
