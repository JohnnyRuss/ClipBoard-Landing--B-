import React from "react";
import Button from "react-bootstrap/Button";

interface BTNType {
  value: "mac" | "ios";
}

const BTN: React.FC<BTNType> = ({ value }) => {
  return (
    <Button
      size="lg"
      className={`px-2rem px-md-3rem py-3 fw-semibold shadow-large rounded-3rem border-0 filter-bright-110-hover ${
        value === "mac" ? "bg-blue" : "bg-cyan"
      }`}
    >
      Download for {value === "mac" ? "Mac" : value === "ios" ? "iOS" : ""}
    </Button>
  );
};

export default BTN;
