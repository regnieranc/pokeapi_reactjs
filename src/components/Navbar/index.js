import React from 'react'
import poke from "./../../assets/img/poke.png"

export default class index extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="col-12 text-center mb-3">
                <img src={poke} />
            </div>
        );
    }
}