import React from 'react';
import"./Tshirt.css";
const Tshirt = ({tshirt,handleAddToCart}) => {
    const {name,picture,price} =tshirt;
    return (
        <div className='tshirt'>
            <img src= {picture}></img>
            <h2> {name}</h2>
            <h4>Price:{price}</h4>
            <button onClick={()=> handleAddToCart(tshirt)}> buy this</button>
        </div>
    );
};

export default Tshirt;