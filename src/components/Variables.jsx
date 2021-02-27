import React from 'react'

const Variables = () => {
    
    const saludo= 'hola desde variables'
    const imagen='https://lh3.googleusercontent.com/proxy/yK6N6WM8hWjgxVXziPZg03pa4XabT66juGqSiDJqT2r2FOdhgPA8GwTV7lXcECBhqz91O6w0R2Afr5qKJr4nWclvmcDD4V_bTYi_2BlJGL93ADyKN2U'
    
    return (
        <div>
            <h2>Nuevo componente { saludo }</h2>
            <img src={imagen} alt=""/>
        </div>
    )
}

export default Variables
