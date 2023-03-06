import React from "react";
import Arch from "../images/architecture.jpg";
import Image from "react-bootstrap/Image";
import BackToTop from "./BackToTop";

const Architecture = () => {
  return (
    <>
      <div className="bg-light p-5 rounded-lg fluid mt-3">
        <h1 className="display-6">What's hapenning behind the scenes...</h1>
        <p className="lead mt-4 fw-bold">
          The rationale behind hosting this site
        </p>
        <p className="lead mt-4">
          The purpose behind building this site was to showcase some of my
          technical capabilities and expertise in cloud architecture. Rather
          than utilize readily available web-templates I choose to build much of
          the site in a ground-up way to both enhance my skills and build
          understanding of the various tools and technologies.
        </p>
        <p className="lead mt-4">
          I've incorporated a number of the Cloud Architecture principles like
          High Availability, Serverless, decoupled services, analytics,
          automation... to name a few.
        </p>
        <p className="lead mt-4 fw-bold">The architecture</p>

        <Image
          src={Arch}
          alt="architecture"
          className="rounded mx-auto d-block mt-4 fluid"
        />
        <BackToTop />
      </div>
    </>
  );
};

export default Architecture;
