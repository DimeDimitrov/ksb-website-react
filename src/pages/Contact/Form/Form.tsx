import "./Form.css";

const Form = () => {
  return (
    <section className="contact">
      <div className="row">
        <div className="contact-col contact-col1">
          <div className="contact-item">
            <i className="uil uil-map"></i>
            <span>
              <h5>Шишка бр. 29, Кавадарци</h5>
              <p>Кавадарци, Македонија</p>
            </span>
          </div>
          <div className="contact-item">
            <i className="uil uil-phone"></i>
            <span>
              <h5>+389 43/412/847</h5>
              <p>Само работни денови</p>
            </span>
          </div>
          <div className="contact-item">
            <i className="uil uil-envelope"></i>
            <span>
              <h5>
                dssuksb@t.mk,
                <br />
                souksb@yahoo.com
              </h5>
              <p>Активен маил, одговор во најбрзо време</p>
            </span>
          </div>
        </div>

        <div className="contact-col">
          <form action="">
            <input
              type="text"
              name="name"
              placeholder="Внеси го твоето име"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Внеси го твојот Е-маил"
              required
            />
            <input
              type="text"
              name="title"
              placeholder="Внеси го насловот"
              required
            />
            <textarea rows={8} name="text" placeholder="Порака"></textarea>
            <button type="submit" className="btn btn-danger red-btn">
              Прати порака
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
