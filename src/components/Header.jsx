import React from 'react';
import '../assets/styles/components/Header.scss';
import { BrowserRouter, Link } from 'react-router-dom';
import logo from '../assets/static/jalisco-logo.png';

const Header = props => {
    const Switch = props => {
        const { test, children } = props;
        return children.find(child => {
            return child.props.value === test;
        });
    };
    
    const Case = ({ children, value }) => {
        return children;
        // I don't want do add container around my cases ! 
    };
    

    return (
        <nav className="navbar navbar-inverse sub-navbar navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#subenlaces">
                        <span className="sr-only">Interruptor de Navegación</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <BrowserRouter>
                        <Link className="navbar-brand" to="/">
                            <img className="logo " src={logo} />
                        </Link>
                        <Link className="navbar-brand" to="/">
                            SIIGES
                        </Link>
                    </BrowserRouter>
                </div>
                <div className="collapse navbar-collapse" id="subenlaces">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="dropdown">
                            <BrowserRouter>
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">RVOE<span className="caret"></span></a>
                                <ul className="dropdown-menu" role="menu">
                                    <li><Link to="/">Mi institucion</Link></li>
                                    <li><Link to="/">Mis solicitudes</Link></li>
                                    <li><Link to="/">Mis usuarios</Link></li>
                                </ul>
                            </BrowserRouter>
                        </li>
                        <li className="dropdown">
                            <BrowserRouter>
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Servicios escolares<span className="caret"></span></a>
                                <ul className="dropdown-menu" role="menu">
                                    <li><Link to="/">Mis programas de estudio</Link></li>
                                    <li><Link to="/">Tramite de equivalencias</Link></li>
                                    <li><Link to="/">App titulacion electronica</Link></li>
                                    <li><Link to="/">Descarga de constancia de titulo electronico</Link></li>
                                </ul>
                            </BrowserRouter>
                        </li>
                        <BrowserRouter>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><span className="glyphicon glyphicon-stats"></span>{" "}Reportes<span className="caret"></span></a>
                                <ul className="dropdown-menu" role="menu">
                                    <li><Link to="/">Reportes RVOE</Link></li>
                                </ul>
                            </li>
                            <li><a href="#" id="navCerrar"><span className="glyphicon glyphicon-log-out" ></span>{" "}Cerrar sesion</a></li>
                        </BrowserRouter>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;