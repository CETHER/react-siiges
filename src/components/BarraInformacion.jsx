import React from 'react';
import '../assets/styles/components/BarraInformacion.scss'

const BarraInformacion = () => {
    return (
        <div className="container">
            <ol className="breadcrumb pull-left">
                <li><i className="icon icon-home"></i></li>
                <li className="active">SIIGES</li>
            </ol>
            <ol className="breadcrumb pull-right">
                <li><i className="icon icon-user"></i></li>
                <li>Jefe de jefes</li>
                <li className="active">Luis Manuel de Alba Villaseñor</li>
            </ol>
        </div>
    )
}

export default BarraInformacion;