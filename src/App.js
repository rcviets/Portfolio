import React from "react";
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Avatar from "./components/avatar";
import JobCard from "./components/card";
import './App.css';

function App() {
  return (
      <Container fluid>
        <Row>
          <Col md={6}>
            <Avatar />
          </Col>
          <Col md={3}>
            <JobCard />
          </Col>
          <Row>
            <Col md={3}>
              <JobCard />
            </Col>
          </Row>
        </Row>
      </Container>
  );
}

export default App;
