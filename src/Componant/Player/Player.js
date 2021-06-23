import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserPlus} from '@fortawesome/free-solid-svg-icons';

import './Player.css';
const Player = (props) => {
    // console.log(props.player);
    const { name, picture, id, email, balance } = props.player;
    const handleAddPlayer = props.handleAddPlayer;
   
    return (
        <div className='player-container'>

            <div className='image-div'>
                <img src={picture} alt="" />
            </div>
            <div className="info-div">
                <h2>{name}</h2>
                <p>{email}</p>
                
                <p>Batting Position: {id}</p>
                <p>Salary per Month: ${balance}</p>
                <button onClick={()=>handleAddPlayer(props.player)}><span><FontAwesomeIcon icon={faUserPlus} /></span> Add To Team</button>
            </div>

        </div>
    );
};

export default Player;