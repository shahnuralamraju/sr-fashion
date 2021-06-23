import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './SecondCart.css';
const SecondCart = (props) => {
    // console.log(props)
    const { name, balance, picture } = props.at;
    return (
        <div className='second-cart'>
            <div className='player-info'>
                <img src={picture} alt="img" />
                <h4>{name}</h4>
            </div>

            <div><h5>Yearly Salary: ${Number(balance)*12}</h5></div>
            <button className='btn'><FontAwesomeIcon icon={faMinus}></FontAwesomeIcon></button>
        </div>
    );
};

export default SecondCart;