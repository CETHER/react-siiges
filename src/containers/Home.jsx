import React from 'react';
import BarraInformacion from '../components/BarraInformacion';
import Header from '../components/Header';
import "../assets/styles/components/Home.scss";
import Aside from '../components/AsideUser';

const Home = () => {
  return (
    <>
      <Header />
      <BarraInformacion />
      <div className="container">
        <section className="main row margin-section-formularios">
          <div className="col-sm-12 col-md-12 col-lg-9">
            <h2 id="txtNombre">Bienvenido</h2>
            <hr className="red"></hr>
            <div className="row">
              <div className="col-sm-12">
                <p className="text-justify">Bienvenida/o al Sistema Integral de Información para la Gestión de la Educación Superior, aquí las instituciones con reconocimiento de validez oficial de estudios (RVOE) podrán realizar sus trámites de manera digital de los procesos y trámites ante la Direcci&oacute;n General de Incorporaci&oacute;n y Servicios Escolares de la Subsecretar&iacute;a de Educaci&oacute;n Superior.
                  En esta plataforma obtendrás de manera digital y sencilla una administración dinámica de información segura convirtiéndose en un poderoso portal para tu institución educativa. En este portal, los procesos estratégicos y/o módulos tienen una disponibilidad 24/7 otorgando accesibilidad y velocidad en la entrega de contenido al usuario, eliminando los antiguos y complejos procesos de alto uso de papeleo y trámites para lograr la  innovación en procesos de las instituciones educativas ante la Subsecretar&iacute;a de Educaci&oacute;n Superior del Gobierno del Estado de Jalisco.</p>
              </div>
            </div>
          </div>
          <Aside />
        </section >
      </div >
    </>
  );
};

export default Home;