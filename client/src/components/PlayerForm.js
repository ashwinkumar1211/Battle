import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const PlayerForm = ({ children }) => {
  return (
    <Container>
      <Row className='justify-content-md-center'>
        <Col xs={12} md={6}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default PlayerForm;
