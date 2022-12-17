import React from "react";
import Container from "react-bootstrap/Container";
import { Heading, Text } from "../layouts";
import Figure from "react-bootstrap/Figure";
import Card from "react-bootstrap/Card";

import { snippets } from "../../utils/data";

const YourSnippets: React.FC = () => {
  return (
    <Container fluid className="bgi-snippets position-relative">
      <Container className="d-flex flex-column align-items-center pb-xl-5rem">
        <Heading as="h2" title={snippets.title} />
        <Text className="mw-50rem mt-2rem">{snippets.description}</Text>
        <Figure className="position-lg-absolute start-0 bottom-0 w-half w-lg-30vw mt-4rem mt-lg-0">
          <Figure.Image
            src="/assets/image-computer.png"
            alt="snippets illustration"
            className="w-full h-full object-fit-cover object-pos-center"
          />
        </Figure>
        <Container className="d-flex mt-2rem mt-sm-6rem">
          <div className="ms-auto w-full w-lg-half d-flex flex-column gap-4">
            {snippets.snippetsList.map((snippet) => (
              <Card key={snippet.id} className="border-0">
                <Card.Body className="text-center text-lg-start d-flex flex-column align-items-center">
                  <Card.Title className="fs-app-h3 text-dark-grayish-blue">
                    {snippet.title}
                  </Card.Title>
                  <Card.Text className="mw-35rem text-grayish-blue">
                    {snippet.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Container>
      </Container>
    </Container>
  );
};

export default YourSnippets;
