import React from "react";
import moment from "moment";
import image from "../../Images/Mansa.jpg";
import mansa from "../../Audio/Jador--Mansa.mp3";
import "react-h5-audio-player/lib/styles.css";
import { AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";
import { FaSpotify, FaApple, FaYoutube } from "react-icons/fa";
import "../styled-components/timer.css";
import { GrTwitter } from "react-icons/gr";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
import Countdown from "react-countdown";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
class Countdown1 extends React.Component {
  state = {
    days: undefined,
    hours: undefined,
    minutes: undefined,
    seconds: undefined,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      const { timeTillDate, timeFormat } = this.props;
      const then = moment(timeTillDate, timeFormat);
      const now = moment();
      const countdown = moment(then - now);
      const days = countdown.format("D");
      const hours = countdown.format("HH");
      const minutes = countdown.format("mm");
      const seconds = countdown.format("ss");

      this.setState({ days, hours, minutes, seconds });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    return (
      <div style={{ marginTop: "40px", marginRight: "60px" }}>
        <MDBCard
          style={{
            maxWidth: "100rem",
            margin: "20px",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            maxHeight: "100%",
            width: "100%",
            marginTop: "70px",
          }}
          className="shadow bottom"
          id="shadow"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <MDBRipple
            rippleColor="light"
            rippleTag="div"
            className="bg-image hover-overlay"
          >
            <MDBCardImage
              src={image}
              style={{ maxHeight: "20rem", width: "55rem" }}
              fluid
              alt="..."
            />
            <a>
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              ></div>
            </a>
          </MDBRipple>
          <MDBCardBody>
            <MDBCardTitle style={{ fontFamily: "Lato, sans-serif" }}>
              {" "}
              Mansa: J'ador{" "}
              <a href="https://instagram.com/jador_offical?utm_medium=copy_link">
                <AiOutlineInstagram  style={{ color: "red", margin: "20px" }}/>
              </a>{" "}
              <a href="https://m.facebook.com/jadormuzik">
              <AiFillFacebook  style={{ color: "blue", margin: "20px" }}/>
              </a>
              <a href="https://mobile.twitter.com/jador_official"><GrTwitter style={{ margin: "20px" }}/></a>
            </MDBCardTitle >
            Avilable on all platforms!!
            <div style={{ justifyContent: "space-between", fontSize: "50px" }}>
              <a
                href="https://www.youtube.com/watch?v=v-NssrnFIxU&ab_channel=J%27ador"
                target="_blank"
              >
                <FaYoutube style={{ color: "red", margin: "60px" }} />
              </a>

              <a
                href="https://music.apple.com/us/album/mansa/1584868772?i=1584868773"
                target="_blank"
              >
                <FaApple style={{ color: "black", margin: "60px" }} />
              </a>
              <a
                href="https://open.spotify.com/album/7u1eazvSnGS3C2cQ8X3dIp?highlight=spotify:track:4Yr0wBwrAwrggUdU5j0MCT"
                target="_blank"
              >
                <FaSpotify style={{ color: "green", margin: "60px" }} />
              </a>
            </div>
          </MDBCardBody>
        </MDBCard>
      </div>
    );
  }
}
export default Countdown1;
