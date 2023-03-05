import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Contact = () => {
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
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="vname">
              <Form.Label>First name</Form.Label>
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
                onChange={(e) => setField("vname", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="vmessage">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={form.vmessage}
                onChange={(e) => setField("vname", e.target.value)}
              />
            </Form.Group>
            <Button variant="secondary" type="submit" onClick={sendMsg()}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Contact;
