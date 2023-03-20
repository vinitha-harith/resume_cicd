import React from "react";
import timelineElements from "./timelineEl";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import BackToTop from "./BackToTop";

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
      <h1 className="title mt-4">My professional journey so far ...</h1>

      <h5 className="text-center text-muted fst-italic">
        ... from application development on monolithic systems to architecting
        distributed systems on the Cloud!
      </h5>

      <VerticalTimeline
        layout={"1-column-left"}
        lineColor={"lightgray"}
        animate={true}
      >
        {timelineElements.map((element, j) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              key={j}
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
              <div
                style={{
                  background: "linear-gradient(#F08, #2c292e)",
                  color: "white",
                  padding: "0.5em 0.5em 0.5em 0.5em",
                  borderStyle: "solid",
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                }}
              >
                <h5 className="vertical-timeline-element-title">
                  {element.title}
                </h5>
                <h6 className="vertical-timeline-element-subtitle fst-italic mt-1">
                  {element.location}
                </h6>
              </div>
              <p id="date" className="text-muted">
                {element.date}
              </p>

              <p id="description">{element.description}</p>

              {element.skills.map((skill, i) => {
                return (
                  <span
                    className="badge rounded-pill text-bg-secondary mx-1"
                    size="sm"
                    key={i}
                    style={{ fontWeight: 400, color: "#F08" }}
                  >
                    {skill}
                  </span>
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
      <p className="lead mt-4 fw-bold text-muted fst-italic">
        ** Detailed CV & References available upon request
      </p>
      <BackToTop />
    </div>
  );
};

export default Experience;
