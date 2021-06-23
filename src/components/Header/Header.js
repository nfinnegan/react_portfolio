import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="container-fluid site-header">
      <div className="nameJob">
        <img
          alt="personal head shot"
          className="personalImage"
          src="/assets/personal_photo_.png"
        />
        <div className="inline">
          <h1 className="display-4">
            <span id="wave">👋</span>Hi, I'm Natalie
          </h1>
          <h4 className="">Software Engineer</h4>
        </div>
        <ul className="site-headerUL">
          <li className="nav-li">
            <a
              className="nav-a"
              href=" "
              target="_blank"
              alt="Natalie Finnegan Resume"
            >
              .resume( )
            </a>
          </li>
          <li className="nav-li">
            <a id="prjPage" className="nav-a" href="/projects">
              .seeMyWork( )
            </a>
          </li>
          <li className="nav-li" id="navSkills">
            <a className="nav-a" href="#skills">
              .recommendations( )
            </a>
          </li>
          <li className="nav-li" id="navTools">
            <Link className="nav-a" to="/contact">
              .contactMe( )
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
