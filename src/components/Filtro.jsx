import React from 'react'

const Filtro = ({ setValorDeLaCaja }) => {


  return (
    <div>
      <nav className='nav'>
        <h1 className='h1'>Buscador de colaboradores</h1>
        <input type="text" name='inputfiltro' id='inputfiltro' placeholder='busca colaborador' className='input1'
          onChange={(e) => setValorDeLaCaja(e.target.value)} />
      </nav>
    </div>
  )
}

export default Filtro