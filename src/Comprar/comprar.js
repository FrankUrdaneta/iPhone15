// src/Portada/Portada.js
import React from 'react';
import './comprar.css';
import iph_se from '../image/iphone_se_logo__iii.jpg';
import iph_trio from '../image/iphone_se_hero__trio_white.jpg';
const Comprar = () => {
  return (
    <div className="portada_trio">
      <div className="column-container">
        <div className="iphse">
          <img src={iph_se} alt="iphone_15_pro" />
        </div>
        <div className="love">
        <p className='enamora'>Enamora por su poder</p>
        <p  className='conquista'>Conquista por su precio</p>
        </div>
        <div className="bt">
          <button className='bte' href="ir">Comprar</button>
        </div>
        <div className="consul">
          <a className='lik' href="enlace">Más información &gt;</a>
        </div>
        <div className="iph_trio">
          <img src={iph_trio} alt="iphone_trio" />
        </div>
      </div>
    </div>
  );
};

export default Comprar;
