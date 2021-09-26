import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Speaker.css'

const Speaker = (props) => {
    console.log(props.speaker)
    const {img, name, age, Role, salary} = props.speaker;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="speaker">
            <img className="speaker-img" src={img} alt="" />
            <h3>Name: {name}</h3>
            <h5>Age: {age}</h5>
            <h6>Role: {Role}</h6>
            <p>Salary: {salary}</p>    
            <button onClick={() => props.handleToCart(props.speaker)} className="add-btn">{element} Add Cart</button>       
        </div>
    );
};

export default Speaker;