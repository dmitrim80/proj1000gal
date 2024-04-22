import React from 'react'
import logo from './images/Icon_dm_192nobg.png';
const Header = () => {
  return (
    
    <div className="container">
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <img className="proj1000-logo" src={logo}/>
        <span className="fs-4" id='header-title-1000gal'>Aquarium - 1000 Gallons Project</span>
      </a>

      <ul className="nav nav-pills">
        <li className="nav-item"><a href="#page" className="nav-link active" aria-current="page">Home</a></li>
        
        <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
      </ul>
    </header>
  </div>
  )
}

export default Header