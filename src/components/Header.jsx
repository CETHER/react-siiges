import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/Header.scss';
import { BrowserRouter, Link } from 'react-router-dom';
import logo from '../assets/static/jalisco-logo.png';
//import { logoutRequest } from '../actions';


const Header = (props) => {
    const { user, isLogReg } = props;
    const hasUser = Object.keys(user).length > 0;
    /* const handleLogout = () => {
        props.logoutRequest({});
    } */

    //declaracion de variables
    var isAdmin, isRepresentante, isGestor, isEvaluador, isJefeEvaluacion, isInspector, isJefeInspeccion, isControlEscolar, isControlDocumental, isSicytLectura, isControlEscolarSicyt, isRevalidacionEquivalencia;
    //se selecciona la barra de navegacion a utilizar dependiendo del valor que trae los props en rolusuario

    if (user.rolusuario != null) {
        switch (user.rolusuario) {
            case "admin":
                isAdmin = true;
                break;
            case "representante legal":
                isRepresentante = true;
                break;
            case "gestor":
                isGestor = true;
                break;
            case "evaluador":
                isEvaluador = true;
                break;
            case "jefeEvaluacion":
                isJefeEvaluacion = true;
                break;
            case "inspector":
                isInspector = true;
                break;
            case "jefeInspeccion":
                isJefeInspeccion = true;
                break;
            case "controlEscolar":
                isControlEscolar = true;
                break;
            case "controlDocumental":
                isControlDocumental = true;
                break;
            case "sicytLetura":
                isSicytLectura = true;
                break;
            case "controlEscolarSicyt":
                isControlEscolarSicyt = true;
                break;
            case "revalidacionEquivalencia":
                isRevalidacionEquivalencia = true;
                break;
            default:

        }
    } else {

    };

    return (
        <nav className="navbar navbar-inverse sub-navbar navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
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
                        {/* Barra de navegacion de Administradores */}
                        {isAdmin ? (
                            <>
                                < li className="dropdown">
                                    <BrowserRouter>
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">RVOE<span className="caret"></span></a>
                                        <ul className="dropdown-menu" role="menu">
                                            <li><Link to="/">Planteles</Link></li>
                                            <li><Link to="/">Usuarios</Link></li>
                                            <li><Link to="/">Solicitudes</Link></li>
                                            <li><Link to="/">Noticias</Link></li>
                                            <li><Link to="/">Notificaciones</Link></li>
                                            <li><Link to="/">Pagos</Link></li>
                                            <li><Link to="/">Accesos</Link></li>
                                            <li><Link to="/">Preguntas Evalución</Link></li>
                                        </ul>
                                    </BrowserRouter>
                                </li>
                                < li className="dropdown">
                                    <BrowserRouter>
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Reportes<span className="caret"></span></a>
                                        <ul className="dropdown-menu" role="menu">
                                            <li><Link to="/">Reportes RVOE</Link></li>
                                        </ul>
                                    </BrowserRouter>
                                </li>
                                < li className="dropdown">
                                    <BrowserRouter>
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Servicios Escolares<span className="caret"></span></a>
                                        <ul className="dropdown-menu" role="menu">
                                            <li><Link to="/">Avances Escolares</Link></li>
                                            <li><Link to="/">Validacion</Link></li>
                                            <li><Link to="/">Titulacion electronica</Link></li>
                                        </ul>
                                    </BrowserRouter>
                                </li>
                            </>
                        ) : ([])
                        }
                        {/* Barra de navegacion de Representante legal */}
                        {isRepresentante ? (
                            <>
                                < li className="dropdown">
                                    <BrowserRouter>
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">RVOE<span className="caret"></span></a>
                                        <ul className="dropdown-menu" role="menu">
                                            <li><Link to="/">Mi Institucion</Link></li>
                                            <li><Link to="/">Mis Solicitudes</Link></li>
                                            <li><Link to="/">Mis Usuarios</Link></li>
                                        </ul>
                                    </BrowserRouter>
                                </li>
                                < li className="dropdown">
                                    <BrowserRouter>
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Servicios Escolares<span className="caret"></span></a>
                                        <ul className="dropdown-menu" role="menu">
                                            <li><Link to="/">Mis programas de estudio</Link></li>
                                            <li><Link to="/">Tramite de equivalencia</Link></li>
                                            <li><Link to="/">App titulacion electronica</Link></li>
                                            <li><Link to="/">Descarga de Constancia de T&iacute;tulo Electr&oacute;nico</Link></li>
                                        </ul>
                                    </BrowserRouter>
                                </li>
                                < li className="dropdown">
                                    <BrowserRouter>
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Reportes<span className="caret"></span></a>
                                        <ul className="dropdown-menu" role="menu">
                                            <li><Link to="/">Reportes RVOE</Link></li>
                                        </ul>
                                    </BrowserRouter>
                                </li>
                            </>
                        ) : ([])
                        }
                        {/* Barra de navegacion de Gestores */}
                        {isGestor ? (
                            <>
                                < li className="dropdown">
                                    <BrowserRouter>
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">RVOE<span className="caret"></span></a>
                                        <ul className="dropdown-menu" role="menu">
                                            <li><Link to="/">Mis solicitudes</Link></li>
                                        </ul>
                                    </BrowserRouter>
                                </li>
                            </>
                        ) : ([])
                        }
                        {/* Barra de navegacion de Evaluadores */}
                        {isEvaluador ? (
                            <>
                                < li className="dropdown">
                                    <BrowserRouter>
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">RVOE<span className="caret"></span></a>
                                        <ul className="dropdown-menu" role="menu">
                                            <li><Link to="/">Curriculum</Link></li>
                                            <li><Link to="/">Mis evaluaciones</Link></li>
                                        </ul>
                                    </BrowserRouter>
                                </li>
                            </>
                        ) : ([])
                        }
                        {/* Barra de navegacion de Jefes de evaluacion */}
                        {isJefeEvaluacion ? (
                            <>
                                < li className="dropdown">
                                    <BrowserRouter>
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">RVOE<span className="caret"></span></a>
                                        <ul className="dropdown-menu" role="menu">
                                            <li><Link to="/">Solicitudes</Link></li>
                                        </ul>
                                    </BrowserRouter>
                                </li>
                            </>
                        ) : ([])
                        }
                        {/* Barra de navegacion de Inspectores */}
                        {isInspector ? (
                            <>
                                < li className="dropdown">
                                    <BrowserRouter>
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">RVOE<span className="caret"></span></a>
                                        <ul className="dropdown-menu" role="menu">
                                            <li><Link to="/">Mis Inspecciones</Link></li>
                                        </ul>
                                    </BrowserRouter>
                                </li>
                            </>
                        ) : ([])
                        }
                        {/* Barra de navegacion de Jefe de inspeccion */}
                        {isJefeInspeccion ? (
                            <>
                                < li className="dropdown">
                                    <BrowserRouter>
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">RVOE<span className="caret"></span></a>
                                        <ul className="dropdown-menu" role="menu">
                                            <li><Link to="/">Solicitudes</Link></li>
                                            <li><Link to="/">Inspecciones</Link></li>
                                        </ul>
                                    </BrowserRouter>
                                </li>
                            </>
                        ) : ([])
                        }
                        {/* Barra de navegacion de Control escolar */}
                        {isControlEscolar ? (
                            <>
                                < li className="dropdown">
                                    <BrowserRouter>
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Servicios Escolares<span className="caret"></span></a>
                                        <ul className="dropdown-menu" role="menu">
                                            <li><Link to="/">Mis Programas de Estudios</Link></li>
                                            <li><Link to="/">Tr&aacute;mite de Equivalencias</Link></li>
                                        </ul>
                                    </BrowserRouter>
                                </li>
                            </>
                        ) : ([])
                        }
                        {/* Barra de navegacion de Control documental */}
                        {isControlDocumental ? (
                            <>
                                < li className="dropdown">
                                    <BrowserRouter>
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">RVOE<span className="caret"></span></a>
                                        <ul className="dropdown-menu" role="menu">
                                            <li><Link to="/">Solicitudes</Link></li>
                                        </ul>
                                    </BrowserRouter>
                                </li>
                            </>
                        ) : ([])
                        }
                        {/* Barra de navegacion de Sicytlectura */}
                        {isSicytLectura ? (
                            <>
                                < li className="dropdown">
                                    <BrowserRouter>
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">RVOE<span className="caret"></span></a>
                                        <ul className="dropdown-menu" role="menu">
                                            <li><Link to="/">Solicitudes</Link></li>
                                        </ul>
                                    </BrowserRouter>
                                </li>
                                < li className="dropdown">
                                    <BrowserRouter>
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Reportes<span className="caret"></span></a>
                                        <ul className="dropdown-menu" role="menu">
                                            <li><Link to="/">Reportes RVOE</Link></li>
                                        </ul>
                                    </BrowserRouter>
                                </li>
                            </>
                        ) : ([])
                        }
                        {/* Barra de navegacion de Control escolar sicyt */}
                        {isControlEscolarSicyt ? (
                            <>
                                < li className="dropdown">
                                    <BrowserRouter>
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Servicios Escolares<span className="caret"></span></a>
                                        <ul className="dropdown-menu" role="menu">
                                            <li><Link to="/">Avances Escolares</Link></li>
                                            <li><Link to="/">Validacion</Link></li>
                                            <li><Link to="/">Titulacion electronica</Link></li>
                                        </ul>
                                    </BrowserRouter>
                                </li>
                            </>
                        ) : ([])
                        }
                        {/* Barra de navegacion de Revalidacion equivalencia */}
                        {isRevalidacionEquivalencia ? (
                            <>
                                < li className="dropdown">
                                    <BrowserRouter>
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Equivalencias<span className="caret"></span></a>
                                        <ul className="dropdown-menu" role="menu">
                                            <li><Link to="/">Tramites</Link></li>
                                        </ul>
                                    </BrowserRouter>
                                </li>
                            </>
                        ) : ([])
                        }
                        {isLogReg ? (
                            <>
                                <BrowserRouter>
                                    <li><Link id="navIniciarSesion" to="/"><span className="glyphicon glyphicon-user"></span> Iniciar Sesión</Link></li>
                                    <li><Link id="navLinea" to="#">|</Link></li>
                                    <li><Link id="navRegistrarme" to="/"><span className="glyphicon glyphicon-user"></span> Registrarme</Link></li>
                                    <li><Link id="navLinea" to="#">|</Link></li>
                                    <li><Link id="navAcercaDe" to="/" data-toggle="modal" data-target="#modalAcercaDe"><span className="glyphicon glyphicon-info-sign"></span> Acerca de</Link></li>
                                </BrowserRouter>
                            </>
                        ) : ([])

                        }
                        <BrowserRouter>
                            <li><a href="#" id="navCerrar"><span className="glyphicon glyphicon-log-out" ></span>{" "}Cerrar sesion</a></li>
                        </BrowserRouter>
                    </ul>
                </div>
            </div>
        </nav >
    );
}

const mapStateToProps = state => {
    return {
        user: state.user
    };
};

/* const mapDispatchToProps = {
                        logoutRequest,
} */

export default connect(mapStateToProps, null)(Header);