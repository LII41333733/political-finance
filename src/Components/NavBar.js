import Nav from 'react-bootstrap/Nav';
import React from "react";

export default function NavBar({ onSelect }) {
    return (
        <>
            <Nav
                className="d-flex justify-content-end pr-3"
                activeKey="home"
                onSelect={(route) => {
                    //route comes from 'eventKey'
                    onSelect({
                        page: route,
                        action: ""
                    })
                }}>
                <div className="navPill">
                    <Nav.Item>
                        <Nav.Link className="pt-1" eventKey={"home"}> Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="pt-1" eventKey={"books"}>Books</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="pt-1" eventKey="lessons">Lesson Plans</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="pt-1" eventKey="tools">Tools</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="pt-1" eventKey="blogs">Blogs</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="pt-1" eventKey="iaq">IAQs</Nav.Link>
                    </Nav.Item>
                </div>
            </Nav>
        </>
    )
}