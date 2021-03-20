import Axios from 'axios'
import React, { Component, Fragment } from 'react'
import LeftCustomer from '../Customer/LeftCustomer'


const heading={
    color:'skyblue',
    // marginTop : '50px',
    marginLeft :'200px',
    textShadow: "2px 2px darkgrey",
    fontSize : '40px'
}

const drop ={
    color:'white',
    marginTop : '1px',
    marginLeft :'230px'
}
const drop1 ={
    color:'white',
    // marginTop : '20px',
    marginLeft :'170px'
}
const mail={
    color:'skyblue',
    textDecoration: 'underline',
    // marginTop : '20px',
    marginLeft :'10px'
}

const form ={
    padding: "10px",
    marginTop: "1px",
    marginLeft: "360px",
    width:"470px",
    marginBottom: "40px",
    // color: "firebrick",
    fontWeight: "600"
}


export default class Contact extends Component {

    constructor(props) {
        super(props)
    
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);
    
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
          name: '',
          email:'',
          message:'',
        }
    }

    onChangeName(e) {
        this.setState({ name: e.target.value })
    }
    onChangeEmail(e) {
        this.setState({ email: e.target.value })
    }
    onChangeMessage(e) {
        this.setState({ message: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()
    
        const contactObject = {
          name: this.state.name,
          email:this.state.email,
          message:this.state.message,
        };
        Axios.post('http://localhost:8000/contact', contactObject)
            .then((res) => {
                console.log(res.data)
                alert(res.data.message);
                // alert(' News  added Successfully ');
            }).catch((error) => {
                console.log(error)
            });
    
        this.setState({ name:'', email:'',message:''})
    }
    

    render() {
    return (
        <Fragment >
                <div className="row">
                    <div className="col-2"><LeftCustomer /></div>
                    <div className="col-10">
                    <div className="col-10 text-center" > <h2 style={heading} >Have any question?</h2>
              <br></br>
              <p style={drop}>Drop me a mail at : <span style={mail}>akankshagupta@gmail.com</span></p>
              <h3 style={drop1}>Or Fill up the form below .</h3>
              </div>
              
    <div className="container col-12" style={form}>
    <h2 style={{color:'skyblue ',marginBottom:'30px', textShadow: "2px 2px darkgrey"}}>Fill me up</h2>
        <div className="row">
            
            <div className="col-12 col-md-offset-2">
                <div >
                    <form  onSubmit={this.onSubmit} >
                        <div className="form-group"> 
                        <input type="text" className="form-control" placeholder="Your Name" name="name"  value={this.state.name} onChange={this.onChangeName} required /> 
                        </div>
                        <div className="form-group"> 
                        <input type="email" className="form-control"placeholder="Your Email Address" name="email"  value={this.state.email} onChange={this.onChangeEmail} required /> </div>
                        <div className="form-group"> 
                        <textarea className="form-control"  rows="5"  placeholder="Write Your message..." name="message"  value={this.state.message} onChange={this.onChangeMessage} required /> </div> 
                        <button type="submit" class="btn btn-info">Send Message</button>
                    </form>
               
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                </div>
        </Fragment>
    )
}
}