import React, { useState, useRef, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { Navbar, NavLogo, NavItem, NavMenu, NavLinks } from '../styled-components/HeaderElements'
import { HomeBg } from '../styled-components/HomePageElements'
import { AiFillFacebook, AiOutlineInstagram } from 'react-icons/ai'
import { GrTwitter } from 'react-icons/gr'
import {
    NavLink, Nav, NavbarBrand, Collapse,
    NavbarToggler, Wrapper, Burger, Content, Menu, MenuButton, BurgerIcon
} from '../styled-components/navbarelements'
import { RiMenuFoldLine } from 'react-icons/ri'
import '../styled-components/NavbarBtn.scss'
import { Link } from 'react-scroll'
import { BsHouseDoorFill, BsFillQuestionCircleFill, BsSearch } from 'react-icons/bs'
import { GiHouse, GiReceiveMoney } from 'react-icons/gi'
import { MdEmail } from 'react-icons/md'
import { BiLogInCircle } from 'react-icons/bi'
import { CgMenuLeft, CgMenuRight } from 'react-icons/cg'
import { FaTimes } from 'react-icons/fa'
import{Link as SocalLink} from 'react-router-dom'
function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const [isLoginOpen, setIsLoginOpen] = React.useState(false);
    const [isRegisterOpen, setRegisterOpen] = React.useState(false);

    const [navBackground, setNavBackground] = useState(false)
    const navRef = useRef()
    navRef.current = navBackground
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 100
            if (navRef.current !== show) {
                setNavBackground(show)
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const showModal = () => {
        setIsLoginOpen(true);
        setRegisterOpen(false);
    };
    return (
        <>
            <Navbar expand="sm" fixed="top" style={{ transition: '1s ease', backgroundColor: navBackground ? 'black' : 'transparent', position: '-webkit-sticky', position: 'sticky', top: '0' }}>

                <Collapse isOpen={isOpen} navbar>

                    <CgMenuRight className='nav-toggler' onClick={toggle} />
                    <NavItem>
                        <Container><NavLogo /></Container>
                        <NavMenu>
                            <NavLinks>
                                <div class="container">
                                    <div class="btn">
                                        <span style={{ color: 'white' }}>Home</span>
                                    </div>
                                </div>
                            </NavLinks>
                        </NavMenu>
                        <NavMenu>
                            <NavLinks>
                                <div class="container">
                                    <div class="btn">
                                        <span style={{ color: 'white' }}>News</span>
                                    </div>
                                </div>
                            </NavLinks>
                        </NavMenu>
                        <NavMenu>
                            <NavLinks >
                                <div class="container">
                                    <div class="btn">
                                        <Link to='contact'><span to='contact' style={{ color: 'white' }}>Contact</span></Link>
                                    </div>
                                </div>
                            </NavLinks>
                        </NavMenu>
                        <NavMenu>
                            <NavLinks>
                                <div class="container">
                                    <div class="btn">

                                        <SocalLink to='https://facebook.com'> <a  target="_blank" href="https://valleycasa.com/preferred-lenders/" style={{ color: 'white' }}><AiFillFacebook /></a></SocalLink>

                                    </div>
                                </div>
                            </NavLinks>
                        </NavMenu>
                        <NavMenu>
                            <NavLinks>
                                <div class="container">
                                    <div class="btn">
                                        <a href="https://mobile.twitter.com/home" class="pull-left">
                                            <span style={{ color: 'white' }}><GrTwitter /></span>
                                        </a>
                                    </div>

                                </div>
                            </NavLinks>
                        </NavMenu>
                        <NavMenu>
                            <NavLinks>
                                <div class="container">
                                    <div class="btn">
                                        <a href="https://www.instagram.com/" class="pull-left">
                                            <span style={{ color: 'white' }}><AiOutlineInstagram /></span>
                                        </a>
                                    </div>
                                </div>
                            </NavLinks>
                        </NavMenu>
                    </NavItem>
                    <Wrapper isOpen={isOpen} >
                        <Content isOpen={isOpen}>
                            <Menu >
                                <BurgerIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
                                    < FaTimes  > {isOpen ? "menu_open" : "menu"}</ FaTimes >
                                </BurgerIcon>
                                <MenuButton  ><Link to='home' style={{ textDecoration: 'none', color: '#fff', margin: '20px' }} ><GiHouse /> Home</Link></MenuButton>
                                <MenuButton ><Link to='contact' style={{ textDecoration: 'none', color: '#fff' }}> <MdEmail /> Contact Us</Link></MenuButton>
                                <MenuButton  ><Link to='about' spy={true} style={{ textDecoration: 'none', color: '#fff' }}><BsFillQuestionCircleFill />About</Link></MenuButton>
                                <MenuButton ><Link to='about' spy={true} style={{ textDecoration: 'none', ccolor: '#fff' }}><BsSearch />Search</Link></MenuButton>


                            </Menu>
                        </Content>
                    </Wrapper>
                </Collapse>
            </Navbar>
        </>

    )
}

export default Header
