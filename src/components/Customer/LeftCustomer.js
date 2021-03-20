import React  from 'react'
import { Link, useHistory } from 'react-router-dom'

export default function LeftCustomer() {

  const history = useHistory();

  const logout=(e)=>{

        e.preventDefault();
    
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        history.push('/logout')
        
      }
    return (
        <div>
            <div className="list-group container">
            <Link to="/customer" className="p-3 list-group-item list-group-item-action list-group-item-light"><i className="fa fa-fw fa-home"></i> <b>Home</b> </Link>
            <Link to="/my_transcation" className="p-3 list-group-item list-group-item-action list-group-item-light"><i class="fa fa-exchange" aria-hidden="true"></i>   My Transcation</Link>
            <Link to="/send" className="p-3 list-group-item list-group-item-action list-group-item-light"><i class="fa fa-dollar" aria-hidden="true"></i>  Send Money  </Link>
            <Link to="/beneficiaries" className="p-3 list-group-item list-group-item-action list-group-item-light"><i class="fa fa-star" aria-hidden="true"></i> Beneficiaries  </Link>
            <Link to="/my_beneficiaries" className="p-3 list-group-item list-group-item-action list-group-item-light"><i class="fa fa-star" aria-hidden="true"></i>  MyBeneficiaries  </Link>
            <Link to="/view-news" className="p-3 list-group-item list-group-item-action list-group-item-light"><i class="fa fa-newspaper" aria-hidden="true"></i>   View News </Link>
            <Link to="/contact" className="p-3 list-group-item list-group-item-action list-group-item-light"><i class="fa fa-phone" aria-hidden="true"></i>   <b>Contact Us</b></Link>
            <Link to="/submit_griveance" className="p-3 list-group-item list-group-item-action list-group-item-light "><i class="fa fa-comments" aria-hidden="true"></i>  Online Help   </Link>
            <Link to="/logout" className="p-3 list-group-item list-group-item-action list-group-item-light"    ><i class="fa fa-sign-out" aria-hidden="true"></i> <button  onClick={logout} style={{ border:"none", outline:'none', background:"transparent" , color:"grey" }}>Logout</button> </Link>
            <Link to="#" className="list-group-item p-5"></Link>
            <Link to="#" className="list-group-item p-5"></Link>
            </div>
        </div>
    )
}
