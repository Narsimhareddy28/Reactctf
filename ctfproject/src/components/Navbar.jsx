
import '../App.css'
import '../styles/Nav.css'
import logo from '../assets/Group1.png'

function Navbar() {

  return (
    <>
    <div className='size'>
        <div className='navcontainer'>
            <div>
                <img src={logo} alt=""  className='img' />
            </div>

            <div className='navelements'>
              
                  <a className="nav-link nav-link-ltr">HOME</a>
                  <a className="nav-link nav-link-ltr">TEAM</a>
                  <a className="nav-link nav-link-ltr">Resource</a>
                  <a class="nav-link nav-link-ltr">Contact us </a>
                
            </div>

            <div className='ctfd'>
                  <div>CTFD</div>
            </div>
        </div>


    
   

    </div>

    </>
  )
}

export default Navbar;
