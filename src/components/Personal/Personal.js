import React from "react";
import "./style.css";

const Personal = () => {
  return (
    <div className="wrapper container">
      <div className="row">
        <section className="personalCard">
          <div className="card personalAboutMe">
            <h5 className="card-header personalHeader">
              <code className="code">aboutMe(personal)</code>
            </h5>
            <div className="card-body">
              <p className="card-text">
                I am originally from a southwest suburb of Chicago. After
                spending some time living in the city after college, I lived in
                Los Angeles for a bit and currently reside in Denver, CO. I am a
                first generation college graduate and take a lot of pride in
                that. I am a quick-witted, empathetic and compassionate person.
                I love a challenge and am excited to start this second phase of
                my career as a web developer!
              </p>
              <p>
                In my free time:{" "}
                <span id="forFun">⛰️ ✈️ ⛳ 🎾 🎶 💻 🏃 🍽️ </span>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Personal;
