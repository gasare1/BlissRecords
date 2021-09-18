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
      }}
    >
      <MDBCol md="4">
        <>
          <div className="News" id="news">
            <h1
              style={{
                textAlign: "center",
                alignItems: "center",

              }}
            >
              Song Release Date
            </h1>
            <CountdownCircleTimer
              {...timerProps}
              colors={[["#7E2E84"]]}
              duration={daysDuration}
              initialRemainingTime={remainingTime}
            >
              {({ elapsedTime }) =>
                renderTime("days", getTimeDays(daysDuration - elapsedTime))
              }
            </CountdownCircleTimer>
            <CountdownCircleTimer
              {...timerProps}
              colors={[["#D14081"]]}
              duration={daySeconds}
              initialRemainingTime={remainingTime % daySeconds}
              onComplete={(totalElapsedTime) => [
                remainingTime - totalElapsedTime > hourSeconds,
              ]}
            >
              {({ elapsedTime }) =>
                renderTime("hours", getTimeHours(daySeconds - elapsedTime))
              }
            </CountdownCircleTimer>
            <CountdownCircleTimer
              {...timerProps}
              colors={[["#EF798A"]]}
              duration={hourSeconds}
              initialRemainingTime={remainingTime % hourSeconds}
              onComplete={(totalElapsedTime) => [
                remainingTime - totalElapsedTime > minuteSeconds,
              ]}
            >
              {({ elapsedTime }) =>
                renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))
              }
            </CountdownCircleTimer>
            <CountdownCircleTimer
              {...timerProps}
              colors={[["#218380"]]}
              duration={minuteSeconds}
              initialRemainingTime={remainingTime % minuteSeconds}
              onComplete={(totalElapsedTime) => [
                remainingTime - totalElapsedTime > 0,
              ]}
            >
              {({ elapsedTime }) =>
                renderTime("seconds", getTimeSeconds(elapsedTime))
              }
            </CountdownCircleTimer>
          </div>
          <p
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              fontSize: "20px",
              fontWeight:'bolder'
            }}
          >
            Welcome to Bliss Records! Bliss Records lets you discover new music,
            find related artists, and listen to previews of top tracks. Enter an
            artist and start discovering!
          </p>
        </>
      </MDBCol>
    </MDBRow>
  );
};

export default News;
