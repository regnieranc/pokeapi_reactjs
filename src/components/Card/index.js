import React from 'react'

export default class index extends React.Component{
    constructor(props){
        super(props)
    }

    
    
    render(){
        return(
            <div className="col-md-4 col-lg-4 col-sm-12 my-2">
                <div className="card border border-danger">
                    <img className="card-img-top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.index}.png`}/>
                    <div className="card-body">
                        <h5 className="card-title text-center">{this.props.title}</h5>
                        <div className="text-center"><a className="card-text" href={this.props.url} target="_blank">mas info</a></div>
                    </div>
                </div>
            </div>
            
        )
    }
}