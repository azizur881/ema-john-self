import React from 'react';
import './Cart.css'


const Cart = (props) => {
    const cart = props.cart
    let total =(0)
    for(var i = 0; i < cart.length; i++){
     let   product = cart[i]
        total= total + product.price
    }
        let shipping = 0
         if(total ===0){
            shipping = 0
        }
        else if(total<30){
            shipping = 12.99
        }
       else if(total > 30){
            shipping=0
        }
        
        

    return (
        <div className="cart" >
            <h4 >Items Ordered  {cart.length} </h4>
             <h4>Total price: $ {total.toFixed(2)}</h4>
            <h5>Shipping : {shipping}</h5>
             <h4>Total Amount : {(total+ shipping).toFixed(2)}</h4>
        </div>
    );
};

export default Cart;