import Axios from 'axios'
import React, { Component, Fragment } from 'react'
import LeftAdmin from './LeftAdmin'

export default class Contactus extends Component {

    constructor(props) {
        super(props);
        this.state = { contactCollection: [] } 
    }

    componentDidMount() {
        Axios.get('http://localhost:8000/contact')
            .then(res => {
                console.log(res.data);
                this.setState({ contactCollection: res.data.contact });
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
                            <div className="col-8">
                                <div className="card m-3 p-3">
                                    <div className="header">
                                    <h2 className="text-center text-info"> Contact History Of Customers . </h2>
                                    </div>
                                    <div className="body">
                                    <table class="table table-hover table-light table-bordered  table-condensed  mt-3">
                                    <thead className="thead-light">
                                        <tr className="bg-info">
                                        <th scope="col">Full Name</th>
                                        <th scope="col">Email Id</th>
                                        <th scope="col">Message </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.contactCollection.map(data => (
                                            <tr>
                                                <td>
                                                    {data.name}
                                                </td>
                                                <td>
                                                    {data.email}
                                                </td>
                                                <td>
                                                    {data.message}
                                                </td>
                                            </tr>
                                        ))}

                                    </tbody>
                            </table>

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