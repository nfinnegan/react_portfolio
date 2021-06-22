import React from "react";
import "./style.css";

const Personal = () => {
  return (
    <div className="wrapper container">
      <div className="row">
        <section className="aboutMeCard">
          <div className="card aboutMe">
            <h5 className="card-header aboutMeHeader">.aboutMe(personal)</h5>
            <div className="card-body">
              <p className="card-text">
                👋 I am originally from a southwest suburb of Chicago. After
                spending some time living in the city after college, I lived in
                Los Angeles for a bit and currently reside in Denver, CO. I am a
                first generation college graduate and take a lot of pride in
                that. I am a quick-witted, empathetic and compassionate person.
                I've taken a liking to hiking, love trying new restaurants and
                traveling (favorite country so far is Italy). I try to do those
                things as much as I can.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Personal;
