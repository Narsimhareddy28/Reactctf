import "../App.css";
import "../styles/body.css";
import "../styles/timer.css";
import video from '../assets/backvideo.mov';

import blogo from "../assets/foxlogo.png";
import bblogo from "../assets/bblogo.png";
import mw from "../assets/MW.png";
import SYAM from "../assets/SYAM.png";
import ky from "../assets/KY.png";
import CountdownTimer from './CountdownTimer';
import Card from "./Card.jsx";

function Body() {
  const cardData = [
    {
      name: "MARIA WEBER",
      role: "Director, Cybersecurity",
      position: "Interim Director of Information System",
      linkedlin_link: "",
      weblink:
        "https://www.slu.edu/professional-studies/contact-us/faculty/maria-weber.php",
      image: mw,
    },
    {
      name: "KYLE WILHOIT  ",
      role: "Faculty Advisor,",
      position: "Blackhat US Review Board Member",
      linkedlin_link: "",
      weblink: "",
      image: ky,
    },
    {
      name: "SYAM SAI SIDDABHATTULA  ",
      role: "Team Captain",
      position: " ",
      linkedlin_link: "",
      weblink: "",
      image: SYAM,
    },
  ];

  const targetDate = new Date(2024, 3, 20).getTime();
  const formattedTargetDate = new Date(targetDate).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });


  return (
    <>
   
      <div>
        <div className="mainbody">
          <div className="body">
          <video autoPlay={true} muted loop id="myVideo">
        <source src={video} type="video/mp4"/>
      </video>
            <div className="center">
              <div className="combo">
                <img src={bblogo} alt="" className="bblogo" />

                <img src={blogo} alt="" className="blogo" />

                <div className="bblogolettercolor"></div>
                <div className="cyberbilliken">
                  <span className="mod">CYBER</span>{" "}
                  <span className="sdd">BILLIKENS</span>
                </div>
                <div className="fulldescription">
                  <p className="description">
                    Mastering Codes, Breaking Barriers{" "}
                  </p>
                  <p className="description">
                    Where Cybersecurity Meets Excellence. No Room for Ordinary,
                  </p>
                  <p className="description">
                    {" "}
                    Only Extraordinary Defense. Join the Elite, Defend with
                    Precision
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="timer">
  <div className="btimer">
      <h1>APRIL CTF CHALLENGE COUNTDOWN</h1>
      <div className="counttimer">
      <CountdownTimer targetDate={targetDate} />
      </div>
      <div>
      <p>The biggest CTF in the history of Saint Louis
      University is being organized in the upcoming </p>
      <p>{formattedTargetDate}</p>
      <p>Sponsored by SPS SLU
        <p>Teams from all over Saint Louis will be competing or the title "Best CTF team of St. Louis"</p>
      </p>
      <p>Join Us for the day of fun and activities.</p>
      </div>
    <div className="but">
      <button className="right">Register Here</button>
      <button className="right ">Contact US</button>
      </div>
    </div>
    </div>
    <br />
        <br />
        <br />
        <div className="advisory">
          <p className="meet">Meet Our Advisory Board</p>
          <div className="parent">
            {cardData.map((card, index) => (
              <div className={`div${index + 1}`} key={index}>
                <div className="container">
                  <Card {...card} />
                </div>
              </div>
            ))}
          </div>
        </div>

{/* timer */}

      </div>
    </>
  );
}

export default Body;
