import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Configuracion from './components/Configuracion'
import Resultados from './components/Resultados'
import Paginacion from './components/Paginacion'


export default class App extends Component {

    constructor(props){
        super(props)
        this.state = {
            result: null,
            limit: 18,
            load:false
        }
    }

    componentDidMount(){
        this.get_result(`https://pokeapi.co/api/v2/pokemon/?limit=${this.state.limit}&offset=0`)
    }

    paginar = async (pagina) => {
        this.setState({result: null})
        let url = `https://pokeapi.co/api/v2/pokemon/?limit=${this.state.limit}&offset=${this.state.limit*(pagina - 1)}`
        this.get_result(url)
    }

    get_result = async (url) => {
        try{
            let result = await fetch(url)
            let json = await result.json()
            this.setState({result: json.results})
        }catch(e){
            console.log(e)
        }
    }

    configurar = async cantidad =>{
        await this.setState({limit: cantidad, load:true})
        let url = `https://pokeapi.co/api/v2/pokemon/?limit=${this.state.limit}&offset=0`
        await this.get_result(url)
        this.setState({load: false})
    }

    render() {
        return (
            <div className="container">
                <div className="row bg-danger pt-3" style={{position: 'fixed', left: 0, right: 0, zIndex: 999, top: 0}}>
                    <Navbar />
                </div>
                <div className="row mt-5" style={{paddingTop:130}}>
                    <Configuracion 
                        configurar={this.configurar}
                        check={this.load}
                    />
                    <Resultados
                        pokemones={this.state.result}
                        cantidad={this.state.limit}
                    />
                </div>
                <div className="row mt-5 d-flex" style={{justifyContent: "center"}}>
                    <Paginacion 
                        pagina={this.paginar}
                    />
                </div>
            </div>
        )
    }
}

