import React, { Component } from 'react'
import './Modal.css'

export default class Modal extends Component {
    render() {
        let modelStyle = {
            display: 'block',
            backgroundColor: 'rgba(0,0,0,0.8)',
        };
        return (
            <div>
                <div className="modal show fade" style={modelStyle} >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{this.props.medicamento} </h5>
                                <button type="button" className="btn-close" onClick={this.props.hide} ></button>
                            </div>
                            <div className="modal-body">
                                <img src="https://precopopular.vteximg.com.br/arquivos/ids/187861-800-800/rotulo_pp_generico_receita.jpg?v=637841736571830000" className='img-fluid' />
                                
                                <h5 className='p'>Laboratorio: <span>{this.props.laboratorio}</span></h5>
                                <h5 className='p'>Dosagem: <span>{this.props.dosagem}</span></h5>
                                <h5 className='p'>Tipo: <span>{this.props.tipo}</span></h5>
                                <h5 className='p'>R$: <span>{this.props.preco} </span></h5>
                                <h5 className='p'>DESCRIÇÃO DO PRODUTO: </h5>
                                <p>{this.props.descricao}</p>	
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
