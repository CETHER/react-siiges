import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/BarraInformacion.scss'

const BarraInformacion = props => {
    //Se guardan los datos del usuario en una constante
    const { user } = props;

    return (
        <div className="container">
            <ol className="breadcrumb pull-left">
                <li><i className="icon icon-home"></i></li>
                <li className="active">SIIGES</li>
            </ol>
            <ol className="breadcrumb pull-right">
                <li><i className="icon icon-user"></i></li>
                <li>{user.rolusuario}</li>
                <li className="active">{user.nombreUsuario}</li>
            </ol>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user
    };
};

export default connect(mapStateToProps, null)(BarraInformacion);