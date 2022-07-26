import React, { useId } from 'react'

export const MyComponent = () => {
    //useId - Crear identificador unico tanto para el cliente como para el servidor
    const id = useId();
    return (
        <div>
            <h1>Hook useId</h1>
            <input id={id} name='name' placeholder='Name' />
        </div>
    )
}
