import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const FormContainer = ({ children }) => {
  return (
    <Container 
    style={{
      padding: '30px', 
      marginTop: '30px',
      borderRadius: '50px',
      boxShadow: '-20px 20px 60px #cccccc',
      width: '45%',
      background: 'linear-gradient(225deg, #ffffff, #d8d8d8)'
    }}>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default FormContainer;
