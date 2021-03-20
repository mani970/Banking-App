import Axios from 'axios';
import React, { Component } from 'react'
import LeftCustomer from './LeftCustomer'

export default class ViewNewsPage extends Component {

    constructor(props) {
        super(props);
        this.state = { newsData: [] } 
    }

    componentDidMount() {
        Axios.get('http://localhost:8000/news')
            .then(res => {
                console.log(res.data);
                this.setState({ newsData: res.data.news });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-2"><LeftCustomer /></div>
                    <div className="col-10">
                        <br/>
                    <h1 className="text-center text-light " style={{textShadow:" 2px 2px black"}} > News Section 📰 </h1>
                    <div className="row">
                            <div className="col-2"></div>
                            <div className="col-8">
                    <hr style={{borderTop: "2px solid lightgrey" , width:"100%" , marginBottom:"2px" }} /> 

                        { this.state.newsData.map( data => (
                        <div className="card m-3 p-2 col-10">
                            <h5 className="card-header text-info" style={{textTransform:"capitalize "}}> {data.headline} </h5>
                            <div className="card-body">
                              <p className="card-text">{ data.details}</p>
                            </div>
                        </div>
                        ))
                        }
                    </div>
                    <div className="col-2"></div>
</div>
                    </div>
                </div>
            </div>
        )
    }
}
