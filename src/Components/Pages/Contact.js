import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';


class Contact extends Component {




    render() {
        return (

            <div style={{ boxShadow: "0px -15px 10px -15px #fff" }}>
                <MDBRow style={{ justifyContent: 'center', background:'black', color: 'white', }}>
                    <MDBCol md="6">
                        <form>
                            <p className="h5 text-center mb-4">Write to us</p>
                            <div className="grey-text">
                                <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
                                    success="right" />
                                <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
                                    success="right" />
                                <MDBInput label="Subject" icon="tag" group type="text" validate error="wrong" success="right" />
                                <MDBInput type="textarea" rows="2" label="Your message" icon="pencil-alt" />
                            </div>
                            <div className="text-center">
                                <MDBBtn outline color="secondary" style={{color:'white'}}>
                                    Send
                                    <MDBIcon far icon="paper-plane" className="ml-1" />
                                </MDBBtn>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </div>


        );
    }
}

export default Contact;