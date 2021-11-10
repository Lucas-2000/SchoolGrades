import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/sidebar.scss'

const Header = () => {
    return (
        <div id="component-header">
            <header>
                <strong>Lucas School</strong>
                <Link to="/students" style={{color: 'blueviolet'}}>
                    <button>Alunos</button>
                </Link>
                <Link to="/register" style={{color: 'blueviolet'}}>
                    <button>Cadastro</button>
                </Link>
                <Link to="/" style={{color: 'blueviolet'}}>
                    <button>Sair</button>
                </Link>
            </header>
        </div>
    )
}

export default Header
