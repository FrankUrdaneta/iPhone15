import React from "react";
import './articulos.css';
import iphone_15_pro from '../image/compare_iphone_15_pro.png';
import iphone_logo from '../image/logo_iphone_15_pro__drdmya1am5ea_medium.png';
import iphone_152 from '../image/compare_iphone_15__two.png';
import iph_15 from '../image/logo_iphone_15__cg1a25guu51e_medium.png';
import swact_iphone_15 from '../image/swatch_iphone_15__dt2j59fau9ua_medium.png';
import swact_iphone_15_pro from '../image/swatch_iphone_15_pro__gdyn1ct073m2_medium.png';
import icon_des from '../image/icon_design__bbi8qdcsnygy_large.png';
import icon_dinamyc from '../image/icon_dynamic_island__d9d7y565nzsm_large.png';

const Articulo=()=>{
    return (
        <div className="articulo">
          <h2 className="encuentra">Encuentra el iPhone perfecto para ti</h2>
          <div className="row-container">
            <div className="column">
              <img src={iphone_15_pro} alt="iphone 15 pro " />
              <div>
              <img src={swact_iphone_15_pro} alt="iphone_15_pro" />
              </div>
              <h6 className="nuevo">Nuevo</h6>
              <div>
              <img src={iphone_logo} alt="iphone logo" />
              </div>
                <div  className="parametros">
                <p className="text_ven enamora">El iphone en su maxima expresion</p>
                <div class="">
                <p class="precio">$3.799.999</p>
                <p class="consulw">Disponible 2</p>
                </div>
                <a className="lik" href="lik">Más información &gt;</a>
                </div>
                <hr></hr>
                <div className="parametros">
                <h3 className="">6.7″ o 6.1″ </h3>
              <p className="text_ven conquista">Pantalla Super Retina XDR1 Tecnología ProMotion Pantalla siempre activa</p>
              </div>
              <div className="parametros">
              <div>
              <img src={icon_des} alt="icono des" />
              </div>
              <p className="text_ven conquista">Titanio con parte posteriorde vidrio mate texturizado Botón de Acción</p>
              </div>
              <div className="parametros">
              <div>
              <img src={icon_dinamyc} alt="icon dinamyc" />
              </div>
              <p className="text_ven conquista">Aluminio con parte posterior de vidrio con infusión de color Interruptor Timbre/Silencio</p>
              </div>
            </div>
            <div className="column">
            <div>
              <img src={iphone_152} alt="iphone_152" />
              </div>
              <div>
              <img src={swact_iphone_15} alt="iphone_15" />
              </div>
              <h6 className="nuevo">Nuevo</h6>
              <img src={iph_15} alt="iphone logo" />
              <div className="parametros">
              <p className="text_ven enamora">Repleto de posibilidades</p>
              <div class="">
                <p class="precio">$3.248.999</p>
                <p class="consulw">Disponible 3</p>
                </div>
              <a className="lik" href="lik">Más información &gt;</a>
              </div>
              <hr></hr>
              <div className="parametros">
              <h3 className="">6.7″ o 6.1″ </h3>
              <p className="text_ven conquista">Pantalla Super Retina XDR1</p><br></br>
              </div>
              <div className="parametros">
              <div>
              <img src={icon_des} alt="icon des"  /></div>
              <p className="text_ven conquista">Aluminio con parte posterior de vidrio con infusión de color Interruptor Timbre/Silencio</p>
              </div>
              <div className="parametros">
              <div>
              <img src={icon_dinamyc} alt="icon dinamy" />
              </div>
              <p className="text_ven conquista">Dynamic Island Una manera mágica de interactuar con el iPhone</p>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Articulo;