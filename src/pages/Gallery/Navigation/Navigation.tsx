import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="button-container fadeinTop">
      <a href="#natprevari">
        <button className="sort-btn">Натпревари</button>
      </a>
      <a href="#prakticna">
        <button className="sort-btn">Практична настава</button>
      </a>
      <a href="#eko">
        <button className="sort-btn">Еко</button>
      </a>
    </div>
  );
};

export default Navigation;
