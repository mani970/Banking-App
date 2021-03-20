import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-info text-white" fixed="top">
  <Link className="navbar-brand text-white" to="/home"><b>HOME</b></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse " id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    
      <li className="nav-item active">
        <Link className="nav-link text-white" to="/contact">CONTACT</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link text-white" to="/about">ABOUT US</Link>
      </li>
    
    </ul>
    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
   
      <li className="nav-item active">
        <Link className="nav-link text-white" to="/signup">REGISTER</Link>
      </li>
    </ul>

  </div>
</nav>
        </div>
    )
}
