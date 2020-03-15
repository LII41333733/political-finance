import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import JumboHomepage from "../Components/Jumbotrons/JumboHomepage";


export const ControlledCarousel = () => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    };

    return (
        <Carousel
            activeIndex={index}
            direction={direction}
            onSelect={handleSelect}
            interval={3500}
        >
            <Carousel.Item>
                <img
                    src={`images/carousel/0.jpg`}
                    className="d-block cImage"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={`images/carousel/1.jpg`}
                    className="d-block cImage"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={`images/carousel/2.jpg`}
                    className="d-block cImage"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={`images/carousel/3.jpg`}
                    className="d-block cImage"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={`images/carousel/4.jpg`}
                    className="d-block cImage"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={`images/carousel/5.jpg`}
                    className="d-block cImage"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={`images/carousel/6.jpg`}
                    className="d-block cImage"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={`images/carousel/7.jpg`}
                    className="d-block cImage"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={`images/carousel/8.jpg`}
                    className="d-block cImage"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default function Homepage({ changeRoute }) {
    return (
        <>
            <JumboHomepage changeRoute={changeRoute} />
            <Container style={{ marginBottom: "50px" }}>
                <Row className="mt-5">
                    <Col
                        lg={7}
                        className="my-auto">
                        <p
                            style={{ marginTop: "20px", marginRight: "-5px" }}
                            className="textBlock"
                        ><span className="big-W">W</span>
                            ith the fallout of 2008 and the current structure of the financial system under scrutiny by people the world over, scores of books, documentaries, and videos were produced to explain what happened and what our future holds. Specifically, in the United States, inflation and debt, the profits of which are reaped at the highest concentrated levels, are in question. But in order to understand the complexity of the 21st-century political economy, the domestic divisions, and the possible outcomes, like any study, it must be done at the beginning, and at the elementary level.</p>

                    </Col>
                    <Col lg={5} className="mt-n3">
                        <ControlledCarousel />
                    </Col>
                </Row>
                <Row className="mt-1">
                    <Col>
                        <p
                            className="textBlock"
                            style={{ marginTop: "10px" }}>Parts I and II of <em>The Art of Political Finance</em> confront economic philosophy touching on the differences, similarities, and conflicts between Thomas Jefferson and Alexander Hamilton, Andrew Jackson and Nicholas Biddle, and to the lesser-known ideas of Peter Cooper that often opposed financial officiating by John Sherman and his colleagues. As “capitalism” and wealth were used to apologize for transgressions against the natural laws of supply and demand and humanity, the people of the United States ceded not only to the potential of prosperity but to the peace that goes along with it. The books also analyze root causes and patterns in the commercial and banking arenas known as panics and depressions. These events, which are euphemized as business cycles, greatly affect the human experience and still require a resilient population to absorb.</p>
                    </Col>
                </Row>
                {/* <hr className="hr0" /> */}
                { /*<Row>
                     <h2 className="author">About the Author</h2>
                    <Col className="my-auto">
                        <img className="profile" src="images/wentz.png"></img>
                    </Col>
                    <Col className="my-auto">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>
                    </Col>
    </Row> */ }
            </Container>
        </>
    )
}