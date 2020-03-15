import React, { useState } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Foot() {
 const [email, changeEmail] = useState("");
 return (
  <>
   <Jumbotron fluid className="footer">
    <Row className="row h-100">
     <Col className="my-auto">
      <h5>Home</h5>
      <h5>Books</h5>
      <h5>Lesson Plans</h5>
     </Col>
     <Col className="my-auto">
      <h5>Tools</h5>
      <h5>Blogs</h5>
      <h5>IAQs</h5>
     </Col>
     <Col className="my-auto">
      <h5>Legal</h5>
      <ul>
       <li>Terms & Conditions</li>
       <li>Privacy Policy</li>
       <li>Terms of use</li>
      </ul>
     </Col>
     <Col className="my-auto">
      <h5>Subscribe to my newsletter</h5>
      <input onChange={(e) => changeEmail(e.target.value)} name="subscribeEmail" placeholder="example@myemail.com" value={email} /><i className="fa far fa-check-square"></i>
      <p style={{ marginTop: "40px" }}>Copyright &copy;2020</p>
     </Col>
    </Row>
   </Jumbotron>
  </>
 )
}


