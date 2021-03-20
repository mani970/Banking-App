import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import Admin from './components/Admin/Admin';
import Customer from './components/Customer/Customer'
import MyCustomer from './components/Admin/MyCustomer';
import Header from './components/Header/Header';
import AddCustomer from './components/Admin/AddCustomer';
import ManageCustomer from './components/Admin/ManageCustomer';
import CustGriv from './components/Admin/CustGriv';
import PostNews from './components/Admin/PostNews';
import Transcation from './components/Customer/Transcation';
import TransferFund from './components/Customer/TransferFund';
import SendMoney from './components/Customer/SendMoney';
import SubmitGriv from './components/Customer/SubmitGriv';
import HomePage from './components/HomePage/HomePage';
import Login from './components/Login/Login';
import Register from './components/Signup/Register';
import Beneficiaries from './components/Customer/Beneficiaries';
import MyBeneficiaries from './components/Customer/MyBeneficiaries';
import EditBeneficiaries from './components/Customer/EditBeneficiaries';
import Contactus from './components/Admin/Contactus';
import ViewNews from './components/Admin/ViewNews';
import Logout from './components/Signup/Logout';
import ViewNewsPage from './components/Customer/ViewNewsPage';


function App() {
  return (
    <div className="App">
     
    <Header/>
    <Router>

       <Switch>

         <Route exact path="/" component={HomePage}/>
         <Route path="/login" component={Login}/>
         <Route path="/logout" component={Logout} />
      
        <Route path="/contact" component={Contact}/>
        <Route path="/register" component={Register}/>

        {/* Customer Part Routing */}
        <Route path="/customer" component={Customer}/>
        <Route path="/my_transcation" component={Transcation} />
        <Route path="/transfer_fund" component={TransferFund} />
        <Route path="/send" component={SendMoney} />
        <Route path="/submit_griveance" component={SubmitGriv} />
        <Route path="/beneficiaries" component={Beneficiaries} />
        <Route path="/my_beneficiaries" component={MyBeneficiaries} />
        <Route path="/edit_beneficiaries/:email" component={EditBeneficiaries} />
        <Route path="/view-news" component={ViewNewsPage } />

        {/* Admin Part Routing */}
        <Route path="/admin" component={Admin}/>
        <Route path="/my-customer" component={MyCustomer} />
        <Route path="/add-customer" component={AddCustomer} />
        <Route path="/manage_customer/:email" component={ManageCustomer}/>
        <Route path="/cust-griv" component={CustGriv} />
        <Route path="/post-news" component={PostNews} />
        <Route path="/contactus" component={Contactus} />
        <Route path="/view_news"  component={ViewNews} />
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
