import "../styles/footer.css";
import fox from "../assets/foxlogo.png";
function Footer() {
  return (
    <>
      <div>
        <div className="footerbox">
          <div className="footflex">
            <div>
              <img clas src={fox} alt="" height={150} />
            </div>
            <div className="list">
              <div className="heading">Navigation</div>
              <div>About Team</div>
              <div>About Achievements</div>
              <div>Gallery</div>
              <div>Events</div>
              <div>Announcements</div>
            </div>
            <div
              className="list"
            >
              <div className="heading">Contact </div>
              <div>CTF Times</div>
              <div>Instagram</div>
              <div>Linkedln</div>
              <div>Discord</div>
            </div>
          </div>
          <div className="copyrightflex">
            <div>
            Copyright @2024 Cyber Billikens All rights reserved.
            </div>
            <div>
                    FAQ | Terms&Conditions 
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
