import React from 'react'

export default class Message extends React.Component{
    render(){
        return(
            <div className="card" >
            <div className="card-body">
                <h5 className="card-title">Votre invitation {this.props.name}</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="text-left btn btn-primary">Go somewhere</a>
            </div>
            </div>
        )
    }
}