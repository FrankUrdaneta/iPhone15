import './App.css';

import Portada from './Portada/portada';
import PortadaWhite from './Portada_white/portada_white';
import Comprar from './Comprar/comprar';
import Articulo from './Articulos/articulos';
import Iphone14 from './iphone14/iphone14';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Portada />
      <PortadaWhite />
      <Comprar />
      <Articulo />
      <Iphone14 />
      </header>
    </div>
  );
}

export default App;
