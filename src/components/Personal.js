import React from "react";
import VS from "../images/VS.jpg";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

const Personal = ({ v_count, page_count }) => {
  return (
    <>
      <div className="bg-light p-5 rounded-lg m-3">
        <h1 className="display-6">So, who am I and what's my story...?(!)</h1>
        <p className="lead mt-4">
          <div>
            <img
              src={VS}
              alt="VS"
              className="rounded mx-auto d-block"
              style={{ maxWidth: "12rem", maxHeight: "16rem" }}
            />
          </div>
          <p className="mt-4 text-center fw-bold">Vinitha Sivaraman</p>
          <p className="mt-4">
            Originally from the Indian city Chennai, I've lived and worked in
            the United States for a couple of years and since then been based in
            Zurich, Switzerland for several years.
          </p>
          <p className="mt-3">
            When I'm not working, I enjoy spending time with my family,
            travelling, skiing, and hiking. I sincerely believe in giving back
            to the community and I do my bit to support noble causes that
            contribute to the welfare of the environment and the society, back
            in my home town.
          </p>
          <p className="mt-3">
            Besides that, I love learning new technologies, improving on my
            technical skills, and constantly challenging myself to push the
            boundaries and accomplish more.
          </p>
        </p>
        <Alert variant="dark" className="mt-4">
          <span className="fw-bold">Impressions</span>
          <div>
            <Button variant="dark" className="mt-2 me-3">
              Visitors <Badge bg="secondary">{v_count}</Badge>
              <span className="visually-hidden">unread messages</span>
            </Button>
            <Button variant="dark" className="mt-2">
              Page Visits <Badge bg="secondary">{page_count}</Badge>
              <span className="visually-hidden">unread messages</span>
            </Button>
          </div>
        </Alert>
        <p>Thanks for stopping by!</p>
      </div>
    </>
  );
};

export default Personal;
