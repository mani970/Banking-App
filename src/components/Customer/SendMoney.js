import Axios from 'axios';
import React, { Component, Fragment } from 'react'
import LeftCustomer from './LeftCustomer'

export default class SendMoney extends Component {

    constructor(props) {
        super(props)
    
        this.onChangeId = this.onChangeId.bind(this);
        this.onChangeDebitAmount = this.onChangeDebitAmount.bind(this);
        this.onChangeReamark = this.onChangeReamark.bind(this);
    
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
          id: '',
          debit_amount:'',
          remark:'',
        }
    }
    
    onChangeId(e) {
        this.setState({ id: e.target.value })
    }
    onChangeDebitAmount(e) {
        this.setState({ debit_amount: e.target.value })
    }
    onChangeReamark(e) {
        this.setState({ remark: e.target.value })
    }
    
    onSubmit(e) {
        e.preventDefault()
    
        const transcationObject = {
          id: this.state.id,
          debit_amount:this.state.debit_amount,
          remark:this.state.remark,
        };
        Axios.post('http://localhost:8000/transcation/send', transcationObject)
            .then((res) => {
                console.log(res.data)
                // alert(res.data.message);
                alert(' Transcation Successfull ');
            }).catch((error) => {
                console.log(error)
            });
    
        this.setState({ id:'', debit_amount:'',remark:''})
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
                    <form onSubmit={this.onSubmit}>
                    <div class="card text-center col-8  p-3 m-5 card_section">
                            <div className="card-header col-12">
                            <h3 className="text-center text-info "> Send Money </h3>
                            </div>
                            <br/>
                            
                             <div className="card-body m-1 p-2 text-center">
                        
                            <div className="form-group ">
                            <input type="text" className="form-control" placeholder="Enter Amount (in INR) " name="debit_amount" value={this.state.debit_amount} onChange={this.onChangeDebitAmount}  required />
                            </div>
                            <br/>
                               
                            <div className="form-group ">
                            <textarea className="form-control" rows="3" placeholder="Remarks . "   name="remark" value={this.state.remark} onChange={this.onChangeReamark}  required ></textarea>
                            </div> 
                        
                                <div className="card-footer text-left ">
                            <button type="submit" className="btn btn-outline-success m-2 p-2"> Submit</button>
                            <button type="reset" className="btn btn-outline-info m-2 p-2"> Reset</button>
                       </div>
                            </div>
                    </div>
                    </form>
                    </div>
                    <div className="col-2"></div>
                   </div>
                    </div>
                </div>
        </Fragment>
    )
}
}