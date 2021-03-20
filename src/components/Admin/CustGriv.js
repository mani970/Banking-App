import Axios from 'axios';
import React, { Component, Fragment } from 'react'
import LeftAdmin from './LeftAdmin'

export default class CustGriv extends Component {

    constructor(props) {
        super(props);
        this.state = { helpCollection: [] } 
    }

    componentDidMount() {
        Axios.get('http://localhost:8000/help')
            .then(res => {
                console.log(res.data);
                this.setState({ helpCollection: res.data.help });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
    return (
        <Fragment>
            <div className="row">
                    <div className="col-2"><LeftAdmin/></div>
                    <div className="col-10">
                        <div className="row">
                            <div className="col-2"></div>
                            <div className="col-8"> </div>
                            <div className="card m-3 p-3 col-11">
                                    <div className="header">
                                    <h2 className="text-center text-info"> Customer Problems . </h2>
                                    </div>
                                    <div className="body">
                                    <table class="table table-hover table-light table-bordered  table-condensed  mt-3">
                                    <thead className="thead-light">
                                        <tr className="bg-info">
                                        <th scope="col">Full Name</th>
                                        <th scope="col">Email Id</th>
                                        <th scope="col">Acount</th>
                                        <th scope="col">Phone</th>
                                        <th scope="col">Details of Complaint </th>
                                        <th scope="col">Branch </th>
                                        <th scope="col">Address </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.helpCollection.map(data => (
                                            <tr>
                                                <td>
                                                    {data.name}
                                                </td>
                                                <td>
                                                    {data.email}
                                                </td>
                                                <td>
                                                    {data.acount_number}
                                                </td>
                                                <td>
                                                    {data.phone_number}
                                                </td>
                                                <td>
                                                    {data.details}
                                                </td>
                                                <td>
                                                    {data.branch_name} , {data.branch_city}
                                                </td>
                                                <td>
                                                    {data.address}
                                                </td>
                                            </tr>
                                        ))}

                                    </tbody>
                            </table>

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