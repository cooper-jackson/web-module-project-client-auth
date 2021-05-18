import React, { useEffect, useState } from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'

export default function Friends() {
    const [friends, setFriends] = useState([])
    const [newFriend, setNewFriend] = useState({})

    useEffect(() => {
        getData()
    }, [])
    
    const getData = () => {
        axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => {
            setFriends(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const handleChange = e => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
            });
        };

    const onSubmit = e => {
        e.preventDefault()
        
        axiosWithAuth()
        .post('http://localhost:5000/api/friends', newFriend)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div>
            <div>
                {friends.map(element => 
                    <p>{element.id}, {element.name}, {element.age}, {element.email}</p>
                )}
            </div>
            <form onSubmit={onSubmit}>
                <p>ID: </p>
                <input
                    type="text"
                    name="id"
                    value={friends.id}
                    onChange={handleChange}
                />
                <p>Name: </p>
                <input
                    type="text"
                    name="name"
                    value={friends.name}
                    onChange={handleChange}
                />
                <p>Age: </p>
                <input
                    type="text"
                    name="age"
                    value={friends.age}
                    onChange={handleChange}
                />
                <p>Email: </p>
                <input
                    type="text"
                    name="email"
                    value={friends.email}
                    onChange={handleChange}
                />
                <button>Log in</button>
            </form>
        </div>
    )
}