import React, { useState } from 'react'

const Formulario = () => {

    const [fruta, setFrutas] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [lista, setLista] = useState([])
    const [edicionMood, setEdicionMood] = React.useState(false) 

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

    const borrarElemento=id=>{
        console.log(id)
        const nuevoArreglo = lista.filter( item => item.nombreDescripcion !== id)
        setLista(nuevoArreglo)
        console.log(lista)
    }

    const modificar = (nombre,desc) => {
        setEdicionMood(true)

        console.log('se activo el modo edicion con estado de')
        console.log(edicionMood)

        console.log('Los valores de item son:')
        // console.log(item)
        setFrutas(nombre)
        setDescripcion(desc)
        // setLista({nombreFruta:fruta,nombreDescripcion:descripcion})
    }
    return (
        <div>
            
            <h2>
            {
            edicionMood ? 'Edicion de lista' : 'Lista de Frutas'
            }
            </h2>

            <form onSubmit={ guardarDatos }>
            
            <input 
                type="text"
                placeholder="Ingrese Fruta"
                className="form-control mb-2"
                onChange={e=> setFrutas(e.target.value)}
                value={fruta}
            />
            
             <input 
                type="text"
                placeholder="Ingrese descripcion"
                className="form-control mb-2"
                onChange={e=>setDescripcion(e.target.value)}
                value={descripcion}
            />

           {
               edicionMood 
               ?<button 
               className="btn btn-danger btn-block"
               type="submit"
               >Agregar Cambios
               </button> 

               : <button 
               className="btn btn-primary btn-block"
               type="submit"
               >Agregar
               </button>
           }
            
            </form>
          
           <ul className="list-group">
               {
                   lista.map((item,index)=>(
                       <li key={index} className="list-group-item">

                           <span className="lead"> 
                           {item.nombreFruta} - {item.nombreDescripcion}
                           </span>

                           <button className="btn btn-danger btn-sm float-right "
                           onClick={ () => borrarElemento (item.nombreDescripcion) }>Borrar</button>
                           
                           <button className="btn btn-warning btn-sm float-right mr-1"
                           onClick={ () => modificar(item.nombreFruta,item.nombreDescripcion) }>Modificar</button>
                       </li>
                   ))
               }
           </ul>

        </div>
    )
}

export default Formulario