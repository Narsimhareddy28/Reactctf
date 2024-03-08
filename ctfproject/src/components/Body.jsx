import "../App.css";
import "../styles/body.css";
import blogo from "../assets/foxlogo.png";
import bblogo from "../assets/bblogo.png";
import mw from "../assets/mw.png";
import browser from "../assets/browser.png";

function Body() {
  return (
    <>
      <div>
        <div className="body">
          <div className="center">
            <img src={bblogo} alt="" className="bblogo" />
            <div className="combo">
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
        <div className="advisory">
          <p className="meet">Meet Our Advisory Board</p>
          <div class="parent">
            <div class="div1">
              <div class="container">
                <div
                  class="card"
                  data-augmented-ui="both tl-2-clip-x tr-2-clip-y r-clip-y br-clip bl-2-clip-y"
                >
                  <img src={mw} alt="" />
                </div>
                <div className="infocontainer">
                  <p>Maria Weber</p>
                  <p>Director, Cybersecurity </p>
                  <p>Interim Director of Information System</p>
                  <span>
                    <img src={browser} alt="" />
                  </span>
                  <span>
                    <img src={browser} alt="" />
                  </span>
                </div>
                
              </div>
            </div>
            <div class="div2">
              <div class="container">
                <div
                  class="card"
                  data-augmented-ui="both tl-2-clip-x tr-2-clip-y r-clip-y br-clip bl-2-clip-y"
                ></div>
              </div>
            </div>
            <div class="div3">
              <div class="container">
                <div
                  class="card"
                  data-augmented-ui="both tl-2-clip-x tr-2-clip-y r-clip-y br-clip bl-2-clip-y"
                ></div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
