import Axios from 'axios';
import React, { Component } from 'react'
import LeftCustomer from './LeftCustomer'

export default class EditBeneficiaries extends Component {

    constructor(props) {
        super(props)
    
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeAcountNo = this.onChangeAcountNo.bind(this);
        // this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onChangePhoneNo = this.onChangePhoneNo.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        // State
        this.state = {
            first_name: '',
            last_name:'',
            acount_number:'',
            // email: '',
            phone_number:''
        }
      }
      componentDidMount() {
      console.log(this.props.match.params.email);

        Axios.get('http://localhost:8000/beneficiaries/edit/' + this.props.match.params.email)
        
          .then(res => {
            console.log(res.data);
            this.setState({
              first_name: res.data.Beneficiaries[0].first_name,
              last_name: res.data.Beneficiaries[0].last_name,
              acount_number: res.data.Beneficiaries[0].acount_number,
              phone_number: res.data.Beneficiaries[0].phone_number
            });
          })
          .catch((error) => {
            console.log(error);
          })
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
    // onChangeUserEmail(e) {
    //     this.setState({ email: e.target.value })
    // }
    
    onChangePhoneNo(e) {
        this.setState({ phone_number: e.target.value})
    }
    
      onSubmit(e) {
        e.preventDefault()
    
        const userObject = {
            first_name: this.state.first_name,
            last_name:this.state.last_name,
            acount_number:this.state.acount_number,
            email: this.state.email,
            phone_number:this.state.phone_number
          };
    
        Axios.put('http://localhost:8000/beneficiaries/' + this.props.match.params.email, userObject)
          .then((res) => {
            console.log(res.data.Beneficiaries)
            alert('Beneficiaries successfully updated')
            console.log('Beneficiaries successfully updated')
          }).catch((error) => {
            console.log(error)
          })
    
        // Redirect to Student List 
        this.props.history.push('/my_beneficiaries')
        // componentDidMount() {
          Axios.get('http://localhost:8000/beneficiaries')
              .then(res => {
                  // console.log(res.data);
                  this.setState({ userObject: res.data.Beneficiaries });
              })
              .catch(function (error) {
                  console.log(error);
              })
      
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
        <h3>Edit/Update Beneficiaries</h3>

        

        <form onSubmit={this.onSubmit}>
          <div className="form-row">
            <div className="col">
              <label htmlFor="firstName">First Name<span className="required">*</span></label>
              <input type="text" required  id="firstName" name="first_name" value={this.state.first_name} onChange={this.onChangeFirstName}   className="form-control" />
            </div>

            <div className="col">
              <label htmlFor="lastName">Last Name<span className="required">*</span></label>
              <input type="text" required name="lastName"
               id="lastName"  value={this.state.last_name} onChange={this.onChangeLastName} className="form-control" />
              </div>
          </div>

          <div className="form-row">
            <div className="col">
            <label htmlFor="accountNumber">Account Number<span className="required">*</span></label>
            <input type="text" 
            value={this.state.acount_number} onChange={this.onChangeAcountNo} name="acount_number"
            id="accountNumber"  className="form-control" />
            </div>

           
            <div className="col">
              <label htmlFor="phoneNumber">Phone Number<span className="required">*</span></label>
              <input type="text" className="form-control" name="phone_number"
              value={this.state.phone_number} onChange={this.onChangePhoneNo}  maxLength="10" placeholder="Phone Number"
                id="phoneNumber" />
          </div>
          
             </div>
             <div className=" text-left ">
                            <button type="submit" className="btn btn-outline-success m-2 p-2"> Update Beneficiaries </button>
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
