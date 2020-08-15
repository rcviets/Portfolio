import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Camion from "../../images/camion.png"
import "./style.css"

const JobCard = () => {
    return (
<Card className="current-card" style={{ width: '12rem' }}>
  <Card.Img variant="top" src={Camion} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some 
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    )
}

export default JobCard;