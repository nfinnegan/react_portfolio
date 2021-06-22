import React from "react";
import "./style.css";

const About = () => {
  return (
    <div className="wrapper">
      <div className="row">
        <section className="aboutMeCard">
          <div className="card aboutMe">
            <h5 className="card-header aboutMeHeader">
              .aboutMe(professional)
            </h5>
            <div className="card-body">
              <p className="card-text">
                Full Stack Software Engineer and Certified Scrum Master with a
                certificate in Full Stack Development from Northwestern
                University. An accomplished leader with extensive experience in
                operational management/processes and in customer success.
                Experience spans seed stage start-ups to large sized
                organizations. Contributing keen insights to delivery of client
                needs and market demands, while building and scaling teams.
                Adept at analyzing relevant information and adjusting work
                procedures to achieve a proven track record of the highest
                standard of excellence in customer service and processes.
                Proficient and knowledgeable in languages such as JavaScript,
                Node, Express, and jQuery. Motivated by learning and passionate
                about overcoming organizational blocks to maximize results
              </p>
              {/* <!-- CONTACT ME ICONS --> */}
              <div className="btnFormatting">
                <a
                  href="https://www.linkedin.com/in/nataliefinnegan/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary icons"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="https://github.com/nfinnegan"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary icons"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="mailto:nfinneg2@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary icons"
                >
                  <i className="fas fa-envelope-open-text"></i>
                </a>
                <a
                  href="https://twitter.com/FinneganNatalie"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary icons"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <br></br>
      <hr></hr>
    </div>
  );
};

export default About;
