import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import JumboBlogs from "../Components/Jumbotrons/JumboBlogs";


export default function Blogs() {
    return (
        <div>
            <JumboBlogs />
            <Container className="container-body" style={{ marginBottom: "50px" }}>
                <Row style={{ justifyContent: "center" }}>
                    <Col style={{ maxWidth: "500px" }}>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}