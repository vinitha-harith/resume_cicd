import React from "react";
import { useContext } from "react";
import Accordion from "react-bootstrap/Accordion";
import { AccordionContext } from "react-bootstrap";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import BackToTop from "./BackToTop";
import CertCard from "./CertCard";
import certs from "./certData";
import Bits_pilani from "../images/bits.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Profile = () => {
  function ContextAwareToggle({ children, eventKey, callback }) {
    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey)
    );

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
      <div className="d-grid gap-2">
        <button
          type="button"
          size="lg"
          style={{
            backgroundColor: isCurrentEventKey ? "#f08" : "gray",
            color: isCurrentEventKey ? "white" : "white",
            fontWeight: "bold",
          }}
          onClick={decoratedOnClick}
        >
          {children}
        </button>
      </div>
    );
  }

  return (
    <div className="bg-light p-5 rounded-lg mt-2">
      <h1 className="display-6">Professional Summary</h1>
      <p className="lead mt-4">
        Experienced Solutions Architect with a diverse technical background in
        designing, developing, and delivering complex applications within
        Financial Services - Banking and Insurance, Government and Manufacturing
        sectors. Collaborative and result-oriented professional with a proven
        track record of delivering customer success, working with diverse global
        teams.
      </p>

      <div className="social-media-icon">
        <a
          href="https://www.linkedin.com/in/vinithasivaraman"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
        </a>
      </div>

      <hr className="my-4" />

      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <ContextAwareToggle eventKey="0">
              Tools and Technologies
            </ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <p>
                Cloud Computing (AWS, GCP) | Python | PL/SQL | Javascript |
                React | HTML | CSS | Oracle | MSSQL | Flask | Terraform | Docker
                | Unix | SAP Analytics Cloud | Git | GitHub Actions | Power BI |
                PUML | R
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <ContextAwareToggle eventKey="0">Skills</ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <p>
                Requirements Engineering | Systems Architecture | Business
                Architecture | API Design | Data Modelling | Data Analytics |
                Data Science | TOGAF | UML
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <ContextAwareToggle eventKey="0">Education</ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Container fluid>
                <Row>
                  <Col xs={2}>
                    <a
                      href="https://www.bits-pilani.ac.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={Bits_pilani}
                        className="mx-auto d-block img-fluid"
                        alt=""
                      />
                    </a>
                  </Col>
                  <Col>
                    <p className="fw-bold">
                      B.E. (Hons.) Electrical and Electronics Engineering,{" "}
                      <span className="fst-italic">
                        Birla Institute of Technology and Science, Pilani, India{" "}
                      </span>
                    </p>
                    <p className="mt-3">August 1995 — May 1999</p>
                  </Col>
                </Row>
              </Container>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <ContextAwareToggle eventKey="0">Certifications</ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <ul className="square">
                <li className="mt-3">
                  AWS Solutions Architect - Associate Certification,
                  <span className="fst-italic"> Amazon Web Services</span>
                </li>
                <li className="mt-3">
                  Associate Cloud Engineer - Google Cloud,{" "}
                  <span className="fst-italic"> Google</span>{" "}
                </li>
                <li className="mt-3">
                  SAP Certified Application Associate, SAP Analytics Cloud
                  Certification, <span className="fst-italic">SAP</span>
                </li>
                <li className="mt-3">
                  Python for Research Programming Certifications,{" "}
                  <span className="fst-italic"> MITx, Harvardx</span>
                </li>
                <li className="mt-3">
                  Machine Learning Certification (using MATLAB),{" "}
                  <span className="fst-italic"> Stanford Online</span>
                </li>
                <li className="mt-3">
                  Data Science with R Programming &amp; Visualization
                  Certifications, <span className="fst-italic"> Harvardx</span>
                </li>
              </ul>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexFlow: "wrap",
                  justifyContent: "center",
                }}
              >
                {certs.map((c, index) => (
                  <CertCard key={c.id} cert={c} />
                ))}
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <ContextAwareToggle eventKey="0">Languages</ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <p>English (native) | German (C1)</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <BackToTop />
    </div>
  );
};

export default Profile;
