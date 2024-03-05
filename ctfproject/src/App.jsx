import { useState } from 'react'
import video from './assets/backvideo.mov'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Body from './components/Body.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <video autoPlay={true} muted loop id="myVideo">
  <source src={video} type="video/mp4"/>
</video>
       <Navbar />
       <Body/>
       
      
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
