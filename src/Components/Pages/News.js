import React, { setState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBInput,
} from "mdbreact";
import image1 from "../../Images/mansa3.jpeg";
import "../styled-components/contact.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "../styled-components/styles.css";
import Countdown from "./Timer";
import Countdown1 from "./Timer";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import audioLists from "./musicdb";
const News = () => {
  const minuteSeconds = 60;
  const hourSeconds = 3600;
  const daySeconds = 86400;

  const timerProps = {
    isPlaying: true,
    size: 120,
    strokeWidth: 6,
  };

  const renderTime = (dimension, time) => {
    return (
      <div className="time-wrapper" style={{ flexDirection: "row" }}>
        <div className="time" style={{ flexDirection: "row" }}>
          {time}
        </div>
        <div style={{ flexDirection: "row" }}>{dimension}</div>
      </div>
    );
  };

  const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
  const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
  const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
  const getTimeDays = (time) => (time / daySeconds) | 0;
  const stratTime = Date.now() / 10000; // use UNIX timestamp in seconds
  const endTime = stratTime + 2004000; // use UNIX timestamp in seconds

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  return (
    <MDBRow
      id="news"
      className="contactbackground"
      style={{
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        display: "flex",
        backgroundImage: `url(${image1})`,
        color: "black",
        width: "100.6%",
      }}
    >
      <MDBCol md="4">
        <Countdown1/>
        <ReactJkMusicPlayer
          audioLists={audioLists}
          showMediaSession
          autoPlay={true}
          toggleMode={true}
          drag={true}
          showPlay={true}
          showDownload={false}
          mode="full"
        />
      </MDBCol>
    </MDBRow>
  );
};

export default News;
