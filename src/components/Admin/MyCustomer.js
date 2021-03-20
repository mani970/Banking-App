import Axios from 'axios';
import React , { Component} from 'react'
import { Link } from 'react-router-dom';
import LeftAdmin from './LeftAdmin'


export default class  MyCustomer extends Component {

  constructor(props) {
    super(props);
    this.state = { customer: [] }
    this.deleteCustomer = this.deleteCustomer.bind(this);
}

deleteCustomer = (email) => {
  if (window.confirm('Are you sure to delete this record?')) {
  Axios.delete('http://localhost:8000/myCustomer/'+ email)
  .then((res) => {
      console.log('Beneficiaries successfully deleted!')
      alert('Deleted succesfully')
      this.setState({
        customer: this.state.customer.filter(user => user.email !== email)
      })
  }).catch((error) => {
      console.log(error)
  })
}
}

componentDidMount() {
    Axios.get('http://localhost:8000/myCustomer')
        .then(res => {
          console.log(res.data);
            this.setState({ customer: res.data.myCustomer });
        })
        .catch(function (error) {
            console.log(error);
        })
}


    render() {
    return (
        <div>
            <div className="row ">
                    <div className="col-2"><LeftAdmin/></div>
                    <div className="col-10">
                      <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8">

                    <h2 className="text-center text-white ">List of Customers</h2>
                       <table className="table table-hover table-light table-bordered mt-3 col-8 table-condensed ">
                    <thead className="thead-light">
                      <tr className="bg-info">
                        <th scope="col"> Name</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Email Id</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Address</th>
                        <th scope="col">Account No</th>
                        <th scope="col">Opening Balance</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      { this.state.customer.map(data => (
                            <tr>
                            <td>
                              {data.first_name} {data.last_name}
                            </td>
                            <td>{data.gender}</td>
                            <td>{data.email}</td>
                            {/* <td>{data.aadhar_no}</td> */}
                            <td>{data.phone_no}</td>
                            <td>{data.address}</td>
                            <td>{data.acount_no}</td>
                            {/* <td>{data.pin}</td> */}
                            <td>{data.opening_balnce}</td>
                            <td>
                            <Link to={"/manage_customer/"+data.email} ><button type="submit"  style={{ cursor:"pointer"}} className="btn text-info fas fa-pencil-alt" ></button></Link>
                            <button  onClick={() => this.deleteCustomer(data.email)}  className="btn text-danger far fa-trash-alt"> </button> 
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