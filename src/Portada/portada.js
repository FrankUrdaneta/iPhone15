// src/Portada/Portada.js
import React from 'react';
import './portada.css';
import iphone15_black from '../image/iphone_15_pro_logo.jpg';
import titanio from '../image/titanio.jpg';
import iph from '../image/portada.jpg';

const Portada = () => {
  return (
    <div className="portada">
      <h6 className="nuevo">Nuevo</h6>
      <div className="column-container">
        <div className="iph15">
          <img src={iphone15_black} alt="iphone_15_pro" />
        </div>
        <div className="titanio">
          <img src={titanio} alt="iphone_titanio" />
        </div>
        <div className="consul">
          <p>Consulta la disponibilidad mas adelante</p>
          <a className='lik' href="enlace">Más información &gt;</a>
        </div>
        <div className="iph">
          <img src={iph} alt="iphone_15" />
        </div>
      </div>
    </div>
  );
};

export default Portada;
