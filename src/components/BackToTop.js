import React from "react";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "../custom.css";

const BackToTop = () => {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="App">
      {backToTop && (
        <Button
          variant="dark"
          style={{
            position: "fixed",
            bottom: "40px",
            right: "40px",
            height: "40px",
            width: "40px",
            fontSize: "25px",
            textAlign: "center"
          }}
          onClick={scrollUp}
        >
          ^
        </Button>
      )}
    </div>
  );
};

export default BackToTop;
