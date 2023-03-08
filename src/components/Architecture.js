import React from "react";
import Arch from "../images/architecture.jpg";
import Geo from "../images/geo_profile.jpg";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import BackToTop from "./BackToTop";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

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
          principles, such as ensuring High Availability, Serverless, scalable,
          decoupled services, analytics, automation, security, SRE etc., into
          the design of this website.
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
            <Card.Title className="text-muted">Frontend UI</Card.Title>
            <Card.Text>
              The frontend is built using React as a Single Page Application
              (SPA) with all routing done on client side, to reduce trips to the
              server. The styling has been done with customized Bootstrap and
              Tailwind CSS. The static files are hosted and served from a
              <OverlayTrigger
                trigger="click"
                rootClose
                key="gcs"
                placement="right"
                overlay={
                  <Popover id="gcs">
                    <Popover.Header as="h5">
                      <a
                        href="https://cloud.google.com/storage/docs/discover-object-storage-console"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Google Cloud Storage
                      </a>
                    </Popover.Header>
                    <Popover.Body>
                      Cloud Storage is a managed service for storing
                      unstructured data.
                    </Popover.Body>
                  </Popover>
                }
              >
                <button type="button" className="btn btn-link btn-sm">
                  Google Cloud Storage (GCS)
                </button>
              </OverlayTrigger>
              bucket and cached via CDN to improve latency.
            </Card.Text>
            <Card.Title className="text-muted">Network Services</Card.Title>
            <Card.Text>
              The
              <OverlayTrigger
                trigger="click"
                rootClose
                key="lb"
                placement="right"
                overlay={
                  <Popover id="lb">
                    <Popover.Header as="h5">
                      <a
                        href="https://cloud.google.com/load-balancing/docs/https"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Global HTTP(S) Load Balancer
                      </a>
                    </Popover.Header>
                    <Popover.Body>
                      External HTTP(S) Load Balancing is a proxy-based Layer 7
                      load balancer that enables running and scaling services
                      behind a single external IP address.
                    </Popover.Body>
                  </Popover>
                }
              >
                <button type="button" className="btn btn-link btn-sm">
                  Global HTTP(S) Load Balancer
                </button>
              </OverlayTrigger>
              receives the client requests and routes them to the GCS bucket,
              following the DNS name resolution by the DNS Service. The CDN is
              configured to serve static cached content. The Load Balancer
              allows for custom header configuration, and this helps with
              collecting metrics regarding the visitor traffic (shown in the
              Analytics section below.)
            </Card.Text>
            <Card.Title className="text-muted">Message Queuing</Card.Title>
            <Card.Text>
              The frontend application has a contact form which when filled and
              submitted, triggers an Axios API call to the
              <OverlayTrigger
                trigger="click"
                rootClose
                key="cf"
                placement="right"
                overlay={
                  <Popover id="cf">
                    <Popover.Header as="h5">
                      <a
                        href="https://cloud.google.com/functions/docs/writing"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Cloud Function
                      </a>
                    </Popover.Header>
                    <Popover.Body>
                      Google Cloud Functions is a serverless execution
                      environment for building and connecting cloud services.
                      With Cloud Functions a simple, single-purpose function can
                      be written and attached to events emitted from the cloud
                      infrastructure and services.
                    </Popover.Body>
                  </Popover>
                }
              >
                <button type="button" className="btn btn-link btn-sm">
                  Cloud Function
                </button>
              </OverlayTrigger>
              (Function-as-a-Service), coded in Python, to publish the message
              to a
              <OverlayTrigger
                trigger="click"
                rootClose
                key="pb"
                placement="right"
                overlay={
                  <Popover id="pb">
                    <Popover.Header as="h5">
                      <a
                        href="https://cloud.google.com/pubsub/docs/overview"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        PubSub
                      </a>
                    </Popover.Header>
                    <Popover.Body>
                      Pub/Sub is an asynchronous and scalable messaging service
                      that decouples services producing messages from services
                      processing those messages.
                    </Popover.Body>
                  </Popover>
                }
              >
                <button type="button" className="btn btn-link btn-sm">
                  PubSub{" "}
                </button>
              </OverlayTrigger>
              Topic.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card border="light">
          <Card.Header className="lead fw-bold">Backend</Card.Header>
          <Card.Body>
            <Card.Title className="text-muted">Cloud Run</Card.Title>
            <Card.Text>
              The backend APIs help with metrics collection on the visitor
              traffic. The APIs have been scripted using Python, with Flask
              (WSGI framework) and hosted on
              <OverlayTrigger
                trigger="click"
                rootClose
                key="cr"
                placement="right"
                overlay={
                  <Popover id="cr">
                    <Popover.Header as="h5">
                      <a
                        href="https://cloud.google.com/run/docs/overview/what-is-cloud-run"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Cloud Run
                      </a>
                    </Popover.Header>
                    <Popover.Body>
                      Cloud Run is a managed compute platform that enables
                      running containers directly on top of Google's scalable
                      infrastructure.
                    </Popover.Body>
                  </Popover>
                }
              >
                <button type="button" className="btn btn-link btn-sm">
                  Cloud Run
                </button>
              </OverlayTrigger>
              (Container-as-a-Service). The deployment is done using Docker
              images, which are hosted on the
              <OverlayTrigger
                trigger="click"
                rootClose
                key="ar"
                placement="right"
                overlay={
                  <Popover id="ar">
                    <Popover.Header as="h5">
                      <a
                        href="https://cloud.google.com/artifact-registry/docs/overview"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Artifact Registry
                      </a>
                    </Popover.Header>
                    <Popover.Body>
                      Artifact Registry enables centrally storing and managing
                      packages, Docker container images and artifacts and
                      building dependencies as part of an integrated Google
                      Cloud experience.
                    </Popover.Body>
                  </Popover>
                }
              >
                <button type="button" className="btn btn-link btn-sm">
                  Artifact Registry
                </button>
              </OverlayTrigger>
              Stats on the visitor traffic and page visits are captured and
              persisted in
              <OverlayTrigger
                trigger="click"
                rootClose
                key="ds"
                placement="right"
                overlay={
                  <Popover id="ds">
                    <Popover.Header as="h5">
                      <a
                        href="https://cloud.google.com/datastore/docs/store-query-data"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Datastore
                      </a>
                    </Popover.Header>
                    <Popover.Body>
                      Datastore is a highly scalable NoSQL database for web and
                      mobile applications
                    </Popover.Body>
                  </Popover>
                }
              >
                <button type="button" className="btn btn-link btn-sm">
                  Datastore
                </button>
              </OverlayTrigger>
              (NoSQL database). CORS handling is implemented in the API
              response.
            </Card.Text>
            <Card.Title className="text-muted">API Gateway</Card.Title>
            <Card.Text>
              The API requests from the frontend are routed to Cloud Run via the
              <OverlayTrigger
                trigger="click"
                rootClose
                key="ap"
                placement="right"
                overlay={
                  <Popover id="ap">
                    <Popover.Header as="h5">
                      <a
                        href="https://cloud.google.com/api-gateway/docs/about-api-gateway"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        API Gateway
                      </a>
                    </Popover.Header>
                    <Popover.Body>
                      API Gateway enables providing secure access to backend
                      services through a well-defined REST API that is
                      consistent across all services, regardless of service
                      implementation.
                    </Popover.Body>
                  </Popover>
                }
              >
                <button type="button" className="btn btn-link btn-sm">
                  API Gateway
                </button>
              </OverlayTrigger>
              which is configured using the OpenAPI specification in yaml.
            </Card.Text>
            <Card.Title className="text-muted">Security</Card.Title>
            <Card.Text>
              For authorizations, dedicated
              <OverlayTrigger
                trigger="click"
                rootClose
                key="sa"
                placement="right"
                overlay={
                  <Popover id="sa">
                    <Popover.Header as="h5">
                      <a
                        href="https://cloud.google.com/iam/docs/service-account-overview"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Service Accounts
                      </a>
                    </Popover.Header>
                    <Popover.Body>
                      A service account is a special kind of account typically
                      used by an application or compute workload, such as a
                      Compute Engine instance, rather than a person. A service
                      account is identified by its email address, which is
                      unique to the account.
                    </Popover.Body>
                  </Popover>
                }
              >
                <button type="button" className="btn btn-link btn-sm">
                  Service Accounts
                </button>
              </OverlayTrigger>
              are configured for interaction between GCP services.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card border="light">
          <Card.Header className="lead fw-bold">Automation</Card.Header>
          <Card.Body>
            <Card.Title className="text-muted">
              Infrastructure-as-Code
            </Card.Title>
            <Card.Text>
              The deployment of some of the resources, such as, the GCS, API
              Gateway, LB, Google Artifact Registry is automated using Terraform
              and the infrastruction provisioned using GitHub Actions.
            </Card.Text>
            <Card.Title className="text-muted">CI / CD</Card.Title>
            <Card.Text>
              Local IDE with Cloud Code SDK is used for development of the
              frontend and backend services and all changes are version
              controlled using git and synced with a GitHub repository. Using
              GitHub actions, the deployment to Cloud Run using Docker images,
              gets triggered based on pushing the code to GitHub. The build and
              deployment of the frontend application code to GCS is also
              automated.
            </Card.Text>
            <Card.Title className="text-muted">Security</Card.Title>
            <Card.Text>
              For authorizations,
              <OverlayTrigger
                trigger="click"
                rootClose
                key="wf"
                placement="right"
                overlay={
                  <Popover id="wf">
                    <Popover.Header as="h5">
                      <a
                        href="https://cloud.google.com/iam/docs/workload-identity-federation"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Workload Identity Federation
                      </a>
                    </Popover.Header>
                    <Popover.Body>
                      Using identity federation, you can grant on-premises or
                      multi-cloud workloads access to Google Cloud resources,
                      without using a service account key. You can use identity
                      federation with Amazon Web Services (AWS), or with any
                      identity provider that supports OpenID Connect (OIDC),
                      such as Microsoft Azure, or SAML 2.0.
                    </Popover.Body>
                  </Popover>
                }
              >
                <button type="button" className="btn btn-link btn-sm">
                  Workload Identity Federation
                </button>
              </OverlayTrigger>
              is used for automated deployments.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card border="light">
          <Card.Header className="lead fw-bold">Analytics</Card.Header>
          <Card.Body>
            <Card.Title className="text-muted">
              Datastore to BigQuery data export
            </Card.Title>
            <Card.Text>
              The data on site traffic, is exported from Datastore to a GCS
              bucket and then imported into a
              <OverlayTrigger
                trigger="click"
                rootClose
                key="bq"
                placement="right"
                overlay={
                  <Popover id="bq">
                    <Popover.Header as="h5">
                      <a
                        href="https://cloud.google.com/bigquery/docs/loading-data"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        BigQuery
                      </a>
                    </Popover.Header>
                    <Popover.Body>
                      BigQuery is Google Cloud's fully managed, petabyte-scale,
                      and cost-effective analytics data warehouse that lets you
                      run analytics over vast amounts of data in near real time.
                    </Popover.Body>
                  </Popover>
                }
              >
                <button type="button" className="btn btn-link btn-sm">
                  BigQuery
                </button>
              </OverlayTrigger>
              Dataset Table from GCS. This table is then used for dashboard
              visualizations via Looker Studio, as shown below{" "}
              <span className="fst-italic">(not a live feed!)</span>.
            </Card.Text>
            <Card.Title className="text-muted">
              Geographical profile of visitors
            </Card.Title>
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
              <Card.Title className="text-muted">
                Cloud Logging and Monitoring
              </Card.Title>
              <Card.Text>
                All GCP services generate logs in
                <OverlayTrigger
                  trigger="click"
                  rootClose
                  key="cl"
                  placement="right"
                  overlay={
                    <Popover id="cl">
                      <Popover.Header as="h5">
                        <a
                          href="https://cloud.google.com/logging/docs/log-analytics"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Cloud Logging
                        </a>
                      </Popover.Header>
                      <Popover.Body>
                        Cloud Logging is a fully managed, real-time log
                        management with storage, search, analysis and alerting
                        at exabyte scale.
                      </Popover.Body>
                    </Popover>
                  }
                >
                  <button type="button" className="btn btn-link btn-sm">
                    Cloud Logging.
                  </button>
                </OverlayTrigger>
                Alerting policies have been configured to send email
                notifications on certain metrics, such as errors reported in the
                deployed application, 404 status codes etc.
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
