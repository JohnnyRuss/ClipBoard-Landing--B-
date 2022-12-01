import React from "react";
import Container from "react-bootstrap/Container";
import Figure from "react-bootstrap/Figure";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { partners } from "../../utils/data";

const Partners: React.FC = () => {
  return (
    <Container>
      <Row className="justify-content-between align-items-center mt-8rem mt-lg-15rem">
        {partners.map((partner) => (
          <Figure xs={6} md={2} as={Col} key={partner}>
            <Figure.Image src={partner} alt={partner} />
          </Figure>
        ))}
      </Row>
    </Container>
  );
};

export default Partners;
