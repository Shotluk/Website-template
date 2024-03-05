import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <footer className="bg-body-tertiary text-dark py-3"> 
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <h5>Contact Us</h5>
            <p>Email: example@example.com</p>
            <p>Phone: +123 456 7890</p>
          </Col>
          <Col xs={12} md={6}>
            <h5>Follow Us</h5>
            {/* Add social media icons or links here */}
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
