import React, { useEffect, useState } from 'react'
import { useAjax } from '../hooks/useAjax';

export const MyUser = () => {
    const [url, setUrl] = useState('https://reqres.in/api/users/1')
    const {data, loading} = useAjax(url);

    const getId = e => {
        let id = parseInt(e.target.value);
        setUrl(`https://reqres.in/api/users/${id}`);
    };    

    return (
        <div>
            <h1>My user</h1>
            <p>User data</p>
            <p>{loading ? "Loading..." : ""}</p>
            <p>Name: {data?.first_name} {data?.last_name}</p>
            <input type='number' name='id' onChange={getId}/>

            <hr/>
        </div>
    )
}
