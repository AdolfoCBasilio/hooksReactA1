import React, { Fragment, useState } from 'react'

const Eventos = () => {
// const [state, setstate] = useState(initialState)
    const [texto, setTexto] = useState('texto de estado')
    
    const eventoClick = () => {
        console.log('me diste un click')
        setTexto('cambiaste el texto')
    }

    return (
        <Fragment>
            <br/>
            <h2>{ texto }</h2>
            <button onClick={ () => eventoClick() }>Click</button>
        </Fragment>
    )
}

export default Eventos
