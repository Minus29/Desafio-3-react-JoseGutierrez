import { BaseColaboradores } from './baseDatos/BaseColaboradores.js';
import { useState } from 'react';
import Colaboradores from "./components/Colaboradores";
import Formulario from "./components/Formulario";
import Filtro from './components/Filtro.jsx';




function App() {

  const [listaColaboradores, setListaColaboradores] = useState(BaseColaboradores);
  const [valorDeLaCaja, setValorDeLaCaja] = useState('');

  return (
    <div className="App">
      <Filtro
        setValorDeLaCaja={setValorDeLaCaja}
      ></Filtro>
      <Formulario
        listaColaboradores={listaColaboradores}
        setListaColaboradores={setListaColaboradores}>
      </Formulario>
      <Colaboradores
        listaColaboradores={listaColaboradores}
        valorDeLaCaja={valorDeLaCaja}
      ></Colaboradores>
    </div>
  );
}

export default App;
