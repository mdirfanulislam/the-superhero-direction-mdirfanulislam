import React from 'react';
import './Cart.css';

const Cart = (props) => {
    console.log(props.cart);
    const {cart} = props;
    let total = 0;
    let name = '';
    for (const speaker of cart) {
        total = total + speaker.salary;
        name = name + ' ' + speaker.name + ' , ';
    }
    return (
        <div>
            <h2>Speaker Added: {props.cart.length}</h2>
            <h2>Total Cost: $ {total}</h2>
            <h3>{name}</h3>
        </div>
    );
};

export default Cart;