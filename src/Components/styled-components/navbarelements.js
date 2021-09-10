import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaTimes} from 'react-icons/fa'
import { CgMenuLeft } from 'react-icons/cg'
const heightOfMenu = "500px"

export const NavItem = styled.ul`
color:#fff;
text-align:right;
float:right;
margin:1px;

`
export const NavLink = styled.div`
color:#000;
float:right;
cursor: pointer;
text-decoration:none;
padding-bottom:30px;
font-family: 'Mukta', sans-serif;;
font-size:20px;
justify-content:space-between;
position: sticky;

&:hover{color:#fff}

@media screen and (max-width:1024px){
    display:none;
    
}


`
export const Navbar = styled.div`

position: -webkit-sticky;
position:sticky;
top:0;
z-index:5;
margin-bottom:-10rem;

@media screen and (max-width:1024px){
  width:100%
  
}
&.active {
    background:#000;
  }

`
export const Nav = styled.div`
height:20px;
display:flex;
align-items:center;
justify-content:center;

`
export const NavbarBrand = styled.div`
margin-left:80px;
justify-content:center;
cursor: pointer;
font-family: 'Caveat', cursive;
font-weight:bold;
font-size:20px;
margin-bottom:-6rem;
z-index:-99;
@media screen and (max-width:1024px){
   align-items: center;
   justify-content:center;
   display:flex;
   padding-top:20px;
   margin-bottom:-5rem;
}

`
export const Collapse = styled.div`

`
export const IconButton = styled(Link)`

`
export const MainFooter = styled.div`
 position:static;
   left: 0;
   bottom: 0;
   width: 100%;
   background-color: #000;
   color: white;
   text-align: center;
   height:100%;
`
export const Wrapper = styled.div`
margin-top:200px;
padding-top:50px;
position:relative;
overflow:hidden;
z-index:1;
width:500px;
height:500px;
background:#fff;
border-radius:20px;
margin-bottom:20rem;
display:none;

transform:
   translateY(
      ${p => p.isOpen ? 0 : `-${heightOfMenu}`}
   );
   transition: transform 0.45s;
@media screen and (max-width:1024px){
   display:inline;

}
`
export const Burger = styled.button`

color:
   ${p => p.isOpen ? 'black' : 'black'};


`
export const BurgerIcon = styled.div`
position:absolute;
z-index:1;
float:right;
padding-bottom:30px;
cursor: pointer;
font-size:1.4rem;
display:none;
color:#fff;

transform:
   translateY(
   ${p => p.isOpen ? `${CgMenuLeft}` : `${FaTimes}`}
   );
   transition: transform 0.45s;

@media screen and (max-width:1024px){
   display:inline;
   padding-bottom:80px;
}
`
export const Content = styled.div`

transform:
   translateY(
      ${p => p.isOpen ? 0 : `-${heightOfMenu}`}
   );
   transition: transform 0.45s;
   
`

export const Menu = styled.div`
margin:20px;
display:flex;
flex-direction:column;
background-color:rgba(0, 0, 0, 0.822);
border-bottom-left-radius:80px;
border-bottom-right-radius:80px;
height:100% ;
color:white;
margin-bottom:-99px;
`
export const MenuButton = styled(Link)`
display:flex;
justify-content:center;
align-items:center;
margin:20px;
color:white;

`
export const Container = styled.div`

`