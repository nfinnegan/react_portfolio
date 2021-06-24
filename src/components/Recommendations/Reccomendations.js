import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Recco = () => {
  return (
    <div>
      <div className="row">
        <div className="col-4 recsListTitle">
          <h3>
            <strong>Parker Holcomb</strong>
          </h3>
          <h5>
            <i>Chief AI Engineer</i>
          </h5>
          <h5>
            <i>Anthem.ai</i>
          </h5>
        </div>
        <div className="col-8 recsListBody">
          <p>
            "Natalie will always have a spot at any company that I am running.
            She has a rare ability to stay focused on the tactical, combined
            with the ability to surface insights and pull up to the strategic
            when appropriate. I look forward to working with her again some
            day."
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-4 recsListTitle">
          <h3>
            <strong>Joe Geraldi</strong>
          </h3>
          <h5>
            <i>Director of Sales</i>
          </h5>
          <h5>
            <i>UNIS</i>
          </h5>
        </div>
        <div className="col-8 recsListBody">
          <p>
            "During my time working alongside Natalie at Fraight, Natalie
            brought her years of operations and IT experience to help maintain
            and grow our business operations. Natalie did more than lead the
            operations and growth of our business though. Natalie took
            initiative to continually solve our customers challenges, she
            implemented processes and created training/on-boarding material for
            new hires, she helped guide our engineer and product teams and most
            importantly was a great team player that had a positive impact to
            company culture. I would highly recommend Natalie and would
            certainly work with her again if given the opportunity.""
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-4 recsListTitle">
          <h3>
            <strong>John Morel</strong>
          </h3>
          <h5>
            <i>SVP of Sales</i>
          </h5>
          <h5>
            <i>Coyote Logistics</i>
          </h5>
        </div>
        <div className="col-8 recsListBody">
          <p>
            "I had the pleasure of working with Natalie for over 6 years with
            several complex Fortune 500 customers. She consistently displayed an
            extremely professional and positive attitude while navigating both
            the internal and external sell. Natalie’s ability to identify
            opportunities and properly position solutions was instrumental in
            putting together several long term growth strategies in place. She
            has an extremely high tolerance for ambiguity and a calm and
            calculated ability to drive solutions. I am extremely confident that
            Natalie will be a positive addition to any company."
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-4 recsListTitle">
          <h3>
            <strong>Melissa Nocella</strong>
          </h3>
          <h5>
            <i>Director, HR Business Partner</i>
          </h5>
          <h5>
            <i>Coyote Logistics</i>
          </h5>
        </div>
        <div className="col-8 recsListBody">
          <p>
            "Natalie is a great co-worker to have on your team. She is reliable,
            enthusiastic, and always exceeds expectations. She is eager to find
            new solutions to problems, and collaborates well with teammates."
          </p>
        </div>
      </div>
      <hr></hr>
      <div>
        <button type="button" class="projBtns">
          <Link class="projLinks" alt="back to home" to="/">
            Go Home
          </Link>
        </button>
      </div>
      <h4 id="moreRecs">
        See more of what my former colleagues have said about working with me{" "}
        <a
          href="https://www.linkedin.com/in/nataliefinnegan/"
          rel="noreferrer"
          target="_blank"
        >
          here
        </a>{" "}
      </h4>
    </div>
  );
};

export default Recco;
