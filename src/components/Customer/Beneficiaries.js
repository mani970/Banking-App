import Axios from 'axios';
import React, { Component } from 'react'
import LeftCustomer from './LeftCustomer'

export default class Beneficiaries extends Component {
  
  constructor(props) {
    super(props)

    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeAcountNo = this.onChangeAcountNo.bind(this);
    this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
    this.onChangePhoneNo = this.onChangePhoneNo.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      first_name: '',
      last_name:'',
      acount_number:'',
      email: '',
      phone_number:''
    }
}

onChangeFirstName(e) {
    this.setState({ first_name: e.target.value })
}
onChangeLastName(e) {
    this.setState({ last_name: e.target.value })
}
onChangeAcountNo(e) {
    this.setState({ acount_number: e.target.value })
}
onChangeUserEmail(e) {
    this.setState({ email: e.target.value })
}

onChangePhoneNo(e) {
    this.setState({ phone_number: e.target.value})
}
// 	first_name, last_name, acount_number, email, phone_number)

onSubmit(e) {
    e.preventDefault()

    const userObject = {
      first_name: this.state.first_name,
      last_name:this.state.last_name,
      acount_number:this.state.acount_number,
      email: this.state.email,
      phone_number:this.state.phone_number
    };
// console.log(userObject);
    Axios.post('http://localhost:8000/beneficiaries', userObject)
        .then((res) => {
            console.log(res.data)
            // alert(res.data.message);
            alert(res.data.message);
        }).catch((error) => {
            console.log(error)
        });

    this.setState({ first_name: '',last_name:'',acount_number:'',email: '',phone_number:''})
}

  render() {
    return (
        <div>
            <div className="row">
                    <div className="col-2"><LeftCustomer/></div>
                    <div className="col-10">
                        <div className="row">
                            <div className="col-2"></div>
                            <div className="col-8">

                            <div className="jumbotron mt-5">
      <div>
        <h3 className="text-center text-info m-2 p-2" >Beneficiaries</h3>

        

        <form onSubmit={this.onSubmit}>
          <div className="form-row m-2">
            <div className="col">
              <label htmlFor="firstName">First Name<span className="required text-danger">*</span></label>
              <input type="text"  name="first_name" id="firstName" value={this.state.first_name} onChange={this.onChangeFirstName}   className="form-control" placeholder="First Name" required />
            </div>

            <div className="col">
              <label htmlFor="lastName">Last Name<span className="required text-danger">*</span></label>
              <input type="text"  
              name="last_name" id="lastName"  value={this.state.last_name} onChange={this.onChangeLastName} className="form-control" placeholder="Last Name" required />
              </div>
          </div>

          <div className="form-row m-2">
            <div className="col">
            <label htmlFor="accountNumber">Account Number<span className="required text-danger">*</span></label>
            <input type="text"  name="acount_number" 
            value={this.state.acount_number} onChange={this.onChangeAcountNo} 
            id="accountNumber"  className="form-control" placeholder="Acount Number" required />
            </div>

            <div className="col">
              <label htmlFor="email">Email <span className="required text-danger">*</span></label>
              <input type="text" name="email" id="email" 
              value={this.state.email} onChange={this.onChangeUserEmail} 
              maxLength="30"   className="form-control" placeholder="ex: abc@gmail.com" required />
            </div>
        
            <div className="col">
              <label htmlFor="phoneNumber">Phone Number <span className="required text-danger ">*</span></label>
              <input type="text" className="form-control" name="phone_number"
              value={this.state.phone_number} onChange={this.onChangePhoneNo}  maxLength="10" placeholder="Phone Number" required
                id="phoneNumber" />
          </div>
          
             </div>
             <div className=" text-left m-2 ">
                            <button type="submit" className="btn btn-outline-success m-2 p-2"> Submit</button>
                            {/* <button type="reset" className="btn btn-outline-info m-2 p-2"> Reset</button> */}
                       </div>
       </form>
      </div>
     </div>
                            </div>
                            <div className="col-2"></div>
                        </div>
                    </div>
            </div>        
        </div>
    )
}
}