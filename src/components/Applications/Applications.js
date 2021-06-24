import React from "react";
import db from "../../data/db.json";

const Applications = () => {
  const applications = db.applications;

  return (
    <div>
      <div className="row">
        <div className="col-2">
          <h2 id="proj">Projects:</h2>
        </div>
        <div className="col-10">
          <div className="row">
            {applications.map((app) => {
              return (
                <div className="appWrapper">
                  <div className="col-12" key={app.id}>
                    <h3 className="projTitle">{app.title}</h3>
                    <hr></hr>
                    <p>{app.body}</p>
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
                    <div className="ml-3">
                      <a href={app.deployedApp}>
                        <img src={app.imageUrl} alt={app.imageAlt} />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applications;
