import React, { useEffect, useState } from 'react'

export const MyUser = () => {
    const [user, setUser] = useState({
        data: null,
        loading: true
    });

    const getUser = async(url) => {
        setUser({
            ...user,
            loading: true
        });
        
        setTimeout(async() => {
            const request = await fetch(url);
            const {data} = await request.json();
    
            setUser({
                data,
                loading: false
            });
        }, 2000);
    };

    const getId = e => {
        let id = parseInt(e.target.value);
        let url = `https://reqres.in/api/users/${id}`;

        getUser(url);
    };

    useEffect(() => {
        getUser('https://reqres.in/api/users/1')
    }, [])
    

    return (
        <div>
            <h1>My user</h1>
            <p>User data</p>
            <p>{user?.loading ? "Loading..." : ""}</p>
            <p>Name: {user?.data?.first_name} {user?.data?.last_name}</p>
            <input type='number' name='id' onChange={getId}/>

            <hr/>
        </div>
    )
}
