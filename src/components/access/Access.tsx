import React from "react";
import Container from "react-bootstrap/Container";
import { Heading, Text } from "../layouts";
import Figure from "react-bootstrap/Figure";

import { clipboard } from "../../utils/data";

const Access: React.FC = () => {
  return (
    <Container className="d-flex flex-column gap-4 align-items-center mt-8rem mt-lg-15rem">
      <Heading as="h2" title={clipboard.title} />
      <Text className="mw-50rem">{clipboard.description}</Text>
      <Figure className="mt-3rem mt-lg-6rem">
        <Figure.Image
          src="/assets/image-devices.png"
          alt="access illustration"
        />
      </Figure>
    </Container>
  );
};

export default Access;
