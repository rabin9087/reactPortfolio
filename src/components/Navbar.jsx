import React, { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  console.log(showMenu)
  return (
    <header>
      <nav className="container flex navigation">
        <div className="flex nav-left">
          <h1>Rabin</h1>
          <div className="line">Soft. Engineer</div>
        </div>
        <div className="menu">
          <div className="hamburger">
            {showMenu ? (
              <i
                class="fa-solid fa-xmark"
                onClick={() => setShowMenu(false)}
              ></i>
            ) : (
              <i
                className="fa-solid fa-bars"
                onClick={() => setShowMenu(true)}
              ></i>
            )}
          </div>
          <ul
            className={showMenu ? "flex slide" : "flex"}
            onClick={() => setShowMenu(false)}
          >
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
