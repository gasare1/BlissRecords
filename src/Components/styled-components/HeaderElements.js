import styled from "styled-components";
import image1 from '../../Images/logo2.png'
import { Link } from 'react-router-dom'


export const Navbar = styled.div`
height:90px;
position: sticky;
top: 10; // or whatever you have
z-index: 1;
@media (max-width: 1480px) {
    max-width:2100px;
  
  }

`
export const NavLogo = styled.div`
background-image:url(${image1});
width:  100px;
height: 50px;
background-position: 50% 50%;
background-repeat:   no-repeat;
background-size:     cover;
margin-left: 45rem;
margin-top:50px;
cursor: pointer;
@media (max-width: 1080px) {
    justify-content:center;
    text-align:center;
    display:flex;
    margin:auto;
    margin-top:15%;
  }
  @media (max-width: 1480px) {
    margin-left:70px;
    margin-top:60px;
  
  }
`

export const NavMenu = styled.div`
margin-top:40px;

`
export const NavItem = styled.ul`
justify-content:center;
align-items:center;
display:flex;
@media (max-width: 1480px) {
    max-width:900px;
    margin-left:200px;
  
  }



`
export const NavLinks = styled.div`
margin-left:50px;
text-decoration:none;
margin:0px;
font-size:20px;
font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
color:white;


@media (max-width: 768px) {
    display:none;
  }
`