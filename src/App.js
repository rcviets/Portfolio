import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Avatar from "./components/avatar";
import './App.css';

function App() {
  return (
    <div>
      <Row className="justify-content-md-left">
        <Col xs={12} sm={4} md={4}>
          <Avatar />
      </Col>
      </Row>
    </div >
  );
}

export default App;
