import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Body from './components/Body.jsx';
import Footer from './components/Footer.jsx';
import Teams from './components/Teams.jsx'; // Import the component for the other page
import Contact from './components/Contact.jsx';
import Maintain from './components/Maintain.jsx';
function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
     
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Body} />
        <Route path="/Teams" Component={Teams} />
        <Route path="/Contact" Component={Contact} />
        <Route path="/Resource" Component={Maintain} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
