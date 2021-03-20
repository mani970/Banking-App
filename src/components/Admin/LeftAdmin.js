import React  from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Admin.css';

export default function  LeftAdmin()   {

    const history = useHistory();

    const logout=(e)=>{
  
          e.preventDefault();
      
          localStorage.removeItem('token')
          localStorage.removeItem('role')
          history.push('/logout')
          
        }

    return (
        <div>
             <div className="list-group container sidebar">
            <Link to="/admin" className="p-3 list-group-item list-group-item-action list-group-item-light"><i className="fa fa-fw fa-home"></i> Home</Link>
            <Link to="/my-customer" className="p-3 list-group-item list-group-item-action list-group-item-light"><i className="fa fa-users" aria-hidden="true"></i><b>  My Customer</b></Link>
            <Link to="/add-customer" className="p-3 list-group-item list-group-item-action list-group-item-light"><i className="fa fa-user-plus" aria-hidden="true"></i> Add Customer</Link>
            <Link to="/cust-griv" className="p-3 list-group-item list-group-item-action list-group-item-light"><i className="fa fa-comments" aria-hidden="true"></i>  Customer Help</Link>
            <Link to="/view_news" className="p-3 list-group-item list-group-item-action list-group-item-light"> <i className="fa fa-newspaper" aria-hidden="true"></i>  View News</Link>
            <Link to="/post-news" className="p-3 list-group-item list-group-item-action list-group-item-light"> <i className="fa fa-newspaper-o" aria-hidden="true"></i>  Post News</Link>
            <Link to="/contactus" className="p-3 list-group-item list-group-item-action list-group-item-light"><i class="fa fa-phone" aria-hidden="true"></i>   <b>Contact Us</b></Link>
            <Link to="/logout" className="p-3 list-group-item list-group-item-action list-group-item-light" ><i class="fa fa-sign-out" aria-hidden="true"></i>  <button  onClick={logout} style={{ border:"none", outline:'none' , background:"transparent" , color:"grey" }}>Logout</button> </Link>
            <Link to="#" className="list-group-item p-5"></Link>
            <Link to="#" className="list-group-item p-5"></Link>
            <Link to="#" className="list-group-item p-5"></Link>
            {/* <Link to="#" className="list-group-item p-5"></Link> */}
            
            </div>
        </div>
    )
}