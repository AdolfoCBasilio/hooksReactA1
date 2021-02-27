import React from 'react'

const Contador = () => {

    const [contador, setContador] = React.useState(0)

    const aumentar = ()=>{
        console.log('Se esta aumentando...')

        contador < 5 ? setContador(contador + 1) : setContador(contador - contador)
        
    }

    return (
        <div>
            <h3>Hola contador</h3>
            <h2>Contador aumentando {contador} </h2>
            <h4>
                {
                    contador > 2 ? 'Contador es mayor que 2': 'es menor o igual que 2'
                }
            </h4>
            <button onClick={ ()=> aumentar() }>Aumentar</button>
        </div>
    )
}

export default Contador

