import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBInput,
} from "mdbreact";
import image1 from "../../Images/newsback.jpg";
import "../styled-components/contact.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "../styled-components/styles.css";
import Countdown from "./Timer";
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
        color: "black",width:'100vw'
      }}
    >
      <MDBCol md="4">
        <>
          <Countdown
            timeTillDate="10 08 2021, 12:00 am"
            timeFormat="MM DD YYYY, h:mm a"
            style={{alignItems:'center',justifyContent:'center',display:'flex',flexDirection:'row',height:'200px'}}
          />
        </>
      </MDBCol>
    </MDBRow>
  );
};

export default News;
