import React from "react";
import Arch from "../images/architecture.jpg";
import Image from "react-bootstrap/Image";

const Architecture = () => {
  return (
    <div className="bg-light p-5 rounded-lg fluid m-3">
      <h1 className="display-6">What's hapenning behind the scenes...</h1>
      <p className="lead mt-4">
        <p>Now, for the architecture</p>
        <Image
          src={Arch}
          alt="architecture"
          className="rounded mx-auto d-block mt-4 fluid"
        />
      </p>
    </div>
  );
};

export default Architecture;
