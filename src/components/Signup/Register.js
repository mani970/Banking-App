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
    // paddingBottom: "20px",
    marginLeft: "1px",
    marginBottom: "10px",
    color: "white",
    textShadow:" 1px 1px black",
    fontSize: "40px"
  }
  // css part end

export default class Register extends Component{

  constructor (props) {
    super(props);
    this.state = {
      first_name:'',
      last_name:'',
      email: '',
      mobile:'',
      password: '',
      formErrors: {first_name:'', last_name:'', email: '', mobile:'', password: ''},
      fnameValid:false,
      lnameValid:false,
      emailValid: false,
      mobileValid:false,
      passwordValid: false,
      formValid: false
    }
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
    let fnameValid = this.state.fnameValid;
    let lnameValid = this.state.lnameValid;
    let emailValid = this.state.emailValid;
    let mobileValid = this.state.mobileValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid , (hint : xyz@gmail.com)';
        break;
      case 'password':
        passwordValid = value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/);
        fieldValidationErrors.password = passwordValid ? '': '  is not strong , it contain atleast one special charcter , one uppercase';
        break;
      case 'first_name':
        fnameValid = value.match(/^([a-zA-Z ]){2,30}$/);
        fieldValidationErrors.first_name = fnameValid ? '': '  is invalid , Name must be in alphabets only ';
        break;
      case 'last_name':
        lnameValid = value.match(/^([a-zA-Z ]){2,30}$/);
        fieldValidationErrors.last_name = lnameValid ? '': '  is invalid , Name must be in alphabets only ';
        break;
      case 'mobile':
        mobileValid = value.match("[6-9]{1}[0-9]{9}");
        fieldValidationErrors.mobile = mobileValid ? '': ' starts with 6,7,8 or 9 and it accepts 10 digit only ';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    fnameValid: fnameValid,
                    lnameValid: lnameValid,
                    emailValid: emailValid,
                    mobileValid: mobileValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.fnameValid && this.state.lnameValid && this.state.emailValid  && this.state.mobileValid  && this.state.passwordValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  onSubmit = (e) =>{
    e.preventDefault()

    if( this.state.first_name=== "" || this.state.last_name === "" || this.state.email === ""|| this.state.mobile === "" || this.state.password === "" ){
      alert('Fill all the fields ')
    }

    const registerObject = {
        first_name:this.state.first_name,
        last_name:this.state.last_name,
        email: this.state.email,
        mobile:this.state.mobile,
        password: this.state.password
    };

    // console.log("Register", registerObject);

  Axios.post('http://localhost:8000/user/register', registerObject)
            .then((res) => {
                console.log(res.data);
                alert(res.data.message);
            }).catch((error) => {
                console.log(error)
            });

        this.setState({first_name:'',last_name:'', email: '',mobile:'', password:'' })
    }

   render() {
    return (
      <div>
          <HomeNavbar />
          <form style={form} id="lform" className="loginForm" name="validform" onSubmit={this.onSubmit} noValidate >
              <h2 style={welcome}> Register First .. </h2>
              <hr style={{borderTop: "2px solid lightgrey" , width:"100%" }} />

          <div className="panel panel-default">
              <FormErrors formErrors={this.state.formErrors} />
            </div>

           
<div  className="form-row">
<div className="col">
<div className={`form-group ${this.errorClass(this.state.formErrors.first_name)}`}>
              <input type="text"  className="form-control" name="first_name"
                placeholder="First Name"
                value={this.state.first_name}
                onChange={this.handleUserInput} required />
            </div>
</div>
<div className="col">
<div className={`form-group ${this.errorClass(this.state.formErrors.last_name)}`}>
              <input type="text"  className="form-control" name="last_name"
                placeholder="Last Name"
                value={this.state.last_name}
                onChange={this.handleUserInput} required />
            </div>
</div>

</div>

            <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
              <input type="email"  className="form-control" name="email"
                placeholder="Email Address"
                value={this.state.email}
                onChange={this.handleUserInput} required />
            </div>

            <div className={`form-group ${this.errorClass(this.state.formErrors.mobile)}`}>
              <input type="text"  className="form-control" maxLength="10" name="mobile"
                placeholder="Mobile Number"
                value={this.state.mobile}
                onChange={this.handleUserInput} required />
            </div>

            <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
              <input type="password" className="form-control" name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleUserInput} required />
            </div>
            

          <button style={btn} type="submit" className="btn btn-info login"  >Register</button>
        </form> 


      </div>
  )
}
   }
