import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import PDF from "../../../src/asset/Resume_2021.pdf";

const Header = () => {
  return (
    <header className="container-fluid site-header">
      <div className="nameJob">
        <Link to="/">
          <img
            alt="personal head shot"
            className="personalImage"
            src={process.env.PUBLIC_URL + "/assets/personal_photo_.png"}
          />
        </Link>
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
              href={PDF}
              target="_blank"
              rel="noreferrer"
              alt="Natalie Finnegan Resume"
            >
              .resume( )
            </a>
          </li>
          <li className="nav-li">
            <Link id="prjPage" className="nav-a" to="/projects">
              .seeMyWork( )
            </Link>
          </li>
          <li className="nav-li" id="navSkills">
            <Link className="nav-a" to="/reccos">
              .recommendations( )
            </Link>
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
