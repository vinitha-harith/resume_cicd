import React from "react";
import BackToTop from "./BackToTop";
// import Iframe from "react-iframe";

const Concept = () => {
  return (
    <div className="bg-light p-5 rounded-lg fluid m-3">
      <h1 className="display-6">The rationale behind hosting this site</h1>
      <p className="lead mt-4">
        <p>
          The purpose behind building this site was to showcase some of my
          technical capabilities and expertise in cloud architecture. Rather
          than utilize readily available web-templates I choose to build much of
          the site in a ground-up way to both enhance my skills and build
          understanding of the various tools and technologies.
        </p>
        <p>
          I've incorporated a number of the Cloud Architecture principles like
          High Availability, Serverless, decoupled services, analytics,
          automation... to name a few.
        </p>
      </p>
      <BackToTop />
    </div>
  );
};

export default Concept;
