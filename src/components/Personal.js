import React, { useState } from "react";
import VS from "../images/VS_capri.jpg";
import LinkedIn from "../images/linkedin.svg";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { NavLink } from "react-router-dom";
import BackToTop from "./BackToTop";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import validator from "validator";

const CF_URL =
  "https://us-central1-resume-ch.cloudfunctions.net/visitors_msg_cf";

const Personal = ({ v_count, page_count }) => {
  // begin modal
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setVname("");
    setVemail("");
    setVmessage("");
  };
  const handleShow = () => setShow(true);
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const [vname, setVname] = useState("");
  const [vemail, setVemail] = useState("");
  const [vmessage, setVmessage] = useState("");

  async function sendMsg(e) {
    e.preventDefault();
    const msg = { vname: vname, vemail: vemail, vmessage: vmessage };
    console.log(msg);
    if (!validator.isEmail(vemail)) {
      toast.error("Please enter a valid email address");
    } else {
      try {
        toast.info("Sending Message... please wait");
        const res_cf = await axios.post(`${CF_URL}`, msg, config);
        toast.success("Message sent successfully!");
        console.log(res_cf.data);
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
      handleClose();
    }
  }

  // const sendMsg = (e) => {
  //   e.preventDefault();
  //   const msg = { vname, vemail, vmessage };
  //   console.log(msg);

  //   handleClose();
  // };

  // end modal

  return (
    <>
      <div className="bg-light p-5 rounded-lg mt-2">
        <h1 className="display-6">So, who am I and what's my story...?</h1>
        <div>
          <img src={VS} alt="VS" className="rounded mx-auto d-block fluid" />
        </div>

        <p className="lead mt-4">
          Hi, I'm Vinitha, a driven and passionate software engineer and cloud
          architect. Born and brought up in the South Indian city of Chennai,
          with a Bachelor's degree in{" "}
          <span className="fst-italic">
            Electrical and Electronics Engineering{" "}
          </span>
          at the prestigious{" "}
          <span className="fst-italic">
            Birla Institute of Technology and Science, Pilani
          </span>
          , I set out to conquer the world of technology back in the early
          2000’s.
        </p>
        <p className="lead mt-4">
          My career journey began as a software developer in the ERP domain,
          which led me to move to the US for a couple of years. After some
          initial experience implementing payroll and other ERP solutions at
          major US banks and insurance companies, an exciting opportunity as an
          ERP developer at a Swiss bank came about and this brought me to
          Zurich, Switzerland, which I now call my (second) home.
        </p>
        <p className="lead mt-4">
          As technology continued to evolve, keen to stay ahead of the curve, I
          worked over weekends and late evenings to obtain additional technical
          certifications on Cloud Architecture, Big Data Analytics, and Data
          Science. Since then, I've continued to upskill myself in the latest
          technologies and constantly seek out new challenges, looking for ways
          to improve and push myself to the next level.
        </p>
        <p className="lead mt-3">
          Given the significance of quantification and metrics collection, I've
          implemented a couple of counters (under 'Impressions') to gauge this
          site's reach, with some visualizations behind the scenes to understand
          the geographical profile of visitors!
        </p>
        <p className="lead mt-3">
          When I'm not working, I enjoy spending time with my family, traveling,
          skiing, and hiking. Giving back to the community is also important to
          me, and I support noble causes that contribute to the welfare of the
          environment and society back in my hometown.
        </p>
        <p className="lead mt-3">
          My strong technical skills, desire to constantly improve, and passion
          for innovation make me an ideal candidate for any solutions architect
          or cloud engineer role.
        </p>

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
                  value={vname}
                  onChange={(e) => setVname(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="vemail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  value={vemail}
                  onChange={(e) => setVemail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="vmessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={vmessage}
                  onChange={(e) => setVmessage(e.target.value)}
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
        <div className="mt-3">
          <a
            className="btn btn-primary"
            href="https://www.linkedin.com/in/vinithasivaraman"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedIn} className="h-5 w-5" alt="" />
          </a>
        </div>
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
        <ToastContainer position="top-right" />
      </div>
    </>
  );
};

export default Personal;
