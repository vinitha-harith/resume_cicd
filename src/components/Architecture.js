import React from "react";
import Arch from "../images/architecture.jpg";
import Geo from "../images/geo_profile.jpg";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import BackToTop from "./BackToTop";

const Architecture = () => {
  return (
    <>
      <div className="bg-light p-5 rounded-lg fluid mt-3">
        <h1 className="display-6">What's hapenning behind the scenes...</h1>
        <p className="lead mt-4 fw-bold">
          The Concept - Rationale behind hosting this site
        </p>
        <p className="lead mt-4">
          The purpose behind building this site was to showcase some of my
          technical capabilities and expertise in cloud architecture. Rather
          than utilize readily available web-templates I choose to build much of
          the site in a ground-up way to both enhance my skills and build
          understanding of the various tools and technologies.
        </p>
        <p className="lead mt-4">
          I have incorporated a good number of native Cloud Architecture
          principles, like ensuring High Availability, Serverless, decoupled
          services, analytics, automation, security, SRE etc., into the design
          of this website.
        </p>
        <p className="lead mt-4 fw-bold">The Architecture</p>

        <Image
          src={Arch}
          alt="architecture"
          className="rounded mx-auto d-block mt-4 fluid"
        />

        <Card border="light">
          <Card.Header className="lead fw-bold">
            Static Website Hosting
          </Card.Header>
          <Card.Body>
            <Card.Title>Frontend UI</Card.Title>
            <Card.Text>
              The frontend is built using React as a Single Page Application
              with all routing done on client side, to reduce trips to server.
              The styling has been done with customized Bootstrap and Tailwind
              CSS. The static files are hosted and served from a Cloud Storage
              (GCS) bucket and cached via CDN to improve latency.
            </Card.Text>
            <Card.Title>Network Services</Card.Title>
            <Card.Text>
              The Global HTTP(S) (layer 7) Load Balancer receives the client
              requests and routes them to the GCS bucket, following the DNS name
              resolution by the DNS Service. The CDN is configured to serve
              static cached content. The Load Balancer allows for custom header
              configuration, and this helps with collecting metrics regarding
              the visitor traffic (shown in the Analytics section below.)
            </Card.Text>
            <Card.Title>Messaging</Card.Title>
            <Card.Text>
              The frontend application has a contact form which when filled and
              submitted, triggers an Axios API call to the Cloud Function
              (Function-as-a-Service), coded in Python, to publish the message
              to a PubSub Topic.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card border="light">
          <Card.Header className="lead fw-bold">Backend</Card.Header>
          <Card.Body>
            <Card.Title>Cloud Run</Card.Title>
            <Card.Text>
              The backend APIs help with metrics collection on the visitor
              traffic. The APIs have been scripted using Python, with Flask
              (WSGI framework) and hosted on Cloud Run, which is a serverless
              Container-as-a-Service. The deployment is done using Docker
              images, which are hosted on the Artifact Registry. Stats on the
              visitor traffic and page visits are captured and persisted in
              Datastore, which is a document NoSQL database.
            </Card.Text>
            <Card.Title>API Gateway</Card.Title>
            <Card.Text>
              The API requests from the frontend are routed to Cloud Run via the
              API Gateway, which is configured using the OpenAPI specification
              in yaml.
            </Card.Text>
            <Card.Title>Security</Card.Title>
            <Card.Text>
              For authorizations, dedicated Service Accounts are configured for
              interaction between GCP services.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card border="light">
          <Card.Header className="lead fw-bold">Automation</Card.Header>
          <Card.Body>
            <Card.Title>Infrastructure-as-Code</Card.Title>
            <Card.Text>
              The deployment of some of the resources, such as, the GCS, API
              Gateway, LB, Google Artifact Registry is automated using Terraform
              and the infrastruction provisioned using GitHub Actions.
            </Card.Text>
            <Card.Title>CI / CD</Card.Title>
            <Card.Text>
              Local IDE with Cloud Code SDK is used for development of the
              frontend and backend services and all changes are git controlled
              and synched with a GitHub repository. Using GitHub actions, the
              deployment to Cloud Run using Docker images, gets triggered based
              on pushing the code to GitHub. The build and deployment of the
              frontend application code to GCS is also automated.
            </Card.Text>
            <Card.Title>Security</Card.Title>
            <Card.Text>
              For authorizations, Workload Identity Federation is used for
              automated deployments.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card border="light">
          <Card.Header className="lead fw-bold">Analytics</Card.Header>
          <Card.Body>
            <Card.Title>Datastore to BigQuery data export</Card.Title>
            <Card.Text>
              The data on site traffic, is exported from Datastore to a GCS
              bucket and then imported into a BigQuery Dataset Table from GCS.
              This table is then used for dashboard visualizations via Looker
              Studio, as shown below.
            </Card.Text>
            <Card.Title>Geographical profile of visitors</Card.Title>
            <Image
              src={Geo}
              alt="Geo Profile"
              className="rounded mx-auto d-block mt-2 fluid"
            />
            <Card.Text className="mt-2">
              Some other simple stats collected and processed can be seen{" "}
              <NavLink
                className="no-underline"
                style={{ color: "#80f" }}
                to={"/personal"}
              >
                here
              </NavLink>
              .
            </Card.Text>
          </Card.Body>
          <Card border="light">
            <Card.Header className="lead fw-bold">
              Site Reliability Engineering
            </Card.Header>
            <Card.Body>
              <Card.Title>Cloud Logging and Monitoring</Card.Title>
              <Card.Text>
                All GCP services generate logs in Cloud Logging. Alerting
                policies have been configured to send email notifications on
                certain metrics, such as errors reported in the deployed
                application, 404 status codes etc.
              </Card.Text>
            </Card.Body>
          </Card>
        </Card>

        <BackToTop />
      </div>
    </>
  );
};

export default Architecture;
