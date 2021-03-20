import React from 'react'
import LeftCustomer from './LeftCustomer'

export default function Customer() {
    return (
        <div>
            <div className="row ">
                    <div className="col-2"><LeftCustomer/></div>
                    <div className="col-10 text-center container ">
                        <br/>
                       <h1 style={{color:"whitesmoke"}}>Welcome to Banking App </h1> 
                       <hr style={{borderTop: "2px solid lightgrey",color:"whitesmoke" , width:"95%" }} />
                       <br/>
                       <p style={{ color:"white" , fontSize: "20px" }}>From here you can manage all of core internet Banking settings . You can add / manage beneficiaries , edit  their  details and  even delete them . You can also view latest news on the website . You can send money to any one within single click . 
                        </p>
                    </div>
                </div>
        </div>
    )
}
