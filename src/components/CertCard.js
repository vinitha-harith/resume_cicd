import ReactCardFlip from "react-card-flip";
import { useState } from "react";
import Button from "react-bootstrap/Button";

const CardStyle = {
  borderColor: "lightgray",
  padding: "20px",
  margin: "20px",
  width: "250px",
  height: "250px",
  boxShadow:
    "0 0 0 4px lightgray, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)",
};

const CertCard = ({ cert }) => {
  const { link, imageId1, imageId2 } = cert;
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <ReactCardFlip
      className="certCard"
      isFlipped={isFlipped}
      flipDirection="horizontal"
    >
      <div style={CardStyle} onClick={() => setIsFlipped((prev) => !prev)}>
        <div>
          <img src={imageId1} alt="cert" />
        </div>
      </div>
      <div style={CardStyle} onClick={() => setIsFlipped((prev) => !prev)}>
        {/* This is the back of the card. */}
        <div
          style={{
            height: "100%",
            flexDirection: "column",
            alignContent: "space-between",
          }}
        >
          <div>
            <img className="fluid" src={imageId2} alt="cert" />
          </div>
          <div className="mt-3 text-center">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline-dark"
                className="pill"
                size="sm"
                style={{ fontWeight: "normal", color: "#F08" }}
              >
                View Credential
              </Button>
            </a>
          </div>
        </div>
      </div>
    </ReactCardFlip>
  );
};

export default CertCard;
