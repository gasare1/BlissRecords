import styled from "styled-components";
import image1 from '../../Images/logo2.png'
import { Link } from 'react-router-dom'


export const Navbar = styled.div`
height:90px;
position: sticky;
top: 10; // or whatever you have
z-index: 1;

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
`

export const NavMenu = styled.div`
margin-top:40px;

`
export const NavItem = styled.ul`
justify-content:center;
align-items:center;
display:flex;



`
export const NavLinks = styled.div`
text-decoration:none;
margin:0px;
font-size:20px;
font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
color:white;


@media (max-width: 768px) {
    display:none;
  }
`