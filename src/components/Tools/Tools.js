import React from "react";
import "./style.css";

const Tools = () => {
  return (
    <div>
      <section className="container">
        <h1 class="skills">
          <i class="fas fa-tools"></i>
          #tools
        </h1>
        <hr />
        <div id="{tools}" class="row container toolsCards">
          <div class="col-sm-12 col-md-6 toolCol">
            <div class="card toolCard">
              <div class="card-header toolHeader">Creating:</div>
              <ul id="#tools" class="createList">
                <li class="createItem">
                  <img src="/icons/vs-code.png" atl="visual studio code icon" />
                </li>
                <li class="createItem">
                  <img
                    class="miroIcon"
                    src="/icons/miro.png"
                    atl="miroboard tool icon"
                  />
                </li>
                <li class="createItem">
                  <img
                    class="gitHubIcon"
                    src="/icons/github1.png"
                    atl="gitHub icon"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 toolCol">
            <div class="card toolCard">
              <div class="card-header toolHeader">Connecting/Organizing:</div>
              <ul class="createList">
                <li class="createItem">
                  <img
                    class="listIcons2"
                    src="/icons/slack-logo.png"
                    atl="slack icon"
                  />
                </li>
                <li class="createItem">
                  <img
                    class="listIcons2"
                    src="/icons/airtable.png"
                    atl="airtableIcon"
                  />
                </li>
                <li class="createItem">
                  <img
                    class="listIcons2"
                    src="/icons/google-sheets.png"
                    atl="googleIcon"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tools;
