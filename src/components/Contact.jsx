import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="title">Contact </h2>

      <div className="container">
        <div className="socials flex">
          <a href="https://www.facebook.com/rabin908765" target="blank">
            <i
              className="fa-brands fa-facebook"
              style={{ color: "#0863F7" }}
            ></i>
          </a>
          <a href="https://www.instagram.com/rabinshah9087" target="blank">
            <i
              className="fa-brands fa-instagram"
              style={{ color: "#CF13CD" }}
            ></i>
          </a>
          <a href="https://www.linkedin.com/in/rabin-shah-175a20117/" target="blank">
            <i
              className="fa-brands fa-linkedin"
              style={{ color: "#0077B0" }}
            ></i>
          </a>
          <a href="https://github.com/rabin9087" target="blank">
            <i className="fa-brands fa-github" style={{ color: "#E83A2D" }}></i>
          </a>
        </div>
        <div className="email-container flexr">
          <input type="text" placeholder="email address" />
          <i class="fa-solid fa-paper-plane"></i>
        </div>
      </div>
    </section>
  );
};

export default Contact;
