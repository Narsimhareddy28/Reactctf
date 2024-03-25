
import mw from "../assets/MW.png";
import pavan from "../assets/pavan.png";
import hamaz from "../assets/hammaz.png";
import syam from "../assets/SYAM.png";
import  ricky from  "../assets/ricky.png";
import prudhvi from "../assets/prudvhi.png"
import shalvi from "../assets/shalvi.png"
import ayesha from "../assets/ayesha.png";
// import mehul from "../assets/mehul.png";
// import joel from "../assets/joel.png";
import ragan from "../assets/ragan.png";
import saran from "../assets/saran.png"

import '../styles/teams.css';
import Teamcard from "./Teamcard.jsx";
function Teams() {

  const cardData1 = [
   
    {
      name: "Syam Sai  Siddabhattula ",
      codename:"B4k3rY",
      role: "Captain,",
      position: "Generalist",
      linkedlin_link:"",
      weblink:"",
      image: syam
      
    },
    {
      name: " Pavan kumar Chindala",
      codename:"UnKwn",
      role: "Co-Captain",
      position: "Reverse Engineer Expert",
      linkedlin_link:"",
      weblink:"",
      image: pavan
    }
  ];


  const cardData2 = [
   
    {
      name: "Saran Senthil Anand",
      role: "Team-Player",
      codename:"M!r@cl3",
      position: "Generalist",
      linkedlin_link:"",
      weblink:"",
      image: saran
    },
    {
      name: "Hammaz ahmed ",
      role: "Team-Player",
      codename:"D@rk_Byt3",

      position: "Forensic Investigator",
      linkedlin_link:"",
      weblink:"",
      image: hamaz
    },
    {
      name: "Ragan murali pasupuleti ",
      role: "Team-Player",
      codename:"$h@dow",

      position: "OSINT Analyst ",
      linkedlin_link:"",
      weblink:"",
      image: ragan
    },
    {
      name: "Ricky kumar ",
      role: "Team-Player",
      codename:"Ru$h_M@n",
      position: "WebApplication Specialist ",
      linkedlin_link:"",
      weblink:"",
      image: ricky
    },
    {
      name: "Prudhvi Dharmireddi ",
      role: "Team-Player",
      codename:"$p33D_M@n",
      position: "Cryptography Specialist   ",
      linkedlin_link:"",
      weblink:"",
      image: prudhvi
    },
    {
      name: "Shalvi gharat ",
      role: "Team-Player",
      codename:"Crypt0",
      position: "Cryptography Specialist   ",
      linkedlin_link:"",
      weblink:"",
      image: shalvi
    },
    {
      name: "Ayesha hamzavi ",
      role: "Team-Player",
      codename:"$panish_501",
      position: "OSINT Analyst   ",
      linkedlin_link:"",
      weblink:"",
      image: ayesha
    },
    // {
    //   name: "Mehul antony ",
    //   role: "Team-Player",
    //   codename:"M34",
    //   position: "Learner",
    //   linkedlin_link:"",
    //   weblink:"",
    //   image: syam
    // },
    // {
    //   name: "Joel Aikkarakudiyil Joby ",
    //   role: "Team-Player",
    //   codename:"JL141",
    //   position: "Learner",
    //   linkedlin_link:"",
    //   weblink:"",
    //   image: syam
    // }
    




  ];



  return (
    <>
      <div >
        <div className="mainbodyteams">
           <h1 className="meet">Meet Our Team Players</h1>
        <div className="teams">
            {cardData1.map((card, index) => (
              <div className={`div${index + 1}`} key={index}>
                <div className="container">
                  <Teamcard {...card} />
                </div>
              </div>
            ))}
          </div>

          <div className="parentteams">
            {cardData2.map((card, index) => (
              <div className={`div${index + 1}`} key={index}>
                <div className="container">
                  <Teamcard {...card} />
                </div>
              </div>
            ))}
          </div>
     
         </div>
      </div>
    </>
  );
}

export default Teams;