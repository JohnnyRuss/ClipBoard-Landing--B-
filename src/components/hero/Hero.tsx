import React from "react";
import Container from "react-bootstrap/Container";
import { Logo, Heading, Text, BTN } from "../layouts";

import { hero } from "../../utils/data";

const Hero: React.FC = () => {
  return (
    <Container fluid className="bgi-hero">
      <Container className="d-flex flex-column gap-4 align-items-center py-8rem">
        <Logo />
        <Heading as="h1" title={hero.title} />
        <Text className="mw-50rem">{hero.description}</Text>
        <Container className="d-flex gap-4 justify-content-center">
          <BTN value="ios" />
          <BTN value="mac" />
        </Container>
      </Container>
    </Container>
  );
};

export default Hero;
