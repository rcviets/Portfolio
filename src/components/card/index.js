import React from "react";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import "./style.css"

const JobCard = () => {
    return (
        <Card style={{ width: '18rem' }} className="current-project">
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default JobCard;