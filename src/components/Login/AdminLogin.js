import Axios from 'axios';
import React , { Component }  from 'react'
import HomeNavbar from '../Navbar/HomeNavbar';
import { FormErrors } from '../Welcome/FormErrors';

  // css part start

  const form = {
    border:"darkseagreen solid 2px",
    padding: "40px",
    marginTop: "30px",
    marginLeft: "380px",
    marginRight: "485px",
    color: "firebrick",
    fontWeight: "600",
    // boxShadow: "2px 3px #888888"
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
    // paddingBottom: "20px",
    marginLeft: "1px",
    marginBottom: "10px",
    color: "white",
    textShadow:" 2px 2px darkgrey",
    fontSize: "40px"
  }
  // css part end

export default class AdminLogin extends Component{

  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      formErrors: {email: '', password: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
  }

  componentDidMount(){

    this.roleBaseRendering();

  }
  // handleSubmit = e => {
  //   e.preventDefault();
  // };

  handleUserInput = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
                  this.setState( {[e.target.name] : e.target.value })
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid , (hint : xyz@gmail.com)';
        break;
      case 'password':
        passwordValid = value.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})");
        fieldValidationErrors.password = passwordValid ? '': '  is not strong , it contain atleast one special charcter , one uppercase';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  onSubmit = (e) =>{
    e.preventDefault()

    const loginObject = {
        email: this.state.email,
        password: this.state.password
    };

    console.log("Hello", loginObject);

  Axios.post('http://localhost:8000/user/login', loginObject)
            .then((res) => {
                console.log(res.data)
                localStorage.setItem('token',res.data.token)
                localStorage.setItem('role',res.data.role)
                this.roleBaseRendering();
            }).catch((error) => {
                console.log(error)
            });

        this.setState({ email: '', password:'' })
    }

    roleBaseRendering=(e) =>{

     const token= localStorage.getItem('token')
     const role= localStorage.getItem('role')

      if(role ==='admin'){
        this.props.history.push('/admin');
      }else if(role==='customer'){
        this.props.history.push('/customer');
      }
    }

   render() {
    return (
      <div>
          <HomeNavbar />
          <form style={form} id="lform" name="validform" className="loginForm" onSubmit={this.onSubmit} noValidate >
              <h2 style={welcome}> Login Here.</h2>
              <hr style={{borderTop: "2px solid lightgrey" , width:"100%" }} />

          <div className="panel panel-default">
              <FormErrors formErrors={this.state.formErrors} />
            </div>
            <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
              <input type="email" required className="form-control" name="email"
                placeholder="Email" 
                value={this.state.email}
                onChange={this.handleUserInput}  />
            </div>
            <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
              <input type="password" className="form-control" name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleUserInput}  />
            </div>
          <button style={btn} type="submit" className="btn btn-info login"  >Login</button>
        </form> 


      </div>
  )
}
   }
