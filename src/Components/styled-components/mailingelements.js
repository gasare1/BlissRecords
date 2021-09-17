import styled from "styled-components";
import image from '../../Images/mailist.jpg'


export const MailingHP = styled.div`
background-image:url(${image});
background-position:center;
background-size: cover;
background-repeat: no-repeat;
width: 100vw;
height: 100vh;
object-fit: cover;
`
export const MailText = styled.h1`
color:white;
font-family: 'Source Code Pro', monospace;
justify-content:center;
text-align:center;
margin-bottom:10rem;
position: relative;
font-weight:bold
`