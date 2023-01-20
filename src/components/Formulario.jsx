import { useState } from 'react'


const Formulario = ({ listaColaboradores, setListaColaboradores }) => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');

    const agregarColaborador = (e) => {
        e.preventDefault();
        setListaColaboradores([...listaColaboradores, { nombre: nombre, correo: email }]);
    }

    return (
        <div>
            <form action="" onSubmit={agregarColaborador} className="formulario">
                <label htmlFor="">Nombre del colaborador</label>
                <input type="text" id='nombre' name='nombre' placeholder='agregar nombre Colaborador'
                    onChange={(e) => setNombre(e.target.value)} className="input" />

                <label htmlFor="">Correo del colaborador</label>
                <input type="email" name="mail" id="mail" placeholder='agregar email Colaborador'
                    onChange={(e) => setEmail(e.target.value)} className="input" />
                    
                <button className="boton">Agregar Colaborador</button>
            </form>
            <hr />
        </div>
    )
}

export default Formulario