import React from 'react'
import logo from './images/Icon_dm_192nobg.png';
const Footer = () => {
  return (
  <div className="container" id='about'>
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-mb-2 d-flex align-items-center">
      
      <span className="mb-3 mb-md-0 text-body-secondary">
      <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
        <img className="proj1000-logo" id="proj1000-logo" src={logo} />
      </a>© 2024 Dmitri Morozov</span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3"><a className="text-body-secondary" href="#page"><svg className="bi" width="24" height="24"><use href="#twitter"></use></svg></a></li>
      <li className="ms-3"><a className="text-body-secondary" href="#page"><svg className="bi" width="24" height="24"><use href="#instagram"></use></svg></a></li>
      <li className="ms-3"><a className="text-body-secondary" href="#page"><svg className="bi" width="24" height="24"><use href="#facebook"></use></svg></a></li>
    </ul>
  </footer>
</div>
  )
}

export default Footer