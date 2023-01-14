import React, {useState} from "react";
import '../styles/Tarea.css';
import '../styles/Formulario.css';
import {v4 as uuidv4} from 'uuid';

function Formulario(props){

    const [input,setInput] = useState([]);

    const manejarCambio = e => {
        setInput(e.target.value)
    }
    const manejarEnvio = e => {
        e.preventDefault()
        const tareaNueva ={
            id: uuidv4(),
            texto: input,
            conpletada: false
        }
        props.onSubmit(tareaNueva);
    }

    return (
        <form className='tarea-formulario' onSubmit={manejarEnvio}>
            <input className='tarea-input' type='text' placeholder='Escriba una tarea' name='texto' onChange={manejarCambio}/>
            <button className='tarea-boton'>Add task</button>
        </form>
    );
}

export default Formulario;