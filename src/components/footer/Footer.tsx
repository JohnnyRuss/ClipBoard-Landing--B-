import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Figure from "react-bootstrap/Figure";
import { Logo } from "../layouts";

import { footer } from "../../utils/data";

const Footer: React.FC = () => {
  return (
    <Container
      fluid
      className="bg-grayish-blue text-dark-grayish-blue mt-10rem"
    >
      <Container className="py-3rem">
        <Row>
          <Col
            xs={12}
            md={2}
            className="d-flex flex-column flex-md-row align-items-center align-items-md-start"
          >
            <Logo className="w-6rem h-6rem" />
          </Col>
          {footer.navs.map((nav, i) => (
            <Col
              xs={12}
              md={2}
              as="ul"
              className="d-flex flex-column align-items-center align-items-md-start"
              key={`footer-nav--${i}`}
            >
              {nav.map((route) => (
                <li className="cursor-pointer text-blue-hover" key={route}>
                  {route}
                </li>
              ))}
            </Col>
          ))}
          <Col
            xs={12}
            md={4}
            className="d-flex justify-content-center justify-content-md-end gap-4"
          >
            {footer.figs.map((fig) => (
              <Figure className="cursor-pointer">
                <Figure.Image src={fig} alt={fig} />
              </Figure>
            ))}
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;
