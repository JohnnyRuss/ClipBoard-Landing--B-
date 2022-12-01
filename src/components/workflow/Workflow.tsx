import React from "react";
import { Heading, Text } from "../layouts";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { workflows } from "../../utils/data";

const Workflow: React.FC = () => {
  return (
    <Container className="d-flex flex-column align-items-center">
      <Heading as="h2" title={workflows.title} />
      <Text className="mt-2rem">{workflows.description}</Text>
      <Row className="mt-6rem gap-5 gap-md-0">
        {workflows.workflowsList.map((feature) => (
          <Card
            as={Col}
            xs={12}
            lg={4}
            key={feature.id}
            className="border-0 align-items-center"
          >
            <Card.Img
              src={feature.fig}
              alt={feature.title}
              className="w-max h-4rem"
            />
            <Card.Body className="d-flex flex-column align-items-center mt-3rem">
              <Card.Title className="fs-app-h3 text-dark-grayish-blue">
                {feature.title}
              </Card.Title>
              <Card.Text className="text-grayish-blue text-center mw-35rem mw-lg-full">
                {feature.description}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
};

export default Workflow;
