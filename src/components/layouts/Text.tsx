import React from "react";

interface TextType {
  children: React.ReactNode;
  align?: "start" | "center";
  className?: string;
}

const Text: React.FC<TextType> = ({
  children,
  align = "center",
  className,
}) => {
  return (
    <p
      className={`${
        align === "center" ? "text-center" : "text-start"
      } text-grayish-blue ${className}`}
    >
      {children}
    </p>
  );
};

export default Text;
