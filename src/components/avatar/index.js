import React from "react";
import Image from "react-bootstrap/Image";
import Hero from "../../images/avatar.png"
import { Container } from "react-bootstrap";
import "./style.css";

const Avatar = () => {
    return (
            <Container fixed="bottom">
                <Image src={Hero} />
            </Container>
    )
}

export default Avatar;