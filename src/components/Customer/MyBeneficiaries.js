import Axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import LeftCustomer from './LeftCustomer'

export default class MyBeneficiaries extends Component {

    constructor(props) {
        super(props);
        this.state = { usersCollection: [] } 
        this.deleteBeneficiaries = this.deleteBeneficiaries.bind(this);
    }

    deleteBeneficiaries = (email) => {
        if (window.confirm('Are you sure to delete this record?')) {
        Axios.delete('http://localhost:8000/beneficiaries/'+ email)
        .then((res) => {
            console.log('Beneficiaries successfully deleted!')
            alert('Deleted succesfully')
            this.setState({
                usersCollection: this.state.usersCollection.filter(user => user.email !== email)
            })
        }).catch((error) => {
            console.log(error)
        })
    }}
    componentDidMount() {
        Axios.get('http://localhost:8000/beneficiaries')
            .then(res => {
                console.log(res.data);
                this.setState({ usersCollection: res.data.Beneficiaries });
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
                                <br/>
                            <h2 className="text-center text-white">List of Beneficiaries</h2>
                            <table class="table table-hover table-light table-bordered  table-condensed  mt-3">
                                    <thead className="thead-light">
                                        <tr className="bg-info">
                                        <th scope="col">Full Name</th>
                                        <th scope="col">Account Number</th>
                                        <th scope="col">Email Id</th>
                                        <th scope="col">Phone Number</th>
                                        <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.usersCollection.map(data => (
                                            <tr>
                                                <td>
                                                    {data.first_name}  {data.last_name}
                                                </td>
                                                <td>
                                                    {data.acount_number}
                                                </td>
                                                <td>
                                                    {data.email}
                                                </td>
                                                <td>
                                                    {data.phone_number}
                                                </td>
                                                <td >
                                                <Link to={"/edit_beneficiaries/"+data.email}><button size="sm" style={{ cursor:"pointer"}} className="btn text-info fas fa-pencil-alt"></button></Link>
                                                <button size="sm" onClick={() => this.deleteBeneficiaries(data.email)} className="btn text-danger far fa-trash-alt"></button>
                                                </td>
                                            </tr>
                                        ))}

                                    </tbody>
                            </table>

                            </div>
                            <div className="col-2"></div>
                        </div>
                    </div>
              </div>          
        </div>
    )
}
}