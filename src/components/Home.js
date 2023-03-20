import React from "react";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Typewriter } from "react-simple-typewriter";
import "../custom.css";
import valley from "../images/himalayas.jpg";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Container
        style={{
          backgroundImage: `url(${valley})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
        className="img-fluid mask rounded"
      >
        <div className="p-5 rounded-lg mt-4">
          <h1 className="title">
            <div
              className="title my-4"
              style={{ color: "white", fontSize: "6rem", fontWeight: "400" }}
            >
              Hello there! I'm Vinitha.
            </div>
            <div className="title my-6">
              <span
                style={{ color: "#F08", fontSize: "4rem", fontWeight: 400 }}
              >
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={["Solutions Architect", "Cloud Engineer", "Developer"]}
                  loop={15}
                  cursor
                  cursorStyle=" />"
                  cursorColor="#80f"
                  typeSpeed={100}
                  deleteSpeed={120}
                  delaySpeed={1500}
                />
              </span>
            </div>
          </h1>
          <h2 className="my-5 display-6" style={{ color: "white" }}>
            Nice to{" "}
            <span
              style={{ color: "#80f", fontSize: "2rem", fontWeight: "bold" }}
            >
              <NavLink
                className="no-underline display-6"
                style={{ color: "#80f" }}
                to={"/personal"}
              >
                meet{" "}
              </NavLink>
            </span>
            you!
          </h2>
          <h3 className="my-4">
            <NavLink
              className="no-underline display-6"
              style={{ color: "#80f" }}
              to={"/experience"}
            >
              <Button
                variant="outline-light"
                size="lg"
                style={{
                  fontWeight: "bold",
                  color: "#F08",
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                }}
              >
                Browse my Resume
              </Button>
            </NavLink>
          </h3>
        </div>
      </Container>
    </>
  );
};

export default Home;
