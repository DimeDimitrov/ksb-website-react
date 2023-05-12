import "./News.module.css";

const News = () => {
  return (
    <div className="container">
      <div className="card-group vgr-cards">
        <div className="card">
          <div className="card-img-body">
            <img
              className="card-img"
              src="https://picsum.photos/500/230"
              alt="Card image cap"
            />
          </div>
          <div className="card-body">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer. This is a wider card with supporting text below as a
              natural lead-in to additional content. This content is a little
              bit longer.
            </p>
            <a href="#" className="btn btn-outline-primary">
              Primary
            </a>
          </div>
        </div>
        <div className="card">
          <div className="card-img-body">
            <img
              className="card-img"
              src="https://picsum.photos/400/200"
              alt="Card image cap"
            />
          </div>
          <div className="card-body">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">
              This card has supporting text below as a natural lead-in to
              additional content. This is a wider card with supporting text
              below as a natural lead-in to additional content. This content is
              a little bit longer. This card has supporting text below as a
              natural lead-in to additional content.
            </p>
            <a href="#" className="btn btn-outline-primary">
              Primary
            </a>
          </div>
        </div>
        <div className="card">
          <div className="card-img-body">
            <img
              className="card-img"
              src="https://picsum.photos/450/250"
              alt="Card image cap"
            />
          </div>
          <div className="card-body">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action. This is a wider
              card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.
            </p>
            <a href="#" className="btn btn-outline-primary">
              Primary
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
