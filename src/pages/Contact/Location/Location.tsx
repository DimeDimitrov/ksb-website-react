import "./Location.css";

const Location = () => {
  return (
    <section className="location">
      <h1 className="fadeinRight">Локација</h1>
      <iframe
        className="fadeinLeft"
        src="https://www.google.com/maps/embed?pb=!1m16!1m10!1m3!1d512!2d22.0206408!3d41.4418777!2m1!1f15.24!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x1356650b903daca7%3A0xabf6272b41d0f0cf!2sKiro%20Spandzov%20-%20Brko!5e1!3m2!1sen!2smk!4v1633464876547!5m2!1sen!2smk"
        width="600"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
      ></iframe>
    </section>
  );
};

export default Location;
