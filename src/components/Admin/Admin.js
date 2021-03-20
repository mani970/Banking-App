// eslint-disable-next-line
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import LeftAdmin from './LeftAdmin'

export default class Admin extends Component {

    constructor(props){
        super(props)
    
        const token = localStorage.getItem('token')
    
        let loggedIn = true
        if (token === null ) {
          loggedIn = false
        }
    
        this.state = {
          loggedIn
        }
      }

    render() {
        if ((this.state.loggedIn === false  ) ) {
            return <Redirect to="/login" />
          } 

    return (
        <div>
           <div className="row" >
                    <div className="col-2" ><LeftAdmin/></div>
                    <div className="col-10 text-center container ">
                        <br/>
                       <h1 style={{color:"whitesmoke"}}>Welcome Akanksha ! </h1> 
                       <hr style={{borderTop: "2px solid lightgrey",color:"whitesmoke" , width:"95%" }} /> <br/>
                       <br></br>
                       <p style={{ color:"white" , fontSize: "20px" }}>From here you can manage all of core internet Banking settings . You can add / manage customers , edit their details and <br/> even delete them . You can also post news on the website and even see all the news .
                        </p>
                    </div>
                </div>
        </div>
    )
}
}
