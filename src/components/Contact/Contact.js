import React from "react";
import "./style.css";

const Contact = () => {
  return (
    <div className="container airTableForm">
      <h1>Let's Work Together</h1>
      <p>
        Drop me your contact and some information about the project below 👇{" "}
      </p>
      <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script>
      <iframe
        class="airtable-embed airtable-dynamic-height"
        src="https://airtable.com/embed/shrBkCv7x9sdKyTF4?backgroundColor=purple"
        frameborder="0"
        title="airtableContact"
        onmousewheel=""
        width="100%"
        height="926"
      ></iframe>
    </div>
  );
};

export default Contact;
