import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../assets/styles/components/Login.scss';
import { loginRequest } from '../actions';
import "../assets/styles/components/Login.scss";
import FondoLogin from '../assets/static/wallpaper.jpg';


const Login = props => {
    const rolInput = React.createRef();
    //Almacena los valores del formulario en un objeto
    const [form, setValues] = useState({
    });

    //Funcion para manejar los datos del formulario
    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    //funcion para el manejo del formulario
    const handleSubmit = event => {
        event.preventDefault();
        form.rolusuario = rolInput.current.value;
        props.loginRequest(form);
        props.history.push('/');
    }

    return (
        <>
            <Header isLogReg />
            <div className="fondo-imagen" style={{ backgroundImage: `url(${FondoLogin})` }}>
                <div className="container">
                    <section className="main row margins-section-login tamano-pantalla">
                        <div className="col-md-4 col-md-offset-4">

                            <div className="header-login" >
                                <h6>Iniciar Sesión</h6>
                                <p className="small">Ingresa tus credenciales para acceder al portal web</p>
                            </div>

                            <div className="body-login">
                                {/* formulario de inicio de sesion */}
                                <form name="form1" onSubmit={handleSubmit}>
                                    <div className="input-group">
                                        <span className="input-group-addon btn-sm"><i className="glyphicon glyphicon-user"></i></span>
                                        <input type="text" id="usuario" name="nombreUsuario" className="form-control input-sm" placeholder="Nombre de Usuario" onChange={handleInput} required />
                                    </div>
                                    <br />
                                    <div className="input-group">
                                        <span className="input-group-addon btn-sm"><i className="glyphicon glyphicon-lock"></i></span>
                                        <input type="password" id="contrasena" name="contrasena" className="form-control input-sm" placeholder="Contraseña de acceso" onChange={handleInput} required />
                                    </div>
                                    <div className="input-group">
                                        <input type="hidden" id="rol" name="rolUsuario" className="form-control" defaultValue="" ref={rolInput} required />
                                    </div>
                                    <p></p>
                                    <div className="form-group row">
                                        <div className="col-sm-12 text-center">
                                            <a href="#" className="small" data-toggle="modal" data-target="#modal-Recuperar-Contrasena">¿Olvidaste tu contraseña?</a>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-12 text-center">
                                            <input type="submit" name="submit" className="btn btn-primary btn-block btn-sm" value="Ingresar" href='/' />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-12 text-center">
                                            <p className="small">¿No tienes una cuenta?<a href='/'> Regístrate</a> </p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="modal fade" id="modal-Recuperar-Contrasena" tabIndex="-1" role="dialog" aria-labelledby="modalRecuperar" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content password">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="modalRecuperar">Recuperar Contraseña</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        {/* formulario de recuperacion de contraseña */}
                                        <form name="form2" method="post" action='/'>
                                            <p className="text-center">Ingrese su nombre de usuario para enviarle un email y pueda recuperar su contraseña </p>
                                            <div className="input-group">
                                                <span className="input-group-addon btn-sm"><i className="glyphicon glyphicon-user"></i></span>
                                                <input type="text" id="usuario" name="usuario" className="form-control input-sm" placeholder="Nombre de Usuario" required></input>
                                            </div>
                                            <br />
                                            <p></p>
                                            <p className="text-center small">Si el email no aparece en su bandeja de entrada, no olvide revisar en la sección de 'correo no deseado'</p>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                                <input type="hidden" id="webService" name="webService" value="solicitarNuevaContrasena" />
                                                <input type="hidden" id="url" name="url" value="../index.php" />
                                                <input type="submit" id="submit" name="submit" className="btn btn-primary" value="Recuperar" />
                                            </div>
                                        </form>
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
    loginRequest,
}

export default connect(null, mapDispatchToProps)(Login);
