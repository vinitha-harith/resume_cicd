import React from "react";
import timelineElements from "./timelineEl";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  // let workIconStyles = { background: "#06D6A0" };
  let workIconStyles = {
    background: "#F08",
    borderColor: "lightgray",
    boxShadow:
      "0 0 0 4px lightgray, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)",
  };
  let schoolIconStyles = { background: "#f9c74f" };

  return (
    <div>
      <h1 className="title mt-4">My professional journey so far...</h1>
      <figure class="text-center">
        <blockquote class="blockquote">
          <p className="text-muted">
            - from an ERP software developer to a Cloud Architect!
          </p>
        </blockquote>
      </figure>
      <VerticalTimeline
        layout={"1-column-left"}
        lineColor={"lightgray"}
        animate={true}
      >
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#f9f7fa",
                color: "black",
                borderTop: "3px solid #80f",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #80f",
              }}
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
            >
              <h5 className="vertical-timeline-element-title fw-bold">
                {element.title}
              </h5>
              <h6 className="vertical-timeline-element-subtitle fst-italic">
                {element.location}
              </h6>
              <p id="date" className="text-muted">
                {element.date}
              </p>
              <p id="description">{element.description}</p>

              {element.skills.map((s) => {
                return (
                  <Button
                    className="badge rounded-pill text-bg-secondary mx-1"
                    size="sm"
                    style={{ fontWeight: 400, color: "#F08" }}
                  >
                    {s}
                  </Button>
                );
              })}

              <p className="mt-4"></p>
              {showButton && (
                <a
                  className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }`}
                  href={element.buttonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
