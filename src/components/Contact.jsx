import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="title">Contact </h2>

      <div className="container">
        <div className="socials flex">
          <a href="https://www.facebook.com/rabin908765" target="blank">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/rabinshah9087/" target="blank">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/rabin-shah-175a20117/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/rabin9087" target="blank">
            <i className="fa-brands fa-github"></i>
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
