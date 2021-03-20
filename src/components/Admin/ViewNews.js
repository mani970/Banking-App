import Axios from 'axios';
import React, { Component } from 'react'
import LeftAdmin from './LeftAdmin'

export default class ViewNews extends Component {

    constructor(props) {
        super(props);
        this.state = { newsData: [] } 
        this.deleteNews = this.deleteNews.bind(this);
    }

    deleteNews = (id) => {
        if (window.confirm('Are you sure to delete this record?')) {
        Axios.delete('http://localhost:8000/news/'+ id)
        .then((res) => {
            console.log('News successfully deleted!')
            alert('Deleted succesfully')
            this.setState({
                newsData: this.state.newsData.filter(user => user.id !== id)
            })
        }).catch((error) => {
            console.log(error)
        })
    }}

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
                    <div className="col-2"><LeftAdmin/></div>
                    <div className="col-10">
                        <br/>
                    <h1 className="text-center text-light " style={{textShadow:" 2px 2px black"}} > News Section 📰 </h1>
                    <div className="row">
                            <div className="col-2"></div>
                            <div className="col-8">
                    <hr style={{borderTop: "2px solid lightgrey" , width:"90%" , marginBottom:"2px" }} /> 
                    <br/>
                        { this.state.newsData.map( data => (
                        <div className="card m-3 p-2 col-10">
                            <div className="card-header">
                            <h5 className=" text-info" style={{textTransform:"capitalize "}}> {data.headline} <button size="sm" onClick={() => this.deleteNews(data.id)} className="btn text-danger text-right fa fa-trash-alt"  style={{ float:"right" }}  ></button> </h5> 
                            
                            </div>
                            <div className="card-body">
                              <p className="card-text">{ data.details} </p>
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
