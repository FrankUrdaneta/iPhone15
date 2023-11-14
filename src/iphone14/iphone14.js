import React from "react";
import './iphone14.css';
import iphone_14 from '../image/compare_iphone_14__ct4sjk962pea_large.png';
import iphone_logo_se from '../image/logo_iphone_se__m265le0wq0q6_medium.png';
import iphone_se from '../image/compare_iphone_se_14_two.png';
import iph_14 from '../image/logo_iphone_14__beagfaob98eq_medium.png';
import swact_iphone_15 from '../image/swatch_iphone_15__dt2j59fau9ua_medium.png';
import swact_iphone_15_pro from '../image/swatch_iphone_15_pro__gdyn1ct073m2_medium.png';
import icon_des from '../image/icon_design__bbi8qdcsnygy_large.png';
import icon_dinamyc from '../image/icon_dynamic_island__d9d7y565nzsm_large.png';

const Iphone14=()=>{
    return (
        <div className="iphone14">
          <div className="row-container">
            <div className="column">
            <div>
              <img src={iphone_14} alt="iphone 14 " />
              </div>
              <div>
              <img src={swact_iphone_15_pro} alt="iphone_15_pro" />
              </div>
              <h6 className="nuevo">Nuevo</h6>
              <img src={iph_14} alt="iphone logo" />
                <div  className="parametros">
                <p className="text_ven enamora">Poder en serio. Vale la pena en serio. </p>
                <div class="">
                <p class="precio">$3.050.999</p>
                <p class="consulw">Disponible 1</p>
                </div>
                <button className="bte_reduce" >Comprar</button>
               
                <a className="lik" href="lik">Más información &gt;</a>
                </div>
                <hr></hr>
                <div className="parametros">
                <h3 className="">6.7″ o 6.1″ </h3>
              <p className="text_ven conquista">Pantalla Super Retina XDR1</p>
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
              <p className="text_ven conquista">Aluminio con parte posterior de vidrio Interruptor Timbre/Silencio</p>
              </div>
            </div>
            <div className="column">
              <img src={iphone_se} alt="iphone_152" />
              <div>
              <img src={swact_iphone_15} alt="iphone_15" />
              </div>
              <h6 className="nuevo">Nuevo</h6>
              <div>
              <img src={iphone_logo_se} alt="iphone logo" />
              </div>
              <div className="parametros">
              <p className="text_ven enamora">Poder en serio. Vale la pena en serio. </p>
              <div class="">
                <p class="precio">$2.248.999</p>
                <p class="consulw">Disponible 4</p>
                </div>
              <button className="bte_reduce" >Comprar</button>
             
              <a className="lik" href="lik">Más información &gt;</a>
              </div>
              <hr></hr>
              <div className="parametros">
              <h3 className="">4.7″ </h3>
              <p className="text_ven conquista">Pantalla Retina HD</p><br></br>
              </div>
              <div className="parametros">
              <div>
              <img src={icon_des} alt="icon des"  /></div>
              <p className="text_ven conquista">Aluminio y vidrio Interruptor Timbre/Silencio</p>
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

export default Iphone14;