import React from 'react'
import { Home, Background, Homelg, Card1 } from '../styled-components/HomeCont'
import { Card, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../../Images/goldenrecord.jpg'
import { AiFillPlayCircle } from 'react-icons/ai'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
import ReactAudioPlayer from 'react-audio-player';
import Sarkodie from '../../Images/sarkodie.jpg'
import Davido from '../../Images/Davido-2.jpg'
import Sark from '../../Audio/[BTCLOD.COM] Sarkodie - Rollies and Cigars (Official Music Video)-320k.mp3'
import Jowo from '../../Audio/[BTCLOD.COM] Davido - Jowo (Official Audio)-320k.mp3'
import Fameye from '../../Images/Fameye.jpg'
import PraiseFameye from '../../Audio/[BTCLOD.COM] Fameye - PRAISE (Audio Slide)-320k (1).mp3'
import BlackSherrif from '../../Images/BlackSherrif.jpg'
import SecondSermon from '../../Audio/[BTCLOD.COM] Black Sherif - Second Sermon (Official Video)-320k.mp3'
import '../styled-components/musicplayercard.scss'
function HomepageCont() {
    return (
        <Home id="home">
            <Homelg style={{ boxShadow: "0px -15px 10px -15px #fff" }}>
                <section>
                   
                    <MDBCard style={{ maxWidth: '22rem', margin: '20px' }} className='shadow bottom' data-aos="fade-up"
                        data-aos-duration="3000">
                        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                            <MDBCardImage src={Davido} style={{ maxHeight: "15rem", width: '22rem' }} fluid alt='...' />
                            <a>
                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                            </a>
                        </MDBRipple>
                        <MDBCardBody>
                            <MDBCardTitle>Davido: Jowo</MDBCardTitle>
                            <ReactAudioPlayer
                                src={Jowo}
                                controls
                            />
                            We do not own the music in this video/rights to this music.
                        </MDBCardBody>
                    </MDBCard>
                    <MDBCard style={{ maxWidth: '22rem', margin: '20px' }} className='shadow bottom' data-aos="fade-up"
                        data-aos-duration="3000">
                        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                            <MDBCardImage src={Fameye} fluid alt='...' style={{ maxHeight: "15rem", width: '22rem' }} />
                            <a>
                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                            </a>
                        </MDBRipple>
                        <MDBCardBody>
                            <MDBCardTitle>Fameye: Praise </MDBCardTitle>
                            <ReactAudioPlayer
                                src={PraiseFameye}
                                controls
                            />
                            We do not own the music in this video/rights to this music.
                        </MDBCardBody>
                    </MDBCard>
                    <MDBCard style={{ maxWidth: '22rem', margin: '20px' }} className='shadow bottom' data-aos="fade-up"
                        data-aos-duration="3000">
                        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                            <MDBCardImage src={BlackSherrif} style={{ maxHeight: "20rem", width: '22rem', height: '15rem' }} fluid alt='...' />
                            <a>
                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                            </a>
                        </MDBRipple>
                        <MDBCardBody>
                            <MDBCardTitle>Black Sheriff: Second Sermon</MDBCardTitle>
                            <ReactAudioPlayer
                                src={SecondSermon}

                                controls
                            />
                            We do not own the music in this video/rights to this music.
                        </MDBCardBody>
                    </MDBCard>
                </section>
            </Homelg>

        </Home >
    )
}

export default HomepageCont
