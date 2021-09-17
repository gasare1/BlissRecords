import React from 'react'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import video1 from '../../Images/backgroundvideo.mp4'
import { Home, HomeBg, HomeBackground } from '../styled-components/HomePageElements'
import { Container } from 'react-bootstrap';
import HomepageCont from './HomepageCont';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Homepage() {
    var AOS = require('aos');   
    AOS.init();
    return (
        <>
            <Home id="home">
                <HomeBackground src={video1} className='videoTag' autoPlay loop muted type='video/mp4' style={{ zIndex: '-99' }} />
                <p style={{ marginTop: '-40rem', zIndex: '99' }}>Home</p>
                <HomeBg data-aos="fade-up"
                    data-aos-duration="3000">
                    Welcome to Bliss Records
                </HomeBg>

            </Home>



        </>
    )
}

export default Homepage
