import React from 'react'


const Colaboradores = ({ listaColaboradores , valorDeLaCaja }) => {


    return (
        <div>
            <h2>Listado de colaboradores</h2>
            <ul className='ul'>
                {listaColaboradores.filter((e) => e.nombre.includes(valorDeLaCaja)).map((item) => <li key={item.id}> {item.nombre}-{item.correo} </li>)}
            </ul>
        </div>
    )
}

export default Colaboradores





/* import React from 'react'
import { useState } from 'react'
import { BaseColaboradores } from '../baseDatos/BaseColaboradores'

const Colaboradores = () => {
    const [listaColaboradores, setListaColaboradores] = useState(BaseColaboradores);

    return (
        <div>
            <h2>Lista Colaboradores</h2>
            <ul>
                {BaseColaboradores.map((item) => <li key={item.id}> {item.nombre} {item.correo} </li>)}
            </ul>
        </div>
    )
}

export default Colaboradores */