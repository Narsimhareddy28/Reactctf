import "../App.css";
import "../styles/body.css";
import blogo from "../assets/foxlogo.png";
import bblogo from "../assets/bblogo.png";
import mw from "../assets/mw.png";
import browser from "../assets/browser.png";
import Card from './Card.jsx';


function Body() {

  const cardData = [
    {
      name: "Maria Weber",
      role: "Director, Cybersecurity",
      position: "Interim Director of Information System",
      linkedlin_link:"",
      weblink:"https://www.slu.edu/professional-studies/contact-us/faculty/maria-weber.php",
      image: mw
    },
    {
      name: "Kyle Wilhoit ",
      role: "Faculty Advisor,",
      position: "Blackhat US Review Board Member",
      linkedlin_link:"",
      weblink:"",
      image: mw
    },
    {
      name: "Syam Sai  Siddabhattula ",
      role: "Team Captain",
      position: " ",
      linkedlin_link:"",
      weblink:"",
      image: mw
    }
  ];


  return (
    <>
      <div >
        <div className="mainbody">
        <div className="body">
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
      </div>
    </>
  );
}

export default Body;
