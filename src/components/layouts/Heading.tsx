import React from "react";

interface HeadingType {
  as: "h1" | "h2" | "h3";
  className?: string;
  title: string;
}

const Heading: React.FC<HeadingType> = ({ as, className, title }) => {
  const basicStyles = `text-dark-grayish-blue fw-semibold text-center`;

  return as === "h1" ? (
    <h1 className={`fs-app-h1 ${basicStyles} ${className || ""}`}>{title}</h1>
  ) : as === "h2" ? (
    <h2 className={`fs-app-h2 ${basicStyles} ${className || ""}`}>{title}</h2>
  ) : as === "h3" ? (
    <h3 className={`fs-app-h3 ${basicStyles} ${className || ""}`}>{title}</h3>
  ) : (
    <h4 className={` ${className || ""}`}>{title}</h4>
  );
};

export default Heading;
