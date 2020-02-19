import React from 'react'
import Card from "./../Card"

export default class extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            basura : [1,1,1,1,1,1,1,1,1]
        }
    }

     componentDidMount(){
        console.log(this.props)
    }

    componentDidUpdate(){
        console.log(this.props)
    }

    capitalizeFirstLetter = string => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    render(){
        return(
            <div className="col-sm-12 col-md-8">
                <div className="row">
                    {
                        this.props.pokemones ? 
                        this.props.pokemones.map((ele, index) => {
                            return <Card
                                key = {index}
                                title={this.capitalizeFirstLetter(ele.name)}
                                url={ele.url}
                                index={ele.url.split('/')[6]}
                            />
                        }) : 
                        this.state.basura.map((ele, index) => {
                            return (
                                    <div key={index} className="m-1 card col-md-4 col-lg-3 col-sm-12">
                                        <div className="card-body">
                                            <div key={index} className="spinner-border text-success" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                        </div>
                                    </div>)
                                    })
                    }
                </div>
            </div>
        )
    }
}