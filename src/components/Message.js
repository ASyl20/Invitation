import React from 'react'
import styles from '../index.css'

export default class Message extends React.Component{
    
    render(){
      const rendu = () =>{
          if(this.props.name !== 'Anthony')
            return(
                <div className="card-body">
                <h5 className="card-title text-center">Votre invitation {this.props.name}</h5>
                    <p className="card-text text-center">
                    Pour la soirée sur le programme:
                    <br/>
                    20-1h : Jeux vidéos 
                    <br/>
                    1h-to the moon : films pozey
                    <br/>
                    Samedi matin : 
                    <br/>
                    Jeux de société ( Loup,cartes etc) 
                    <br/>
                    Samedi après-midi:
                    <br/>
                    YOLO
                    <br/>
                    Samedi soir 20h: Clown Fiesta
                    </p>
                    
                </div>
            )
            if(this.props.name === 'Anthony'){
                return(
                    <div className="card-body">
                        <h1 className="text-center">VIP ACCESS</h1>
                    </div>
                )
            }
        }
        return(
            <div className="card rounded">
            
                {rendu()}
            
            </div>
        )
    }
}