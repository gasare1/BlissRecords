import React from 'react'
import { Home, Background } from '../styled-components/HomeCont'
import { Card, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../../Images/goldenrecord.jpg'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
function HomepageCont() {
    return (
        <Home>

            <Card style={{ width: '100%', marginLeft: '10rem', height: '100%', marginTop: '100px', marginRight: '100px', marginLeft: '100px', justifyContent: 'left', alignItems: 'left', display: 'flex',flexDirection: 'row' }}>
                <Card.Body>
                    <MDBCard style={{ maxWidth: '22rem' }}>
                        <MDBCardImage src='https://mdbcdn.b-cdn.net/img/new/standard/nature/184.jpg' position='top' alt='...' />
                        <MDBCardBody>
                            <MDBCardTitle>Card title</MDBCardTitle>
                            <MDBCardText>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </MDBCardText>
                            <MDBBtn href='#'>Button</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </Card.Body>
                <Card.Body >
                    <MDBCard style={{ maxWidth: '22rem' }}>
                        <MDBCardImage src='https://mdbcdn.b-cdn.net/img/new/standard/nature/184.jpg' position='top' alt='...' />
                        <MDBCardBody>
                            <MDBCardTitle>Card title</MDBCardTitle>
                            <MDBCardText>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </MDBCardText>
                            <MDBBtn href='#'>Button</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </Card.Body>
                <Card.Body >
                    <MDBCard style={{ maxWidth: '22rem' }}>
                        <MDBCardImage src='https://mdbcdn.b-cdn.net/img/new/standard/nature/184.jpg' position='top' alt='...' />
                        <MDBCardBody>
                            <MDBCardTitle>Card title</MDBCardTitle>
                            <MDBCardText>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </MDBCardText>
                            <MDBBtn href='#'>Button</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </Card.Body>
                <Card.Body >
                    <MDBCard style={{ maxWidth: '22rem' }}>
                        <MDBCardImage src='https://mdbcdn.b-cdn.net/img/new/standard/nature/184.jpg' position='top' alt='...' />
                        <MDBCardBody>
                            <MDBCardTitle>Card title</MDBCardTitle>
                            <MDBCardText>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </MDBCardText>
                            <MDBBtn href='#'>Button</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </Card.Body>
            </Card>

        </Home>
    )
}

export default HomepageCont
