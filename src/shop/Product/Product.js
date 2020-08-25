import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {

    const { img, name, price, seller, stock } = props.product
    return (
        <div className='product-container'>
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-name">
                <h3>{name}</h3>
                <h5> By {seller}</h5>
                <h4>Price ${price}</h4>
                <br />
                <p>only <strong>{stock}</strong> left buy now</p>
                <button onClick={() => props.handleAddCart(props.product)} className="main-btn"> <FontAwesomeIcon icon={faShoppingCart} />Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;