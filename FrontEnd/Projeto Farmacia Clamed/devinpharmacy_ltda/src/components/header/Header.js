import React, {Component} from 'react'
import'./Header.css'
import {AiOutlineMenu} from 'react-icons/ai'
import {VscChromeClose} from 'react-icons/vsc'



export default class Header extends Component {

    constructor(){
        super();
        this.state = {
            show: true
        }
    }

    render() {
        return (
        
            <div>
                <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container">
                <a className="navbar-brand text-info" href="#"><img src="https://ncdn0.infojobs.com.br/logos/Company_Evaluation/88017.jpg" alt="" /></a>
                <span className="logoclamed text-secondary fs-4" href="#">DEVinPharmacy LTDA</span>
                <button className="navbar-toggler  border border-success text-success" 
                onClick={() => {this.setState({show: !this.state.show})}}>
                    {this.state.show ? <AiOutlineMenu/> : <VscChromeClose/>}
                </button>
                
                <div className={this.state.show ? 'collapse navbar-collapse' :'collapse navbar-collapse active' }>
                    <ul className="navbar-nav ms-auto" >
                        <li className="nav-item">
                            <a className="nav-link active text-secondary fs-5"href="/cadastrofarmacia">Cadastro de Farmácia</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active text-secondary fs-5" href="/cadastromedicamento">Cadastro de Medicamento</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active text-secondary fs-5"  href="/mapa">Mapa das Farmácias</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active text-secondary fs-5"  href="/listagemmedicamento">Medicamentos</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
            </div>
            
        )
    }
}


  
    
    
        


