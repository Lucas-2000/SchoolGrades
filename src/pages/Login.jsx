import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/login.scss'

const Login = () => {
    return (
        <div id="page-login">
            <aside>
                <h1>Lucas School</h1>
                <div className="details-position">
                    <strong>Bem vindo Professor</strong>
                    <p>Realize seu login para lançar as notas dos alunos</p>
                </div>
            </aside>
            <main className="main-content">
                <form>
                    <strong>Digite abaixo suas credenciais de acesso</strong>
                    <input placeholder="Login" required />
                    <input placeholder="Senha" required />
                    <Link to="/students">
                        <button>ENTRAR</button>
                    </Link>
                </form>
            </main>
        </div>
    )
}

export default Login
