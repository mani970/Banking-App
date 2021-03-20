import React, { Component, Fragment } from 'react'
import LeftCustomer from './LeftCustomer'
import '../Admin/Admin.css'
import Axios from 'axios';

export default class  SubmitGriv extends Component {

    constructor(props) {
        super(props)

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeAcountNo = this.onChangeAcountNo.bind(this);
        this.onChangePhoneNo = this.onChangePhoneNo.bind(this);
        this.onChangeDetails = this.onChangeDetails.bind(this);
        this.onChangeBranchName = this.onChangeBranchName.bind(this);
        this.onChangeBranchCity = this.onChangeBranchCity.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name: '',
            email:'',
            acount_number:'',
            phone_number: '',
            details:'',
            branch_name:'',
            branch_city:'',
            address:''
        }
    }

    onChangeName(e) {
        this.setState({ name: e.target.value })
    }
    onChangeEmail(e) {
        this.setState({ email: e.target.value })
    }
    onChangeAcountNo(e) {
        this.setState({ acount_number: e.target.value })
    }
    onChangePhoneNo(e) {
        this.setState({ phone_number: e.target.value })
    }
    onChangeDetails(e) {
        this.setState({ details: e.target.value})
    }
    onChangeBranchName(e) {
        this.setState({branch_name: e.target.value})
    }
    onChangeBranchCity(e) {
        this.setState({branch_city: e.target.value})
    }
    onChangeAddress(e) {
        this.setState({address: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault()

        const userObject = {
            name: this.state.name,
            email: this.state.email,
            acount_number:this.state.acount_number,
            phone_number:this.state.phone_number,
            details:this.state.details,
            branch_name:this.state.branch_name,
            branch_city:this.state.branch_city,
            address:this.state.address
        };
        Axios.post('http://localhost:8000/help', userObject)
            .then((res) => {
                console.log(res.data);
                alert(res.data.message)
            }).catch((error) => {
                console.log(error)
            });

        this.setState({ name: '',email: '',acount_number:'',phone_number:'',details:'',branch_name:'',branch_city:'',address:'' })
    }


    render() {
    return (
            <Fragment>
                <div className="row ">
                    <div className="col-2"><LeftCustomer/></div>
                    <div className="col-10">
                    <div className="row">
                            <div className="col-2"></div>
                            <div className="col-8">
                    <div className="card text-center col-9  m-3 p-3 card_section">
                        <div className="card-header col-12">
                        <h3 className="text-info">Online Help !!</h3>
                        </div>
                        <div className="card-body m-2 p-2">
                        <form onSubmit={this.onSubmit}>

                        <div className="form-row">
                            <div className="col">
                            <input type="text" className="form-control" placeholder="Full Name" name="name" value={this.state.name} onChange={this.onChangeName}  required/>
                            </div>
                            <div className="col">
                            <input type="text" className="form-control" placeholder="Email ID" name="email" value={this.state.email} onChange={this.onChangeEmail} required/>
                            </div>
                        </div> <br/>
                        <div className="form-row">
                            <div className="col">
                            <input type="text" className="form-control" placeholder="Account Number" maxLength="13" name="acount_number" value={this.state.acount_number} onChange={this.onChangeAcountNo} required/>
                            </div>
                            <div className="col">
                            <input type="text" className="form-control" placeholder="Phone Number" maxLength="10" name="phone_number" value={this.state.phone_number} onChange={this.onChangePhoneNo} required/>
                            </div>
                        </div> <br/>
                       
                        <div className="form-group">
                                <input type="text" placeholder="Details of Complaint" className="form-control" name="details" value={this.state.details} onChange={this.onChangeDetails} required />
                            </div>
                            <div className="form-row">
                            <div className="col">
                            <input type="text" className="form-control" placeholder="Branch Name" name="branch_name" value={this.state.branch_name} onChange={this.onChangeBranchName} required/>
                            </div>
                            <div className="col">
                            <input type="text" className="form-control" placeholder="Branch City" name="branch_city" value={this.state.branch_city} onChange={this.onChangeBranchCity} required/>
                            </div>
                        </div>    <br/> 
                        
                        <div className="form-group">
                        <textarea className="form-control" rows="3" placeholder="Enter ur Address. " id="comment" name="address" value={this.state.address} onChange={this.onChangeAddress}></textarea>
                        </div> 

                       <div className="card-footer text-left">
                            <button type="submit" className="btn btn-outline-info"> Submit </button>
                       </div>
                        </form>
                        </div>
                    </div>
                    </div>
                    <div className="col-2"></div>
                    </div>
                    </div>
                </div>
</Fragment>
    )
}
}