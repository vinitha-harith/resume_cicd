import React from "react";
import Arch from "../images/architecture.jpg";
import Geo from "../images/geo_profile.jpg";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
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
          A number of Cloud Architecture principles, like High Availability,
          Serverless, decoupled services, analytics, automation etc., have been
          incorporated in the design of this website.
        </p>
        <p className="lead mt-4 fw-bold">The architecture</p>

        <Image
          src={Arch}
          alt="architecture"
          className="rounded mx-auto d-block mt-4 fluid"
        />

        <Card border="light">
          <Card.Header className="fw-bold">Static Website</Card.Header>
          <Card.Body>
            <Card.Title>Frontend UI</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Title>Network Services</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card border="light">
          <Card.Header className="fw-bold">Backend</Card.Header>
          <Card.Body>
            <Card.Title>API Gateway</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Title>Cloud Run</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card border="light">
          <Card.Header className="fw-bold">Automation</Card.Header>
          <Card.Body>
            <Card.Title>Infrastructure-as-Code</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Title>CI / CD</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card border="light">
          <Card.Header className="fw-bold">Messaging</Card.Header>
          <Card.Body>
            <Card.Title>Infrastructure-as-Code</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card border="light">
          <Card.Header className="fw-bold">Analytics</Card.Header>
          <Card.Body>
            <Card.Title>Geographical profile of visitors</Card.Title>
            <Image
              src={Geo}
              alt="Geo Profile"
              className="rounded mx-auto d-block mt-4 fluid"
            />
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <BackToTop />
      </div>
    </>
  );
};

export default Architecture;
