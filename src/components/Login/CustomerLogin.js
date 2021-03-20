import React from 'react'
import CustomerNavbar from '../Navbar/CustomerNavbar';

export default function CustomerLogin() {
    const handleSubmit = (e) => {
        e.preventDefault();
      };

      
const form = {
    border:"darkseagreen solid 2px",
    padding: "40px",
    marginTop: "30px",
    marginLeft: "380px",
    marginRight: "485px",
    color: "firebrick",
    fontWeight: "600"
  }

  const btn ={
    marginTop: "15px",
    marginLeft: "5px" ,
    paddingLeft: "40px",
    paddingRight: "40px",
    marginBottom: "10px",
    fontSize: "23px"
  }

  const welcome ={
    paddingBottom: "20px",
    marginLeft: "1px",
    marginBottom: "10px",
    color: "white",
    textShadow:" 2px 2px darkgrey",
    fontSize: "40px"
  }
    return (
        <div>
            <CustomerNavbar />
               <div className="text-center">
               <h2 style={welcome}>Welcome to Banking App  </h2> <br/>
                <h3>From Here , You can access this bank ..</h3>
               </div>
        </div>
    )
}
