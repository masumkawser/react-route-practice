import React from 'react';

const Cart = ({cart,handleRemoveItem}) => {
    let message;
    if (cart.length===0){
        message=<p>Please buy at least one iteam!!!
    </p>
    }
    else if(cart.length===1){
        message =<div>
            <h3>Amar jonno ekta nao....</h3>
            <p>tmr jonno arek ta nao...</p>
            <p><small>kayes er jonno arekta nao..</small></p>
        </div>
    }
    else{
        message=<p>thanks for buying....</p>
    }
    return (
        <div>
            <h2> Order summary</h2>
            <h5>OrderQuantity :{cart.length}</h5>
            {
                cart.map(tshirt => <p 
                    key={ tshirt._id}
                    >
                        {tshirt.name}
                        <button onClick={()=> handleRemoveItem(tshirt)}>X</button>

                    </p>)
            }
            {
                message
            }
            {
                cart.length === 3 ?<p>this is 3 item</p> :<p>this is not three</p>
            }
            <p> or operator</p>
            {
                cart.length ===4 || <h2>4 ta iteam na hoi</h2>
            }

        </div>
    );
};

export default Cart;