import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <nav class="navbar fixed-bottom">
          <div class="container-fluid">
            <div class="navBarBtns">
              <a
                href="https://www.linkedin.com/in/nataliefinnegan/"
                rel="noreferrer"
                target="_blank"
                class="btn btn-secondary icons"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://github.com/nfinnegan"
                target="_blank"
                rel="noreferrer"
                class="btn btn-secondary icons"
              >
                <i class="fab fa-github"></i>
              </a>
              <a
                href="NatalieResume.pdf"
                target="_blank"
                class="btn btn-secondary navbar-brand icons"
              >
                <i class="far fa-file-pdf"></i>
              </a>
              <a
                href="https://open.spotify.com/user/1210277571?si=Rj4R3sC3T_Oo6xDdF-jJmg"
                target="_blank"
                rel="noreferrer"
                class="btn btn-secondary navbar-brand icons"
              >
                <i class="fab fa-spotify"></i>
              </a>
            </div>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
