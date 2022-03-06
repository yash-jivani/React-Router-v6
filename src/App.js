import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Post from './Components/Post';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Dashborad from './Components/Dashborad';
import LogoutPage from './Components/LogoutPage';

function App() {

  let isLoggedIn = true;
  // let isLoggedIn = false;

  return (
    <>

      <Router>

        <Navbar />
        <Routes>
          {/* paths */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/logout' element={<LogoutPage/>} />
          {/* if path not match | 404 page */}
          <Route path='*' element={<h1>404 page not found!</h1>} />
          {/* Dynamic Url */}
          <Route path='/post/:username' element={<Post />} />
          <Route path='/post/:username/:id' element={<Post />} />
          {/* conditional Path | if Login thn show dashborad else show login page*/}
          <Route path='/login' element={<Login />} />
          <Route path='/dashborad' element={isLoggedIn ? <Dashborad /> : <Navigate to='/login' replace />} />


        </Routes>

      </Router>

    </>
  );
}

export default App;
