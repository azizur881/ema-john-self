import React from 'react';
import logo from '../images/logo.png'
import './Heading.css'

const Heading = () => {
    return (
        <div>
           <nav className="nav-bar">
            <img className="nav-bar-logo" src={logo} alt=""/>
           </nav>
                <div className="nav-bar-item">
                    <ul>
                        <a href="Shop/">Shop</a>
                        <a href="Order Review/">Order</a>
                        <a href="inventory/">Manage Inventory</a>
                    </ul>
                </div>
        </div>
    );
};
export default Heading;
