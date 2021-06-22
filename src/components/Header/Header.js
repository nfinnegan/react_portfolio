import React from "react";
import "./style.css";

const Header = () => {
  return (
    <header className="container-fluid site-header">
      <div className="nameJob">
        <img
          alt="personal head shot"
          className="personalImage"
          src="/personal_photo_.png"
        />
        <div className="inline">
          <h1 className="display-4">Hi, I'm Natalie</h1>
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
          {/* {{! <li className="nav-li" id="navSkills"><a
                  className="nav-a"
                  href="#skills"
                >.skills( )</a></li>
              <li className="nav-li" id="navTools"><a
                  className="nav-a"
                  href="#{tools}"
                >.tools( )</a></li> }} */}
        </ul>
      </div>
    </header>
  );
};

export default Header;
