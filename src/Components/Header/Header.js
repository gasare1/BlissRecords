import React, { useState, useRef, useEffect } from "react";
import { Container } from "react-bootstrap";
import {
  Navbar,
  NavLogo,
  NavItem,
  NavMenu,
  NavLinks,
} from "../styled-components/HeaderElements";
import { HomeBg } from "../styled-components/HomePageElements";
import { AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";
import { GrTwitter } from "react-icons/gr";
import {
  NavLink,
  Nav,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Wrapper,
  Burger,
  Content,
  Menu,
  MenuButton,
  BurgerIcon,
} from "../styled-components/navbarelements";
import { RiMenuFoldLine } from "react-icons/ri";
import "../styled-components/NavbarBtn.scss";
import { Link } from "react-scroll";
import {
  BsHouseDoorFill,
  BsFillQuestionCircleFill,
  BsSearch,
} from "react-icons/bs";
import { GiHouse, GiReceiveMoney } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { BiLogInCircle } from "react-icons/bi";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";
import { FaTimes } from "react-icons/fa";
import { Link as SocalLink } from "react-router-dom";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [isLoginOpen, setIsLoginOpen] = React.useState(false);
  const [isRegisterOpen, setRegisterOpen] = React.useState(false);

  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 100;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const showModal = () => {
    setIsLoginOpen(true);
    setRegisterOpen(false);
  };
  return (
    <>
      <Navbar
        expand="sm"
        fixed="top"
        style={{
          transition: "1s ease",
          backgroundColor: navBackground ? "black" : "transparent",
          position: "-webkit-sticky",
          position: "sticky",
          top: "0",
        }}
      >
        <Collapse isOpen={isOpen} navbar>
          <CgMenuRight className="nav-toggler" onClick={toggle} />
          <NavLogo />
          <NavItem>
            <Container>
              
            </Container>
            
            <NavMenu>
                
              <NavLinks>
                <div class="container">
                  <Link to="home">
                    <div class="btn">
                      <span style={{ color: "white", fontSize: "12px" }}>
                        Home
                      </span>
                    </div>
                  </Link>
                </div>
              </NavLinks>
            </NavMenu>
            <NavMenu>
              <NavLinks>
                <div class="container">
                  <Link to="news">
                    <div class="btn">
                      <span style={{ color: "white", fontSize: "12px" }}>
                        News
                      </span>
                    </div>
                  </Link>
                </div>
              </NavLinks>
            </NavMenu>
            <NavMenu>
              <NavLinks>
                <div class="container">
                  <Link to="contact">
                    <div class="btn">
                      <span
                        to="contact"
                        style={{ color: "white", fontSize: "12px" }}
                      >
                        Contact
                      </span>
                    </div>
                  </Link>
                </div>
              </NavLinks>
            </NavMenu>
            <NavMenu>
              <NavLinks>
                <div class="container">
                  <Link to="maillist">
                    <div class="btn">
                      <span
                        to="maillist"
                        style={{ color: "white", fontSize: "12px" }}
                      >
                        SignUp
                      </span>
                    </div>
                  </Link>
                </div>
              </NavLinks>
            </NavMenu>
            <NavMenu>
              <NavLinks>
                <div class="container">
                  <div class="btn">
                    <span style={{ color: "white", fontSize: "20px" }}>
                      <a href="https://facebook.com">
                        <AiFillFacebook />
                      </a>
                    </span>
                  </div>
                </div>
              </NavLinks>
            </NavMenu>
            <NavMenu>
              <NavLinks>
                <div class="container">
                  <div class="btn">
                    <a href="https://mobile.twitter.com/home" class="pull-left">
                      <span style={{ color: "white", fontSize: "20px" }}>
                        <a href="https://twitter.com">
                          <GrTwitter />
                        </a>
                      </span>
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
                      <span style={{ color: "white", fontSize: "20px" }}>
                        <a
                          classNae="instagram"
                          style={{
                            background:
                              " radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
                          }}
                          href="https://instagram.com"
                        >
                          <AiOutlineInstagram />
                        </a>
                      </span>
                    </a>
                  </div>
                </div>
              </NavLinks>
            </NavMenu>
          </NavItem>
          <Wrapper isOpen={isOpen}>
            <Content isOpen={isOpen}>
              <Menu>
                <BurgerIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
                  <FaTimes> {isOpen ? "menu_open" : "menu"}</FaTimes>
                </BurgerIcon>
                <MenuButton>
                  <Link
                    to="home"
                    style={{
                      textDecoration: "none",
                      color: "#fff",
                      margin: "20px",
                    }}
                  >
                    <GiHouse /> Home
                  </Link>
                </MenuButton>
                <MenuButton>
                  <Link
                    to="contact"
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    {" "}
                    <BsSearch /> Contact Us
                  </Link>
                </MenuButton>
                <MenuButton>
                  <Link
                    to="maillist"
                    spy={true}
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    <MdEmail />
                    SignUp
                  </Link>
                </MenuButton>
                <MenuButton>
                  <Link
                    to="news"
                    spy={true}
                    style={{ textDecoration: "none", ccolor: "#fff" }}
                  >
                    <BsFillQuestionCircleFill />
                    News
                  </Link>
                </MenuButton>
              </Menu>
            </Content>
          </Wrapper>
        </Collapse>
      </Navbar>
    </>
  );
};

export default Header;
