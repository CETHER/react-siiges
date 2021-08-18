import React from 'react';
import User from "../assets/static/img-usuario.png";
import "../assets/styles/components/AsideUser.scss";

const Aside = () => (
    <aside className="col-sm-12 col-md-12 col-lg-3">
        <div className="">
            <fieldset className="border" align="center">
                <legend className="legend-circular" align="center"><img id="fotografia" className="legend-circular" src={User} /></legend>
                <div className="card">
                    <div className="card-body text-center">
                        <input type="hidden" id="id" name="id" value=""></input>
                        <h6 id="usuario" className="card-subtitle mb-2">Luis Manuel de Alba Villasenor</h6>
                        <h4 id="lblPuesto" className="card-title"></h4>
                        <h5 id="lblNombre" className="card-subtitle mb-2 text-muted"></h5>
                        <h6 id="lblCorreo" className="card-subtitle mb-2"></h6>
                        <a href="/" className="btn btn-primary btn-sm btn-block">Editar Perfil</a>
                    </div>
                </div>
            </fieldset>
        </div>
    </aside>
);


export default Aside;