import React from 'react'
import shortid from 'shortid'


const Nuevo = () => {

    const [tarea,setTarea] = React.useState('')
    const [tareas,setTareas] = React.useState([])

    const [modoEdicion,setModoEdicion] = React.useState(false)

    const [nuevoId,setId] = React.useState('')
//
    const agregarTarea = e => {
        e.preventDefault()

        if(!tarea.trim()){
            console.log('elemento vacio')
            return
        }

        setTareas([
            ...tareas,
            {id:shortid.generate() , nombreTarea:tarea}
        ])

        console.log(tarea)
        setTarea('')//al llegar aqui cae sobre todas las tareas?
    }
//
    const eliminar = id => {
        console.log(id)
        const arregloNuevo = tareas.filter(item => item.id !== id)
        setTareas(arregloNuevo)
    }
//
    const editar = (edicionTarea,idTarea) => {
        setModoEdicion(true)
        console.log('estas editando : '+ edicionTarea)
        setTarea(edicionTarea)
        setId(idTarea)
    }
//
    const editarTarea = e => {
        e.preventDefault()
        if(!tarea.trim()){
            console.log('elemento vacio')
            return
        }

        const arrayEditado = tareas.map( 
            item => item.id === nuevoId ? {id:nuevoId, nombreTarea:tarea} : item
            )

        setTareas(arrayEditado)
        setModoEdicion(false)
        setTarea('')
        setId('')
    }
    
    return (
        <div className="container">
            <h1 className="text-center">CRUD NUEVO</h1>
        <hr/>
        
        <div className="row">
            <div className="col-8">
                <h4 className="text-center"> Lista de tareas </h4>
                <ul className="list-group"> 

                    {
                        tareas.map(item=>(
                        <li className="list-group-item" key={item.id}>
                            <span className="lead">{item.nombreTarea}</span>
                            <button className="btn btn-danger btn-sm float-right mx-2" onClick={()=>eliminar(item.id)}>Eliminar</button>
                            <button className="btn btn-warning btn-sm float-right" onClick={()=>editar(item.nombreTarea,item.id)}>Editar</button>
                        </li>
                        ))
                    }  

                </ul>
            </div>

        <div className="col-4">
            {
                modoEdicion 
                ? <h4 className="text-center">Editando Tarea</h4>
                : <h4 className="text-center">Formulario</h4>
            }

            <form onSubmit={ modoEdicion ? editarTarea : agregarTarea }>
                <input 
                type="text" 
                className="form-control mb-2"
                placeholder="Ingrese Tarea"
                onChange={e=>setTarea(e.target.value)}
                value={tarea}
                />

                {
                    modoEdicion
                    ? (<button className="btn btn-warning btn-block" type="submit">Editar Tarea</button>)
                    : (<button className="btn btn-dark btn-block" type="submit">Agregar Tarea</button>)
                }
            </form>

        </div>
        </div>
        </div>
    )
}

export default Nuevo
