import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Speaker from '../Speaker/Speaker';
import './Speakers.css'

const Speakers = () => {
    const [speakers, setSpeaker] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect ( () => {
        fetch ('./Speakers.json')
        .then(res => res.json())
        .then(data => setSpeaker(data))
    }, [])

    const handleToCart = (speaker) => {
        const newCart = [...cart, speaker];
        setCart(newCart);
    }

    return (
        <div className="speakers">
            <div className="speaker-container">
                {
                    speakers.map(speaker => <Speaker
                        key={speaker.id}
                        speaker={speaker}
                        handleToCart = {handleToCart}
                        >
                        </Speaker>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Speakers;