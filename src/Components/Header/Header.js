import React from 'react'
import { Container } from 'react-bootstrap'
import { Navbar, NavLogo, NavItem, NavMenu, NavLinks } from '../styled-components/HeaderElements'
import { HomeBg } from '../styled-components/HomePageElements'
import '../styled-components/NavbarBtn.scss'
function Header() {
    return (
        <>
            <Navbar>

                <NavItem>
                    <Container><NavLogo /></Container>
                    <NavMenu>
                        <NavLinks>
                            <div class="container">
                                <div class="btn">
                                    <span style={{color:'white'}}>Home</span>
                                </div>
                            </div>
                        </NavLinks>
                    </NavMenu>
                    <NavMenu>
                        <NavLinks>
                             <div class="container">
                                <div class="btn">
                                    <span style={{color:'white'}}>About</span>
                                </div>
                            </div>
                        </NavLinks>
                    </NavMenu>
                    <NavMenu>
                        <NavLinks>
                             <div class="container">
                                <div class="btn">
                                    <span style={{color:'white'}}>Contact</span>
                                </div>
                            </div>
                        </NavLinks>
                    </NavMenu>
                </NavItem>
            </Navbar>
        </>

    )
}

export default Header
