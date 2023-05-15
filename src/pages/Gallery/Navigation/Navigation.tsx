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
    <div className="button-container fadeinTop">
      <nav>
        <ul>
          <li>
            Еко
            <Animation />
          </li>
          <li>
            Практична настава
            <Animation />
          </li>
          <li>
            Натпревари
            <Animation />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
