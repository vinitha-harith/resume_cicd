import React, { useState } from "react";
import VS from "../images/VS_capri.jpg";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { NavLink } from "react-router-dom";
import BackToTop from "./BackToTop";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
// import Contact from "./Contact";

const Personal = ({ v_count, page_count }) => {
  // begin modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [form, setForm] = useState({});
  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
  };
  const sendMsg = (e) => {
    e.preventDefault();
    console.log(form);
  };
  // end modal

  return (
    <>
      <div className="bg-light p-5 rounded-lg m-3">
        <h1 className="display-6">So, who am I and what's my story...?</h1>
        <p className="lead mt-4">
          <div>
            <img src={VS} alt="VS" className="rounded mx-auto d-block fluid" />
          </div>
          <p className="mt-4">
            Hi, I'm Vinitha, a driven and passionate software engineer and cloud
            architect. Born and brought up in the South Indian city of Chennai,
            with a Bachelor's degree in Electrical and Electronics at the
            prestigious Birla Institute of Technology and Science, Pilani I set
            out to conquer the world of technology back in the early 2000’s.
          </p>
          <p className="mt-4">
            My career journey began as a software developer in the ERP domain,
            which led me to move to the US for a brief two-year stint. After
            some initial experience implementing payroll and other ERP solutions
            to a couple of major US banks and insurance companies, an exciting
            opportunity as an ERP developer at a Swiss bank which was too good
            to pass up, came about and this brought me to Zurich, Switzerland,
            which I now call my (second) home.
          </p>
          <p className="mt-4">
            As technology continued to evolve, I knew that I needed to stay
            ahead of the curve. Cloud, Big Data Analytics, and Data Science
            became the new buzzwords, and I jumped on the opportunity to build
            up BI dashboards on SAP Analytics Cloud platform. Since then, I've
            continued to upskill myself in the latest technologies and seek out
            new challenges.
          </p>
          <p className="mt-3">
            Through trial and error, I learned the importance of showcasing
            metrics to potential employers. I never underestimated the
            significance of quantifying my past project experiences again. In
            fact, I collect stats on everything I do, including on this site,
            where I use a couple of counters to gauge its popularity, and more
            metrics are being collected, analysed, and visualized behind the
            scenes! I'm always looking for ways to improve and push myself to
            the next level.
          </p>
          <p className="mt-3">
            When I'm not working, I enjoy spending time with my family,
            traveling, skiing, and hiking. Giving back to the community is also
            important to me, and I support noble causes that contribute to the
            welfare of the environment and society back in my hometown.
          </p>
          <p className="mt-3">
            My strong technical skills, desire to constantly improve, and
            passion for innovation make me the perfect candidate for any
            software engineering or cloud architect role. I'm always looking for
            new challenges and opportunities to make a positive impact, so if
            you're looking for a driven and talented professional, let's connect
            and see how I can help take your business to the next level.
          </p>
        </p>
        <Alert variant="dark" className="mt-4">
          <span className="fw-bold">Impressions</span>
          <div>
            <NavLink to={"/architecture"}>
              <Button variant="dark" className="mt-2 me-3">
                Visitors <Badge bg="secondary">{v_count}</Badge>
                <span className="visually-hidden">unread messages</span>
              </Button>
            </NavLink>
            <NavLink to={"/architecture"}>
              <Button variant="dark" className="mt-2">
                Page Visits <Badge bg="secondary">{page_count}</Badge>
                <span className="visually-hidden">unread messages</span>
              </Button>
            </NavLink>
          </div>
        </Alert>
        <p className="lead mt-4">Thanks for stopping by!</p>
        <BackToTop />

        <Button variant="primary" onClick={handleShow}>
          Contact me
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Message</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="vname">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Name"
                  autoFocus
                  value={form.vname}
                  onChange={(e) => setField("vname", e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="vemail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  value={form.vemail}
                  onChange={(e) => setField("vemail", e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="vmessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={form.vmessage}
                  onChange={(e) => setField("vmessage", e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit" onClick={sendMsg}>
              Send Message
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default Personal;
