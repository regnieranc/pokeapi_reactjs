import React from 'react'

export default class index extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            cantidad: 18
        }
    }

    escribir = e => {
        this.setState({cantidad: e.target.value})

    }

    click = () => {
        this.props.configurar(this.state.cantidad)
        console.log(this.state)
    }

    render(){
        return(
            <div className="col-sm-12 col-md-4 mt-2">
                <div className="row p-5 border border-danger rounded mx-0">
                    <input onChange = {this.escribir} className="form-control col-sm-6" placeholder="resultados por pagina" value={this.state.cantidad}/>
                    {
                        !this.props.check ? 
                        <button onClick={this.click} className="btn btn-outline-danger offset-sm-1 col-sm-5">Actualizar</button> : 
                        <div className="col-sm-6 text-right"><div className="spinner-border text-danger" role="status">
                            <span className="sr-only"></span>
                        </div></div>
                    }
                   
                </div>
                    
            </div>

        );
    }
}