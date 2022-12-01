import React from "react";
import Figure from "react-bootstrap/Figure";

interface LogoType {
  className?: string;
}

const Logo: React.FC<LogoType> = ({ className }) => {
  return (
    <Figure className={`${className || ""}`}>
      <Figure.Image
        className="w-full h-full object-fit-contain"
        src="/assets/logo.svg"
        alt="logo"
      />
    </Figure>
  );
};

export default Logo;
