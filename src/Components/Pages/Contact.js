import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBInput,
} from "mdbreact";
import image1 from '../../Images/contactbackground.jpg'
import '../styled-components/contact.css'
import '@fortawesome/fontawesome-free/css/all.min.css'; 

const Contact = () => {
  return (

      <MDBRow id='contact' className="contactbackground" style={{justifyContent:'center',textAlign:'center',alignItems: 'center',display:'flex',backgroundImage:`url(${image1})`, color:'white'}}>
        <MDBCol md="4">
          <form >
            <p className="h5 text-center mb-4">Write to us</p>
            <div className="grey-text">
              <MDBInput
                label="Your name"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Subject"
                icon="tag"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                type="textarea"
                rows="2"
                label="Your message"
                icon="pencil-alt"
              />
            </div>
            <div className="text-center">
              <MDBBtn outline color="secondary" style={{color:'white',marginTop:'12px'}}>
                Send
                <MDBIcon far icon="paper-plane" className="ml-1" />
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>

  );
};

export default Contact;
