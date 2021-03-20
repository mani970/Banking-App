import Axios from 'axios';
import React, { Component } from 'react'
import LeftAdmin from './LeftAdmin'

export default class ManageCustomer extends Component {

    constructor(props) {
        super(props)

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onChangeAadharNo = this.onChangeAadharNo.bind(this);
        this.onChangePhoneNo = this.onChangePhoneNo.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeAcountNo = this.onChangeAcountNo.bind(this);
        this.onChangePin = this.onChangePin.bind(this);
        this.onChangeOpeningBalnce= this.onChangeOpeningBalnce.bind(this);

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            first_name: '',
            last_name:'',
            email: '',
            aadhar_no:'',
            phone_no:'',
            address:'',
            acount_no:'',
            pin:'',
            opening_balnce:''
        }
    }

    componentDidMount() {
        console.log(this.props.match.params.email);
  
          Axios.get('http://localhost:8000/myCustomer/' + this.props.match.params.email)
          
            .then(res => {
              console.log(res.data);
              this.setState({
                first_name: res.data.myCustomer[0].first_name,
                last_name:res.data.myCustomer[0].last_name,
                email: res.data.myCustomer[0].email,
                aadhar_no:res.data.myCustomer[0].aadhar_no,
                phone_no:res.data.myCustomer[0].phone_no,
                address:res.data.myCustomer[0].address,
                acount_no:res.data.myCustomer[0].acount_no,
                pin:res.data.myCustomer[0].pin,
                opening_balnce:res.data.myCustomer[0].opening_balnce
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
        onChangeUserEmail(e) {
            this.setState({ email: e.target.value })
        }
        onChangeAadharNo(e) {
            this.setState({ aadhar_no: e.target.value})
        }
        onChangePhoneNo(e) {
            this.setState({phone_no: e.target.value})
        }
        onChangeAddress(e) {
            this.setState({address: e.target.value})
        }
        onChangeAcountNo(e) {
            this.setState({acount_no: e.target.value})
        }
        onChangePin(e) {
            this.setState({pin: e.target.value})
        }
        onChangeOpeningBalnce(e) {
            this.setState({opening_balnce: e.target.value})
        }
    
        onSubmit(e) {
          e.preventDefault()
      
          const userObject = {
            first_name: this.state.first_name,
            last_name:this.state.last_name,
            gender:this.state.gender,
            email: this.state.email,
            aadhar_no:this.state.aadhar_no,
            phone_no:this.state.phone_no,
            address:this.state.address,
            acount_no:this.state.acount_no,
            pin:this.state.pin,
            opening_balnce:this.state.opening_balnce
            };
      
          Axios.put('http://localhost:8000/myCustomer/' + this.props.match.params.email, userObject)
            .then((res) => {
              console.log(res.data.myCustomer)
            alert(res.data.message)
              console.log('Customer successfully updated')
            }).catch((error) => {
              console.log(error)
            })
      
          // Redirect to Student List 
          this.props.history.push('/my-customer')
          // componentDidMount() {
            Axios.get('http://localhost:8000/myCustomer')
                .then(res => {
                    // console.log(res.data);
                    this.setState({ userObject: res.data.myCustomer });
                })
                .catch(function (error) {
                    console.log(error);
                })
        
        }
        

    render() {
    return (
        <div>
             <div className="row">
                    <div className="col-2"><LeftAdmin/></div>
                    <div className="col-10">
                        <div className="row">
                            <div className="col-2"></div>

                            <div className="col-8">
                            <div className="jumbotron col-10 mt-2 ">
                            <h3 className="text-center text-info m-2">Manage Customer</h3>
                            <form onSubmit={this.onSubmit}>        
                                {/* <input type="hidden"  name="customerId" id="customerId"  className="form-control" /> */}
                               

                                <div className="form-row">
                                    <div className="col">
                                    <label for="firstName">First Name</label>
                                    <input type="text"  minlength="3-10" 
                                    name="first_name" value={this.state.first_name} onChange={this.onChangeFirstName} id="firstName"   className="form-control"/>
                                    </div>
                                    
                                    <div className="col">
                                    <label for="lastName">Last Name</label>
                                    <input type="text" required name="last_name" value={this.state.last_name} onChange={this.onChangeLastName} class="form-control" />
                                    </div>
                                </div>
                                
                            <div className="form-row">
                                <div className="col">                               
                                    <label for="emailId">Email Id </label>                     
                                    <input type="email"  id="emailId" maxlength="30"   readOnly disabled
                                    required class="form-control" name="email" value={this.state.email}  placeholder="ex: user@gmail.com" />
                                </div>
                        
                                <div className="col">
                                    <label for="phoneNumber">Phone Number</label>
                                    <input type="text" name="phone_no" value={this.state.phone_no} onChange={this.onChangePhoneNo} maxLength="10" id="phoneNumber" required  class="form-control" />
                                </div>
                            </div>
                            <br/>
                            <div className="form-group">
                                <textarea class="form-control" rows="3"name="address" maxLength="200" value={this.state.address} onChange={this.onChangeAddress}   placeholder="Enter ur Address. " id="comment"></textarea>
                            </div> 
                                <div className="form-row">
                                <div class="col">
                                    <label for="pin">Aadhar No</label>
                                    <input type="text" class="form-control"  required disabled readOnly  name="aadhar_no" value={this.state.aadhar_no} maxLength="12" onChange={this.onChangeAadharNo}  />
                                    </div>

                                        <div className="col">
                                            <label for="openingBalance">Acount No </label>
                                            <input type="text"  required  id="acount_no" name="acount_no" maxLength="3" disabled value={this.state.acount_no} onChange={this.onChangeAcountNo}  className="form-control" readonly />
                                        </div>
                                </div>
                            
                                <div className="form-row">
                                <div className="col">
                                    <label for="pin">PIN</label>
                                    <input type="text" class="form-control"  required 
                                    name="pin" value={this.state.pin} maxLength="4" onChange={this.onChangePin}  />
                                    </div>

                                        <div className="col">
                                            <label for="openingBalance"> Opening Balance</label>
                                            <input type="text"  required  
                                             id="openingBalance" name="opening_balnce" maxLength="3" disabled value={this.state.opening_balnce} onChange={this.onChangeOpeningBalnce}  className="form-control" readonly />
                                        </div>
                                </div>

                            <br/>
                                    <button  type="submit" className="btn btn-outline-success"  >
                                        Update Customer
                                    </button>
                        </form>
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