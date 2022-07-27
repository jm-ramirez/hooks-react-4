import React from 'react';
import { useString } from '../hooks/useString';

export const CustomTest = () => {
    
    const { state, upperCase, lowerCase, concat } = useString('Juanmanuel.com');
    return (
        <div>
            <h1>Testing custom test</h1>
            <h2>{state}</h2>

            <button onClick={upperCase}>Upper case</button>
            <button onClick={lowerCase}>Lower case</button>
            <button onClick={e => concat('.ar') }>Concat</button>
        </div>
    )
}
