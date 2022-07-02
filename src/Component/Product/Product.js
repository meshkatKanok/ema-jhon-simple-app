import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const { name, img, price, seller, stock} = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='Name-product'>
                <h4 className='product-name'>{name}</h4>
                <p><small>by:{seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock -Order soon</small></p>
                <button className='btn' onClick={()=>props.handleaddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> add to card</button>

            </div>
        </div>
    );
};

export default Product;