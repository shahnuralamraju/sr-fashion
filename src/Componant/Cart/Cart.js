import React from 'react';
import SecondCart from './SecondCart';
const Cart = (props) => {
    // console.log(props.cart);
    const carts = props.cart;
    let total = 0;
    for (let i = 0; i < carts.length; i++) {
        const salary = carts[i];
        total = Number(total+ Number(salary.balance)*12);
        
    }
    console.log(total)
    return (
        
        
        <div>
            <div className="cart-div">
               
               <h1>Added Player For Club FCRAN</h1>
               <h2>Player Added Number: {carts.length}</h2>
                {
                    carts.map((cart, index) => <SecondCart at={cart} key={index}></SecondCart>)
                }
                <h1>Total Salry: $ {total}</h1>
            </div>
        </div>
    );
};

export default Cart;