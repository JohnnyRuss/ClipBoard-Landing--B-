import React from "react";
import Container from "react-bootstrap/Container";
import { Heading, Text, BTN } from "../layouts";

import { aboutClipboard } from "../../utils/data";

const AboutClipboard: React.FC = () => {
  return (
    <Container className="d-flex flex-column gap-4 align-items-center mt-8rem mt-lg-15rem">
      <Heading as="h2" title={aboutClipboard.title} />
      <Text className="mw-50rem">{aboutClipboard.description}</Text>
      <Container className="d-flex justify-content-center gap-5 mt-3rem mt-lg-5rem">
        <BTN value="ios" />
        <BTN value="mac" />
      </Container>
    </Container>
  );
};

export default AboutClipboard;
