import React from "react";
import { useContext } from "react";
import Accordion from "react-bootstrap/Accordion";
import { AccordionContext } from "react-bootstrap";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

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
    <div className="bg-light p-5 rounded-lg m-3">
      <h1 className="display-6">Professional Summary</h1>
      <p className="lead mt-4">
        Experienced Solutions Architect with a diverse technical background in
        designing, developing, and delivering complex applications within
        Financial Services - Banking and Insurance, Government and Manufacturing
        sectors. Collaborative and result-oriented professional with a proven
        track record of delivering customer success and working with diverse
        global teams.
      </p>

      <div className="social-media-icon">
        <a
          href="http://www.linkedin.com/in/vinithasivaraman"
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
              Technical Skills
            </ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <p>
                Cloud Computing (AWS, GCP) | Python | PL / SQL | Javascript |
                React | HTML | CSS | Oracle | MSSQL | SAP Analytics Cloud | R
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <ContextAwareToggle eventKey="0">
              Functional Skills
            </ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <p>Requirements Engineering | Systems Architecture</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <ContextAwareToggle eventKey="0">Education</ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <p className="fw-bold">
                B.E. (Hons.) Electrical and Electronics Engineering,{" "}
                <span className="fst-italic">
                  Birla Institute of Technology and Science, Pilani, India{" "}
                </span>
              </p>
              <p className="mt-3">August 1995 — May 1999</p>
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
    </div>
  );
};

export default Profile;