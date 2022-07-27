import React from 'react';
import { useString } from '../hooks/useString';

export const CustomTest = () => {
    const { upperCase, lowerCase, concat } = useString('juanmanuel.COM');
  return (
    <div>
        <h1>Testing custom test</h1>
        <p>Upper case: {upperCase()}</p>
        <p>Lower case: {lowerCase()}</p>
        <p>Concat: {concat('.ar')}</p>
    </div>
  )
}
