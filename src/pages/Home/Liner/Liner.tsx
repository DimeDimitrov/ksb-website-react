import "./Liner.css";

const Liner = () => {
  return (
    <section className="py-5 draggable">
      <div className="liner">
        <div
          className="row justify-content-center text-center liner-items"
          style={{ color: "white" }}
        >
          <div className="col-md-3">
            <h1 className="text-gradient text-primary">323</h1>
            <h5 className="mt-3">Ученици</h5>
          </div>
          <div className="col-md-3">
            <h1 className="text-gradient text-primary">40</h1>
            <h5 className="mt-3">Професори</h5>
          </div>
          <div className="col-md-3">
            <h1 className="text-gradient text-primary">7</h1>
            <h5 className="mt-3">Смерови</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Liner;
