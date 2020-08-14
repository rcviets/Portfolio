import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import CurrentJobCard from "../currentCard";
import JobCard from "../card";

const CardContainer = () => {
    return (
        <div>
            <Container>
                <Row> 
                    {
                        //First Row
                    }
                    <Col md={12}>
                        <CurrentJobCard />
                    </Col>
                </Row>
                    {
                        //Second Row
                    }
                <Row>
                    <Col md={4}>
                        <JobCard />
                    </Col>
                    <Col md={{ span: 3, offset: 4 }}>
                        <JobCard />
                    </Col>
                </Row>
                    {
                        //Third Row
                    }
                <Row>
                    <Col md={{ span: 3, offset: 3 }}>
                        <JobCard />
                    </Col>
                    <Col md={{ span: 3, offset: 3 }}>
                        <JobCard />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CardContainer;