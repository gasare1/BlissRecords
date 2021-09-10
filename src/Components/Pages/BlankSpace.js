import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import { Home, Homelg } from '../styled-components/HomeCont'
import Image1 from '../../Images/goldbackground.jpg'

import { Container } from "react-bootstrap";
const Blank = () => {
  return (
    <Home style={{backgroundImage:{Image1} ,marginTop:'-14rem',height:'230px'}}>
      <Homelg >
      </Homelg >
    </Home>

  );
};

export default Blank;
