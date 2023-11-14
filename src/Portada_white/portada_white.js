// src/Portada/Portada.js
import React from 'react';
import './portada_white.css';
import iphone15_black from '../image/iphone_15_logo__white.jpg';
import iphw from '../image/hero_iphone_15__white.jpg';

const PortadaWhite = () => {
  return (
    <div className="portada_w">
      <h6 className="nuevo">Nuevo</h6>
      <div className="column-container">
        <div className="iph15">
          <img src={iphone15_black} alt="iphone_15_pro" />
        </div>
        <div className="nuevocionante">
            <p>Nuevocionante</p>
        </div>
        <div className="consulw">
          <p>Consulta la disponibilidad mas adelante</p>
          <a className='lik' href="enlace">Más información &gt;</a>
        </div>
        <div className="iphw">
          <img src={iphw} alt="iphone_15" />
        </div>
      </div>
    </div>
  );
};

export default PortadaWhite;
