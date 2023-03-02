import React from "react";
import timelineElements from "./timelineEl";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  // let workIconStyles = { background: "#06D6A0" };
  let workIconStyles = { background: "#F08" };
  let schoolIconStyles = { background: "#f9c74f" };

  return (
    <div>
      <h1 className="title mt-2">
        My journey so far... professionally speaking
      </h1>
      <figure class="text-center">
        <blockquote class="blockquote">
          <p className="text-muted">
            -- from a (monolithic) ERP software developer to a{" "}
            <cite title="AWS, GCP">super cool</cite> Cloud Architect!
          </p>
        </blockquote>
      </figure>
      <VerticalTimeline layout={"1-column-left"} animate={true}>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
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
              <p id="skills" className="small text-muted fst-italic mb-3">
                Skills used: {element.skills}
              </p>
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
              <figcaption className="blockquote-footer fst-italic mt-3">
                {element.annotations}
              </figcaption>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
