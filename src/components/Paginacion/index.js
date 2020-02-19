import React from 'react'

export default class index extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            pagina: 1
        }
    }

    paginar = async (opcion) => {
        if(opcion == 1){
            await this.setState({pagina: 1 + this.state.pagina})
        }else{
            if(this.state.pagina > 1){
                await this.setState({pagina: this.state.pagina - 1})
            }
        }
        this.props.pagina(this.state.pagina)
    }

    render(){
        return(
            <div>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item"><a onClick={() => this.paginar(-1)} className="page-link bg-danger text-white p-3" href="#">{"<"}</a></li>
                        <li className="page-item"><a className="page-link bg-danger text-white p-3 mx-1" href="#">{this.state.pagina}</a></li>
                        <li className="page-item"><a onClick={() => this.paginar(1)} className="page-link bg-danger text-white p-3" href="#">{">"}</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}