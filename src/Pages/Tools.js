import React, { useState } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import JumboTools from "../Components/Jumbotrons/JumboTools";

export const RenderToolCards = () => {
    const cards = [{
        title: "Timelines",
        text: "Lorem ipsum dolor sit amet, quodsi copiosae in sit, minimum antiopam quaerendum eos te.",
        src: "images/placeholders/tools/thumb.png"
    }, {
        title: "Glossary",
        text: "Lorem ipsum dolor sit amet, quodsi copiosae in sit, minimum antiopam quaerendum eos te.",
        src: "images/placeholders/tools/thumb.png"
    }, {
        title: "Transactional Analysis Model",
        text: "Lorem ipsum dolor sit amet, quodsi copiosae in sit, minimum antiopam quaerendum eos te.",
        src: "images/placeholders/tools/thumb.png"
    }, {
        title: "Bloom's Taxonomy",
        text: "Lorem ipsum dolor sit amet, quodsi copiosae in sit, minimum antiopam quaerendum eos te.",
        src: "images/placeholders/tools/thumb.png"
    }];
    {/* <Card.Img variant="top" src="images/tools/thumbs/0.png" /> */ }
    return (
        cards.map(({ title, text, src }) => {
            return (
                <Col className="p-0">
                    <Card
                        border={"dark"}
                        className={"toolCard p-0 d-inline-block"}>
                        <Card.Img variant="top" src={src} />
                        <Card.Body className="p-0 pb-2">
                            <Card.Header><h5>{title}</h5></Card.Header>
                            <Card.Text>{text}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            );
        })
    )
}

export default function Tools() {
    const [tool, setTool] = useState("");
    const noTool = tool === "";
    const timelines = tool === "timelines";
    const glossary = tool === "glossary";
    const tam = tool === "tam";
    const blooms = tool === "blooms";
    return (
        <div>
            <JumboTools />
            <Container className="shortDownSpacer container-body">
                {noTool &&
                    <Row>
                        <RenderToolCards />
                    </Row>
                }
                {timelines &&
                    <Row>
                        <Col>
                            <img className="w-90 mb-5 timeline" src="images/timelines/timeline-civilWar.jpg" alt="timeline-civilWar" />
                            <img className="w-90 mb-2 timeline" src="images/timelines/timeline-reconstruction.jpg" alt="timeline-reconstruction" />
                        </Col>
                    </Row>
                }
                {/* {glossary &&}
                {tam &&}
                {blooms &&} */}
            </Container>
        </div >
    )
}