import React, { useEffect, useState } from 'react';
import userData from '../../data/data.json';
import Player from '../Player/Player';
import Cart from '../Cart/Cart';
import './User.css'
const User = () => {
    // console.log(userData);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        setUsers(userData)
        // console.log(userData)
    }, []);
    const [cart, setCart] = useState([]);
    const handleAddPlayer = (player) => {
        // console.log('added' ,player)
        const newCart = [...cart, player]
        setCart(newCart);
    }

    return (
        <div className='user-container'>
            <div className="div1">
                {
                    users.map(user => <Player player={user} key={user.id} handleAddPlayer={handleAddPlayer}></Player>)
                }
            </div>
            <div className="div2">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default User;