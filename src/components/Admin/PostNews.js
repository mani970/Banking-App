import React, { Component } from 'react'
import LeftAdmin from './LeftAdmin'
import './Admin.css'
import Axios from 'axios';

export default class PostNews extends Component {
     
  constructor(props) {
    super(props)

    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeHeadline = this.onChangeHeadline.bind(this);
    this.onChangeDetails = this.onChangeDetails.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      id: '',
      headline:'',
      details:'',
    }
}

onChangeId(e) {
    this.setState({ id: e.target.value })
}
onChangeHeadline(e) {
    this.setState({ headline: e.target.value })
}
onChangeDetails(e) {
    this.setState({ details: e.target.value })
}

onSubmit(e) {
    e.preventDefault()

    const newsObject = {
      id: this.state.id,
      headline:this.state.headline,
      details:this.state.details,
    };
    Axios.post('http://localhost:8000/news', newsObject)
        .then((res) => {
            console.log(res.data)
            // alert(res.data.message);
            alert(' News  added Successfully ');
        }).catch((error) => {
            console.log(error)
        });

    this.setState({ id:'', headline:'',details:''})
}

    render() {
    return (
        <div>
             <div className="row">
                    <div className="col-2"><LeftAdmin/></div>
                    <div className="col-10">
                    <div className="row">
                            <div className="col-2"></div>
                            <div className="col-8">
                       {/* <h1>Post News page </h1> */}
                       <form onSubmit={this.onSubmit}>

                       <div className="card text-center col-10 m-3 mt-5 p-3 card_section">
                                    <div className="card-header col-12">
                                    <h3 className="text-info"> Fill Latest News details...</h3>
                                    </div>
                                <div className="card-body m-2 p-2">
                                    <input type="hidden" name="id" value={this.state.id} onChange={this.onChangeId} required />
                                    <div className="form-row">
                                        <div className="col">
                                        <input type="text" className="form-control" name="headline" placeholder="Write News HeadLine"  value={this.state.headline} onChange={this.onChangeHeadline} required/>
                                        </div>   
                                    </div>
                                    <br/> 
                                    <div className="form-group">
                                         <textarea className="form-control" rows="5" name="details" value={this.state.details} onChange={this.onChangeDetails} placeholder="Write the Details.. " id="comment" required></textarea>
                                    </div>  
                                </div>
                        
                                    <div className="card-footer text-left">
                                            <button type="submit" className="btn btn-outline-info"> Post News </button>
                                    </div>
                        </div>
                    </form>
                    </div>
                    <div className="col-2"></div>
                    </div>                    
                </div>
        </div>
        </div>
    )
}}
