import React, { Component, useState } from "react";
import axios from "axios";
import { Form, Button, Modal, Row, Col } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhone } from "react-icons/fa";
import image from "../../Images/contactbackground.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
const Contact = (isOpen) => {
  const [email, setEmail] = useState("");
  const [phone, setphone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [info, setinfo] = useState("");
  const [redirect, setRedirect] = useState(false);

  function refreshPage(){
    window.location.reload();
} 
  const submit = async (e) => {
    e.preventDefault()
    await fetch(' http://127.0.0.1:5000/maillist', {
        method: 'POST',
        headers: {  "Content-Type": "application/json" },
        body: JSON.stringify({

            "email": email,
            "firstname": firstName,
            "lastname": lastName,
           

        })
    });  


    setRedirect(true);
}
if (redirect) {

    return <Redirect to="contact" />;
}

  return (
    <div id="contact" style={{ height: "100vh" }}>
      
      <Form
        onSubmit={submit}
        style={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",alignContent:'center',
          background:'black',
          height: "100vh",
        }}
      >
        
        <Row className="mb-0" style={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",alignContent:'center',
          backgroundImage: `url(${image})`,
          height: "60vh",color:'white',width:'50vw'
        }} >
          <h1 style={{
          justifyContent: "center",fontFamily:'monospace',
          display: "flex",
          alignItems: "center",alignContent:'center'
        }} >CONTACT US</h1>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
            <Form.Label>
              First Name <BiUser />{" "}
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              Last Name <BiUser />{" "}
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Last Name"
              required
              onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              Email Address <HiOutlineMail />
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              Phone <FaPhone />{" "}
            </Form.Label>
            <Form.Control
              type="phone"
              placeholder="###-###-###"
              required
              onChange={(e) => setphone(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Additional Information</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              required
              onChange={(e) => setinfo(e.target.value)}
            />
          </Form.Group>
          <Button
          style={{width:'100px',marginLeft:'40px',marginTop:"100px",display:'inline-block'}}
            variant="primary"
            type="submit"
            value="Submit"
            onClick={refreshPage}
          >
            Submit
          </Button>
        </Row>

          
      </Form>
      
    </div>
  );
};

export default Contact;
