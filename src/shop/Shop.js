import React, { useState } from 'react';
import './Shop.css'
import fakeData from '../fakeData';
import Product from './Product/Product';
import Cart from '../Cart/Cart';


const Shop = () => {
    const first10 = fakeData.slice(0,10)
    const [products , setProduct] = useState(first10);
    const [cart ,setCart] = useState([])

    const handleAddCart=(product)=>{
    const newCart = [...cart , product]
    setCart(newCart)
        
    }

    
    return (
        <div className="container">

            <div class="product">
            
            {products.map(product => <Product
            handleAddCart ={handleAddCart}
             product ={product} ></Product>)}
            
            </div>
            <div class="cart">
            <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;