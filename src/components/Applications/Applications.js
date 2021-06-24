import React from "react";
import db from "../../data/db.json";
import "./style.css";

const Applications = () => {
  const applications = db.applications;

  return (
    <div>
      {applications.map((app) => {
        return (
          <div className="row container">
            <div className="col-md-4 projInfo" key={app.id}>
              <h2 className="projTitle">{app.title}</h2>
              <hr></hr>
              <p>{app.body}</p>
              <h2 className="projTitle">Technologies</h2>
              <hr></hr>
              <p>{app.technologies}</p>
              <button type="button" class="projBtns">
                <a
                  class="projLinks"
                  rel="noreferrer"
                  target="_blank"
                  href={app.repo}
                >
                  GitHub
                </a>
              </button>
              <button type="button" class="projBtns">
                <a
                  class="projLinks"
                  rel="noreferrer"
                  target="_blank"
                  href={app.deployedApp}
                >
                  Deployed App
                </a>
              </button>
            </div>
            <div className="col-md-8">
              <a className="prjPicLink" href={app.deployedApp}>
                <img id="projPix" src={app.imageUrl} alt={app.imageAlt} />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Applications;
