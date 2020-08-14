import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Avatar from "./components/avatar";
import CardContainer from "./components/cardContainer";
import './App.css';

function App() {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <Avatar />
        </Col>
        <Col md={6}>
          <CardContainer/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
