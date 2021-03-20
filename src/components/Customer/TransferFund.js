import React, { Component, Fragment } from 'react'
import LeftCustomer from './LeftCustomer'

export default class TransferFund extends Component {
  constructor(props){
    super(props);
    this.state ={
      receiverName: "",
      accountNumber : "",
      amount : "",

    };
  }
  handleChange = e => {
    this.setState({[e.target.name] : e.target.value});
  };

  handleSubmit = async e => {
    e.preventDefault()

    // let {receiverName, accountNumber, amount} = this.state;
  }
 

  render() {
    let {receiverName, accountNumber, amount} = this.state;
    return (
      <Fragment>
            <div className="row ">
                    <div className="col-2"><LeftCustomer/></div>
                    <div className="col-10">
                    <div className="row">
                            <div className="col-2"></div>
                            <div className="col-8">

                            <div className="jumbotron mt-5">
        <div className="form">
          <h2 className="text-center text-info m-2">Transfer Funds</h2>
          <form onSubmit={this.handleSubmit}>

              <div className="form-group">
              <label htmlFor="receiverName">Receiver Name<span className="required text-danger"> * </span></label>
                <input type="text" minlength="3-10"
                 name="receiverName" id="receiverName"  value={receiverName} onChange={this.handleChange}   className="form-control" placeholder="Receiver Name " required />
              </div>

            <div className="form-row">

                <div className="col">
                  <label htmlFor="accountNumber">Account Number<span className="required text-danger"> *</span></label>
                  <input type="text" name="accountNumber" id="accountNumber" value={accountNumber} onChange={this.handleChange}  class="form-control" placeholder="Account Number " required />
                </div>

                <div className="col">
                  <label htmlFor="amount">Enter Amount (in INR)<span className="required text-danger"> *</span></label>
                  <input type="text" name="amount" id="amount" value={amount} onChange={this.handleChange}
                   className="form-control" placeholder="Enter Amount (in INR) " maxLength="6" required />
                </div>
              
                <div className="col">
                <label htmlFor="pin">Pin<span className="required text-danger"> *</span></label>
                <div className="input-group mb-3">
                    <input type="text" name="pin" id="pin" 
                     class="form-control" placeholder="PIN " maxLength="4" required />
                </div>
                  
            </div>

               </div>
               <div className=" text-left ">
                            <button type="submit" className="btn btn-outline-success m-2 p-2"> Submit</button>
                            <button type="reset" className="btn btn-outline-info m-2 p-2"> Reset</button>
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