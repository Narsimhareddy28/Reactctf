import "../App.css";
import "../styles/body.css";
import blogo from "../assets/foxlogo.png";
import bblogo from "../assets/bblogo.png";
import bblogoletter from "../assets/letter_logo.png";

function Body() {
  return (
    <>
      <div className="body">
        <div className="center">
          <img src={bblogo} alt="" className="bblogo" />
          <div className="combo">
            <img src={blogo} alt="" className="blogo" />
            <div className="bblogolettercolor"></div>
            <div className="cyberbilliken"><span className="mod">CYBER</span> <span className="sdd">BILLIKENS</span></div>
            <div>
                <p></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
