import React from 'react'
import { Link } from 'react-router-dom'

export default function CustomerNavbar() {
    return (
        <div>
            
             <nav className="navbar navbar-expand-lg navbar-light bg-info text-white" fixed="top">
                <Link className="navbar-brand text-white" to="/"><i className="fa fa-fw fa-home"></i><b>HOME</b></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            
         </ul>
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
        
            <li className="nav-item active">
                <Link className="nav-link text-white" to="/cust_login_page"><b><i class="fa fa-fw fa-user"></i> LOGIN </b></Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link text-white" to="/register"><i class="fa fa-user-plus" aria-hidden="true"></i>  REGISTER</Link>
            </li>
            
            </ul>

  </div>
            </nav>
        </div>
    )
}
