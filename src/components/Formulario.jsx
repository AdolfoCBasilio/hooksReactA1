import React, { useState } from 'react'

const Formulario = () => {

    const [fruta, setFrutas] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [lista, setLista] = useState([])

    const guardarDatos = (e) => {
        e.preventDefault()
        if(!fruta.trim()&&!descripcion.trim()){
            console.log('debe llenar ambos campos')
            return
        }
        if(!fruta.trim()){
            console.log('Debe llenar el campo fruta')
            return
        }
        if(!descripcion.trim()){
            console.log('debe llenar el campo Descripcion')
            return
        }
        console.log('procesando datos... de ' + fruta + ' ' + descripcion)
        
        setLista([
            ...lista,
            {nombreFruta:fruta, nombreDescripcion: descripcion}
        ])

        e.target.reset()
        setFrutas('')
        setDescripcion('')
    }

    return (
        <div>
            
            <h2>Formulario practica</h2>

            <form onSubmit={ guardarDatos }>
            
            <input 
                type="text"
                placeholder="Ingrese Fruta"
                className="form-control mb-2"
                onChange={e=> setFrutas(e.target.value)}
            />
            
             <input 
                type="text"
                placeholder="Ingrese descripcion"
                className="form-control mb-2"
                onChange={e=>setDescripcion(e.target.value)}
            />
           
            <button 
            className="btn btn-primary btn-block"
            type="submit"
            >Agregar
            </button>
           
            </form>
          
           <ul>
               {
                   lista.map((item,index)=>(
                       <li key={index}>
                           {item.nombreFruta} - {item.nombreDescripcion}
                       </li>
                   ))
               }
           </ul>

        </div>
    )
}

export default Formulario
