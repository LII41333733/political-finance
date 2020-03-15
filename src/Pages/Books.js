import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import JumboBooks from "../Components/Jumbotrons/JumboBooks";
import { useEffect, useState } from "react";

export default function Books({ action }) {
    const [showBookModal, toggleBookModal] = useState(false);
    const [showGalleryModal, toggleGalleryModal] = useState(false);
    const [whichBook, toggleWhichBook] = useState(-1);
    const [whichIndex, toggleWhichIndex] = useState(-1);
    useEffect(() => {
        if (action === "bookScroll")
            window.scrollTo({
                top: 1400,
                behavior: 'smooth'
            });
    });

    const RenderTOCImages = () => {
        const images = [];
        for (let i = 0; i < 8; i++) {
            images.push(
                <img
                    className="toc-image"
                    key={i}
                    src={`images/toc${i}.png`}
                    alt={`tocImage`}
                />
            )
        }
        return images;
    }

    const RenderGallery = (book) => {
        const isBook1 = book === 1;
        const cards = [];
        for (let i = 0; i < 10; i++) {
            cards.push(
                <Card
                    key={i}
                    id={i}
                    onClick={() => {
                        isBook1 ? toggleWhichBook(1) : toggleWhichBook(2);
                        toggleWhichIndex(i);
                        toggleGalleryModal(true);
                    }}
                    className="bg-dark text-white galleryCard cursor mr-2 mt-4">
                    <Card.Img
                        src={`images/${isBook1 ? "book1" : "book2"}/${i}.jpg`}
                        //src={`images/book2/${i}.jpg`}
                        src={`images/carousel/${i}.jpg`}
                        alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Text>
                            Nullification Crisis of 1832
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            )
        }
        return cards;

    }

    return (
        <div>
            <JumboBooks />
            <Container className="container-body booksContainer" style={{ marginBottom: "50px" }}>
                <Row style={{ justifyContent: "center" }}>
                    <Col>
                        <h2 className="header-sub">THE ART OF POLITICAL FINANCE</h2>
                        <h2 className="header-sub2">Volume I - Part I</h2>
                        <h2 className="header-main">THE COLONIAL ERA THROUGH RECONSTRUCTION</h2>
                        <img
                            className="cover-books"
                            src="images/book1/front1.jpg"
                            alt="cover"
                            onClick={() => toggleBookModal(true)}
                            height="450px"
                            width="310px" />
                        <img
                            className="cover-books"
                            src="images/book1/back.jpg"
                            alt="cover"
                            onClick={() => toggleBookModal(true)}
                            height="450px"
                            width="310px" />
                        <Button
                            className="d-block mx-auto mt-5 w-25" variant="outline-dark">Look Inside</Button>
                        <Button
                            className="d-block mx-auto mt-3 w-25 buyButton">Buy</Button>
                    </Col>
                </Row>
                <Row className="px-5">
                    <p
                        className="textBlock"
                        style={{ marginTop: "35px" }}><span className="big-W">P</span>art I leverages over 60 illustrations by artists and publishers like Frank Leslie and his Illustrated Newspaper, Thomas Nast and Harper’s Weekly, Currier &amp; Ives, Joseph Keppler and Puck Magazine, and others to guide you through this often uninspected history. The images are a tribute to the extremely talented artists and their adroit perception of the issues. The book contains many accompanying summaries which in many cases are just as important as the surrounding text to help us understand the setting.</p>
                </Row>
                <RenderGallery book={1} />
                <i class="fas fa-plus-circle d-block mt-2"></i>
                <hr className="hr0 my-5" />
                <Row style={{ justifyContent: "center" }}>
                    <Col>
                        <h2 className="header-sub">THE ART OF POLITICAL FINANCE</h2>
                        <h2 className="header-sub2">Volume I - Part II</h2>
                        <h2 className="header-main">THE GUILDED AGE</h2>
                        <img
                            className="cover-books"
                            src="images/book2/front1.jpg"
                            alt="cover"
                            height="450px"
                            width="310px" />
                        <img
                            className="cover-books"
                            src="images/book1/back.jpg"
                            alt="cover"
                            height="450px"
                            width="310px" />
                        <Button
                            className="d-block mx-auto mt-5 w-25" variant="outline-dark">Look Inside!</Button>
                        <Button
                            className="d-block mx-auto mt-3 w-25 buyButton">Buy</Button>
                    </Col>
                </Row>
                <Row className="px-5">
                    <p
                        className="textBlock" style={{ marginTop: "35px" }}><span className="big-W">P</span>art II also looks at over 90 illustrations as political cartooning became more popular and more prevalent. In addition to the artists who were showcased in Part I, several more added to this Gilded Age rendition. Names like William A. Rogers, Bernhard and Victor Gillam, Frederick Opper, Grant Hamilton, Louis Dalrymple, Watson Heston, and others joined the list of artists as magazines like Judge and The Truth Seeker augmented the humor and illustrated publications of the period.</p>
                </Row>
                <RenderGallery book={2} />
                <i class="fas fa-plus-circle d-block mt-2"></i>
            </Container>
            <Modal
                show={showBookModal}
                onHide={() => toggleBookModal(false)}
                size={"lg"}>
                <Modal.Body>
                    <RenderTOCImages />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => toggleBookModal(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal
                show={showGalleryModal}
                onHide={() => toggleGalleryModal(false)}
                size={"lg"}>
                <Modal.Body>
                    <img className="w-100" src={`images/carousel/${whichIndex}.jpg`} />
                    {/* <img className="w-100" src={`images/book${whichBook}/${whichIndex}.jpg`} /> */}
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={() => toggleGalleryModal(false)}>
                        Close
                    </Button>
                </Modal.Footer> */}
            </Modal>
        </div>
    )
}