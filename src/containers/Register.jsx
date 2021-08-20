import React, { useState } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { registerRequest } from '../actions';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Login.scss';
import FondoLogin from '../assets/static/wallpaper.jpg';


const Register = props => {
    const [form, setValues] = useState({
        email: '',
        name: '',
        password: '',
    });

    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name]: event.target.value
        })
    };

    const handleSubmit = event => {
        event.preventDefault();
        props.registerRequest(form);
        props.history.push('/login');
    };

    return (
        <>
            {/* <!-- RECUADRO DE REGISTRO --> */}
            <div className="fondo-imagen" style={{ backgroundImage: `url(${FondoLogin})` }}>
                <div className="container">
                    <section className="main row margins-section-login tamano-pantalla">
                        <div className="col-md-4 col-md-offset-4">

                            {/* <!-- HEADER DEL RECUADRO DE REGISTRO --> */}
                            <div className="header-login">
                                <h6>Registrate</h6>
                                <p className="small">Es necesario registrarte para<br />poder realizar tus tramites</p>
                            </div>


                            {/* <!-- CUERPO DEL RECUADRO DE REGISTRO --> */}
                            <div className="body-login">

                                {/* <?php if($resultado && isset($resultado->status) && $resultado->status != "200"): ?>
                            <div className="alert alert-danger">
                                <p>{/* <?= $resultado->message ?> sample text</p>
                            </div>
                            <?php endif; ?> */}
                                <div className="alert alert-danger" id="registro-mensaje" hidden></div>
                                <form className="" id="registro-formulario" onSubmit={handleSubmit}>
                                    <input type="hidden" name="webService" value="registro" />
                                    <input type="hidden" name="url" value="/" />

                                    <div className="input-group">
                                        <span className="input-group-addon btn-sm"><i className="glyphicon glyphicon-user"></i></span>
                                        <input type="text" id="registro-usuario" name="usuario" className="form-control input-sm" placeholder="Nombre de usuario" onChange={handleInput} required />
                                    </div>
                                    <p></p>
                                    <div className="input-group">
                                        <span className="input-group-addon btn-sm"><i className="glyphicon glyphicon-envelope"></i></span>
                                        <input type="text" id="registro-correo" name="correo" className="form-control input-sm" placeholder="Correo electrónico" onChange={handleInput} required />
                                    </div>
                                    <p></p>
                                    <div className="input-group">
                                        <span className="input-group-addon btn-sm"><i className="glyphicon glyphicon-lock"></i></span>
                                        <input type="password" id="registro-contrasena" name="contrasena" className="form-control input-sm" placeholder="Contraseña de acceso" onChange={handleInput} required />
                                    </div>
                                    <p className="text-muted small">Mínimo 5 caracteres y máximo 20</p>
                                    <div className="input-group">
                                        <span className="input-group-addon btn-sm"><i className="glyphicon glyphicon-lock"></i></span>
                                        <input type="password" id="registro-confirmacion-contrasena" name="confirmacion-contrasena" className="form-control input-sm" placeholder="Repite la contraseña anterior" required />
                                    </div>

                                    {/* <br> */}

                                    {/* <!-- TERMINOS Y CONDICIONES --> */}
                                    <div className="form-group row">
                                        <div className="col-sm-12">
                                            <div className="form-check small">
                                                <input className="form-check-input" type="checkbox" id="registro-chkTerminos" /> Al registrarme acepto los <a href="#" data-toggle="modal" data-target="#registro-modalCondiciones">Términos y condiciones de uso</a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- BOTON DE REGISTRO --> */}
                                    <div className="form-group row">
                                        <div className="col-sm-12">
                                            <button id="registro-btnRegistrarse" type="submit" className="btn btn-primary btn-sm btn-block">Registrarme</button>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>

                        {/* <!-- MODAL DE TERMINOS Y CONDICIONES --> */}
                        <div className="modal fade" id="registro-modalCondiciones" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="registro-ModalLongTitle">Términos y Condiciones de uso</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                        <button type="button" className="btn btn-primary" data-dismiss="modal" id="registro-btnAceptar">Aceptar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

const mapDispatchToProps = {
    registerRequest,
}

export default connect(null, mapDispatchToProps)(Register);