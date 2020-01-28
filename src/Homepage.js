import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            route: "homepage",
            subscribeEmail: ""
        }
    }

    onChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <Container>
                    <Nav className="justify-content-end" activeKey="/home">
                        <Nav.Item>
                            <Nav.Link href="/home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">Books</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Lesson Plans</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-3">Tools</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-4">Blogs</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-5">IAQs</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
                <Jumbotron fluid className="header">
                    <Container>
                        <Row className="row row0 h-100">
                            <Col lg={5}>
                                <img className="cover" src="cover.png"></img>
                            </Col>
                            <Col lg={7} className="my-auto">
                                <h1>More of the mosaic...</h1>
                                <h2>less of the confusion</h2>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
                <Container style={{ marginBottom: "50px" }}>
                    <Row className="row row1 h-100">
                        <Col lg={7} className="my-auto">
                            <p style={{ marginTop: "10px" }}><span className="big-W">W</span>ith the fallout of 2008 and the current structure of the financial system under scrutiny by people the world over,
scores of books, documentaries, and videos were
produced to explain what happened and what our future holds.
Specifically, in the United States, inflation and debt, the profits of
which are reaped at the highest concentrated levels, are in
question. But in order to understand the complexity of the 21st
century political economy, the domestic divisions, and the
possible outcomes, like any study, it must be done at the
beginning, and at the elementary level.</p>
                            <p>Volume I of “The Art of Political Finance” is a macro-economic
primer and orientation to the political and financial history of the
United States from the Colonial Era through the Gilded Age
showing the manipulation of money as the main arbitrary
mechanism to control humanity. The work reveals trends through
the history of money, banking, party politics, and industrial
dominance that consolidated capital and concentrated power.
Without an understanding of the events of the 19th century, the
major backdrop of this book, we cannot fully understand the
United States in its current form considering the residual cultural
and economic values and systems that perdure.</p>
                        </Col>
                        <Col lg={5}>
                            <img className="back" src="back.png"></img>
                        </Col>
                    </Row>
                </Container>
                <Container style={{ marginBottom: "75px" }}>
                    <Row className="row row2 h-100">
                        <Col lg={6}>
                            <div style={{ position: "relative", height: "540px", width: "auto" }}>
                                <img className="img0" src="img0.png"></img>
                                <img className="img1" src="img1.png"></img>
                            </div>
                        </Col>
                        <Col lg={6} className="my-auto">
                            <p style={{ marginTop: "10px" }}>The book confronts economic philosophy touching
on the differences, similarities, and conflicts
between Thomas Jefferson and Alexander
Hamilton, Andrew Jackson and Nicholas Biddle,
and to the lesser-known ideas of Peter Cooper
that often opposed financial officiating by John
Sherman and his colleagues. As “capitalism” and
wealth were used to apologize for transgressions
against humanity, the people of the United States
ceded not only to potentials of wealth but the
peace that goes along with prosperity. It also
exposes root causes and patterns in the
commercial and banking arenas known as panics
and depressions. These events, which are
euphemized as business cycles, greatly affect the
human experience and still require a resilient
population to absorb.</p>
                            <p>As the velocity of money encompassed the
country, it also engulfed the political parties; the
“evolution” of which is covered tangentially,
showing the formation of a more homogenous
central authority that obfuscated issues and
usurped both democratic participation and
republican establishment.</p>
                        </Col>
                    </Row>
                </Container>
                <hr className="hr0" />
                <hr className="hr1" />
                <Container>
                    <h2 className="author">About the Author</h2>
                    <Row className="row row3 h-100">
                        <Col className="my-auto">
                            <img className="profile" src="wentz.png"></img>
                        </Col>
                        <Col className="my-auto">
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>
                        </Col>
                    </Row>
                </Container>
                <Jumbotron fluid className="footer">
                    <Row className="row h-100">
                        <Col className="my-auto">
                            <h4>Home</h4>
                            <h4>Books</h4>
                            <h4>Lesson Plans</h4>
                        </Col>
                        <Col className="my-auto">
                            <h4>Tools</h4>
                            <h4>Blogs</h4>
                            <h4>IAQs</h4>
                        </Col>
                        <Col className="my-auto">
                            <h4>Legal</h4>
                            <ul>
                                <li>Terms & Conditions</li>
                                <li>Privacy Policy</li>
                                <li>Terms of use</li>
                            </ul>
                        </Col>
                        <Col className="my-auto">
                            <h4>Subscribe to my newsletter</h4>
                            <input onChange={this.onChange} name="subscribeEmail" placeholder="example@myemail.com" value={this.state.subscribeEmail} /><i class="fa far fa-check-square"></i>
                            <p style={{ marginTop: "40px" }}>Copyright &copy;2020</p>
                        </Col>
                    </Row>
                </Jumbotron>

            </div>
        )
    }

}

export default Homepage;