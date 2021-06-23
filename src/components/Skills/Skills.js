import React from "react";
import "./style.css";

const Skills = () => {
  return (
    <div>
      <section className="container">
        <h1 class="skills">
          <i class="fas fa-laptop-code"></i>.skills( )
        </h1>
        <hr />
        <div class="row">
          <div class="col-sm-12 col-md-4">
            <ul class="skillsList" id="skills">
              <li class="skillsItem">
                <img
                  class="img-fluid skill-img"
                  src="/icons/html2.png"
                  alt="htmlIcon"
                />
              </li>
              <li class="skillsItem">
                <img
                  class="img-fluid skill-img"
                  src="/icons/css.png"
                  alt="cssIcon"
                />
              </li>
              <li class="skillsItem">
                <img
                  class="img-fluid skill-img jsImg"
                  src="/icons/js1.png"
                  alt="jsIcon"
                />
              </li>
              <li class="skillsItem">
                <img
                  class="img-fluid skill-img bootImg"
                  src="/icons/mongodb.png"
                  alt="bootstrapIcon"
                />
              </li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 col-md-4">
            <ul class="skillsList">
              <li class="skillsItem">
                <img
                  class="img-fluid skill-img"
                  src="/icons/node.png"
                  alt="nodeIcon"
                />
              </li>
              <li class="skillsItem">
                <img
                  class="img-fluid skill-img"
                  src="/icons/express.png"
                  alt="expressIcon"
                />
              </li>
              <li class="skillsItem">
                <img
                  class="img-fluid skill-img jsImg"
                  src="/icons/mysql.png"
                  alt="jsIcon"
                />
              </li>
              <li class="skillsItem">
                <img
                  class="img-fluid skill-img bootImg"
                  src="/icons/react.png"
                  alt="bootstrapIcon"
                />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
