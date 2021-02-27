import React, {useState} from 'react'

const Listas = () => {

    // const estadoInicial = [1,2,3,4,5,6]
    const estadoInicial = [
        {id:1,texto:'tarea principal 1'},
        {id:2,texto:'tarea semi final 2'},
        {id:3,texto:'tarea fianl numero 3'}
    ]

    const [lista, setLista] = useState(estadoInicial)

    const addElemento=()=>{
        setLista([
            ...lista,
            {id:4,texto:'lista numero 4 creada'}
        ])        
    }

    return (
        <div>
            <h2> Ejemplo con listas</h2>
            {
                lista.map((item,index)=>(
                    <h4 key={index}>{item.texto}</h4>
                ))
            }
            <button onClick={()=>addElemento()}>Agregar elemento</button>
        </div>
    )
}

export default Listas


