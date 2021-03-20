import Axios from 'axios';
import React, { Component } from 'react'
import LeftCustomer from './LeftCustomer'

export default class Transcation extends Component {

    constructor(props) {
        super(props);
        this.state = { transcation: [] }
    }
    
    componentDidMount() {
        Axios.get('http://localhost:8000/transcation')
            .then(res => {
                this.setState({ transcation: res.data.transcation });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    
    render() {
    return (
        <div>
            <div className="row ">
                    <div className="col-2"><LeftCustomer/></div>
                    <div className="col-10">
                        <h2 className="text-center text-white m-2 p-2">Transcation History </h2>
                        
                    <table className="table table-bordered table-striped  table-condensed  table-light table-hover container col-9 ">
                    <thead className="thead-light">
                     <tr className="bg-info">
                        <th>Credit Amount</th>
                        <th>Debit Amount</th>
                        <th>Remarks</th>
                    </tr>
                    </thead>
                    <tbody>
                        { this.state.transcation.map( data => ( 
                             <tr>
                             <td>
                                 {data.credit_amount}
                             </td>
                             <td>
                                 {data.debit_amount}
                             </td>
                             <td>
                                 {data.remark}
                             </td>
                         </tr>
                        ) ) }
                       
                    </tbody>
                    </table>

                    </div>
                </div>
        </div>
    )
}
}