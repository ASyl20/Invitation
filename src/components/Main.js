import React from 'react'
import * as firebase from 'firebase';
import Message from './Message'


export default class Main extends React.Component{

    state = {
        message :"",
        valide : false,
        name:null,
        messages:null
    }
    

    check = (e) =>{
        const message = e.target.value
        this.setState({message})
    }
    valide = () =>{
        
        const users = firebase.database().ref().child('users')
        users.on('child_added',snap=>{
            if(this.state.message == snap.key){
                this.setState({valide:true})
                this.setState({name:snap.val().name})
                const messages= <Message name={this.state.name}/>
                    this.setState({messages})
            }
            else
                console.log("Echec")
                // 107887551e18e18be6e3687a01eff759e9dfd9180c2003206d3268d6a24415e5
        })
    }

     
    render(){
        return(
            <div className="container">
            <br/>
                <h1 className="text-center c">Access card</h1>
                <br/>
                <div className="card text-right" >
                    <div className="card-body">
                    <h5 className="card-title">Entrez votre code d'accèss</h5>
                    <p className="card-text">RDV : 16 février 20h <br/> 18 février dès 12h</p>
                    <input
                        type="password"
                        className="form-control"
                        value={this.state.message}
                        onChange={(e)=>this.check(e)}
                         />
                        <br/>
                    <a href="#" className="btn bg-theme" onClick={(e)=>this.valide(e)}>Validez</a>
                    </div>
                    </div>
                    <br/>
                    {this.state.messages}
                </div>
        )
    }
}