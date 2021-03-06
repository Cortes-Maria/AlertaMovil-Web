import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router';

class Navigation extends Component {

    refreshPage() {
        localStorage.clear()
        window.location.href = "/"
      }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        Alerta Móvil
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/alertas">
                                    Alertas
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/zones">
                                    Zonas de interés 
                                </Link>
                            </li>
                            <li className="nav-item">
                                {   
                                   ( localStorage.getItem('idCliente') !== 'undefined' && localStorage.getItem('idCliente') !== null) ?
                                    <Link className="nav-link" to="/profileCliente">
                                    Perfil
                                    </Link>
                                    :
                                   <Link className="nav-link" to="/login">
                                   Iniciar Sesión
                                  </Link>
                                }
                            </li>
                            <li>
                                <button className="btn btn-dark" type="button"  onClick={this.refreshPage}>
                                    Salir
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navigation;