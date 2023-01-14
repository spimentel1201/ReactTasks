import React, {useState} from "react";
import Formulario from "./Formulario";
import '../styles/ListaTareas.css';
import Tarea from "./Tarea";

function ListaTareas(){

    const [tareas, setTareas] = useState([]);
    const agregarTarea = tarea => {
        if(tarea.texto.trim()){
            tarea.texto = tarea.texto.trim();
            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas)
        }
        console.log(tarea)
    }
    const eliminarTarea = id => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas);
    }

    return (
        <>
            <Formulario onSubmit={agregarTarea}/>
            <div className='tareas-lista-contenedor'>
                {
                    tareas.map((tarea)=>
                        <Tarea
                            key={tarea.id}
                            id={tarea.id}
                            texto={tarea.texto}
                            completada={tarea.completada}
                        />
                    )
                }
            </div>
        </>
    );
}

export default ListaTareas;