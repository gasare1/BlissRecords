import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "gray", textAlign: "center", marginTop: "-50px" }}>
        Bliss Records Entertainment
      </h1>
      <hr/>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Music</FooterLink>
            <FooterLink href="#">Entertainment</FooterLink>
            <FooterLink href="#">Records</FooterLink>
            <FooterLink href="#">Promotions</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Jones Sarfo</FooterLink>
            <FooterLink href="#"></FooterLink>
            <FooterLink href="#"></FooterLink>
            <FooterLink href="#"></FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>Twitter</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>Youtube</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
        <hr/>
        <div class="copyright text-center" style={{ color: "white" }}>
          {" "}
          <span>Copyright &copy; 2021 </span> <span>Bliss Records</span>{" "}
        </div>
        <hr/>
        <div style={{ flexDirection: "row", margin: "20px",justifyContent:'center',alignContent:'center',display:'flex' }}>
          <a
            href="#"
            style={{ margin: "20px", textDecoration: "none", color: "gray" }}
          >
            {" "}
            Privacy Policy
          </a>
          <a
            href="#"
            style={{ margin: "20px", textDecoration: "none", color: "gray" }}
          >
            {" "}
            Terms of Use
          </a>
          <a
            href="#"
            style={{ margin: "20px", textDecoration: "none", color: "gray" }}
          >
            {" "}
            Cookies Policy
          </a>
          <a
            href="#"
            style={{ margin: "20px", textDecoration: "none", color: "gray" }}
          >
            {" "}
            Press
          </a>
        </div>
      </Container>
    </Box>
  );
};
export default Footer;
