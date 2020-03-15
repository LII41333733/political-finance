import React, { useState } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'
import JumboLessons from "../Components/Jumbotrons/JumboLessons";

// header 615x250
export default function Lessons() {
    const [lessonPlanIndex, toggleLessonPlanIndex] = useState(-1);
    const lessonPlans = [{}, {
        title: "Money, Taxation, and Precursors to Revolution",
        price: 0,
        href: "images/pdf0.pdf",
        linkName: "images/placeholders/lessons/0.jpg",
        altText: ""
    },
    {
        title: "The “Berth” of Public Debt",
        price: 2.99,
        href: "images/Debt.zip",
        linkName: "images/placeholders/lessons/1.jpg",
        altText: ""
    },
    {
        title: "Bank of North America",
        price: 2.99,
        href: "images/Debt.zip",
        linkName: "images/placeholders/lessons/2.jpg",
        altText: ""
    }];

    const RenderLessonPlanCards = ({ lessonPlans }) => {
        const cards = [];
        for (let i = 1; i < 4; i++) {
            // for (let i = 1; i < lessonPlans.length; i++) {
            console.log(lessonPlans)
            console.log(i)
            const { linkName, title, altText, href, price } = lessonPlans[i];
            cards.push(
                <>
                    <div className="row mb-4">
                        <div className="column">
                            <img
                                className="lessonImage"
                                src={linkName}
                                // src={`images/lessons/${i}/thumb.jpg`}
                                alt={altText} />
                        </div>
                        <div className="column">
                            <Card
                                key={i}
                                border={"dark"}
                                className={"lessonCard ml-3"}>
                                <Card.Header><h5 className="mt-2">{title}</h5></Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, quodsi copiosae in sit, minimum antiopam quaerendum eos te.
                            </Card.Text>
                                    <Button
                                        className="lessonButton"
                                        href={href}
                                        size="sm"
                                        download={title}
                                        variant="dark">
                                        {price === 0 ? "Free" : `$${price}`}
                                    </Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </>
            )
        }
        return cards;
    }

    return (
        <div>
            <JumboLessons />
            <Container
                className="container-body"
                style={{ marginBottom: "50px" }}>

                <CardDeck
                    className="justify-content-center">
                    <RenderLessonPlanCards
                        lessonPlans={lessonPlans}
                    />
                </CardDeck>
            </Container>
        </div >
    )
}