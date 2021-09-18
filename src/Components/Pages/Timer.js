import React from "react";
import moment from "moment";
import image from "../../Images/Mansa.jpg";
import mansa from "../../Audio/Jador--Mansa.mp3";
import "react-h5-audio-player/lib/styles.css";
import AudioPlayer from "react-h5-audio-player";
import "../styled-components/timer.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
class Countdown extends React.Component {
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
    const { days, hours, minutes, seconds } = this.state;
    const daysRadius = mapNumber(days, 30, 0, 0, 360);
    const hoursRadius = mapNumber(hours, 24, 0, 0, 360);
    const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
    const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);

    if (!seconds) {
      return null;
    }

    return (
      
      <div>
        <MDBCard
          style={{ maxWidth: "500rem", margin: "20px",justifyContent:'center',alignItems: 'center',display:'flex',maxHeight:'800px',marginTop:'70px' }}
          className="shadow bottom"
          id='shadow'
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
            <MDBCardTitle> Jador: Mansa</MDBCardTitle>
            <AudioPlayer
              style={{width:'23.4rem'}}
              id='shadow'
              src={mansa}
              onPlay={(e) => console.log("onPlay")}
              // other props here
            />
          </MDBCardBody>
          <h1 style={{ color: "black" }}>Countdown to song Release</h1>
          <div className="countdown-wrapper">
          {days && (
            <div className="countdown-item" style={{ marginTop: "40px" }}>
              <SVGCircle
                radius={daysRadius}
                style={{
                  fontSize: "20px",
                  fontWeight: "bolder",
                  marginTop: "20px",
                }}
              />

              <span
                style={{ fontSize: "40px", fontWeight: "bolder", color: "red" }}
              >
                {" "}
                {days} days
              </span>
            </div>
          )}
          {hours && (
            <div className="countdown-item1">
              <SVGCircle1 radius={hoursRadius} style={{ color: "red" }} />

              <span
                style={{
                  fontSize: "40px",
                  fontWeight: "bolder",
                  color: "gold",
                }}
              >
                {hours} hours
              </span>
            </div>
          )}
         
         
        </div>
        </MDBCard>
        <div
        className="countdown-wrapper"
        style={{
          background: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}>
        

    
      </div>
      </div>
      
    );
  }
}

const SVGCircle = ({ radius }) => (
  <svg className="countdown-svg">
    <path
      fill="none"
      stroke="red"
      stroke-width="4"
      d={describeArc(50, 50, 48, 0, radius)}
    />
  </svg>
);
const SVGCircle1 = ({ radius }) => (
  <svg className="countdown-svg1">
    <path
      fill="none"
      stroke="gold"
      stroke-width="4"
      d={describeArc(50, 50, 48, 0, radius)}
    />
  </svg>
);
const SVGCircle2 = ({ radius }) => (
  <svg className="countdown-svg2">
    <path
      fill="none"
      stroke="white"
      stroke-width="4"
      d={describeArc(50, 50, 48, 0, radius)}
    />
  </svg>
);
const SVGCircle3 = ({ radius }) => (
  <svg className="countdown-svg3">
    <path
      fill="none"
      stroke="green"
      stroke-width="4"
      d={describeArc(50, 50, 48, 0, radius)}
    />
  </svg>
);

<Countdown
  timeTillDate="10 08 2021, 12:00 am"
  timeFormat="MM DD YYYY, h:mm a"
/>;

// From stackoverflow: https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

function describeArc(x, y, radius, startAngle, endAngle) {
  var start = polarToCartesian(x, y, radius, endAngle);
  var end = polarToCartesian(x, y, radius, startAngle);

  var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  var d = [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
  ].join(" ");

  return d;
}

// Stackoverflow: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function mapNumber(number, in_min, in_max, out_min, out_max) {
  return (
    ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  );
}

export default Countdown;
