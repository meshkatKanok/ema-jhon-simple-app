import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const frist10=fakeData.slice(0,10);
  const [products,setproducts]=useState(frist10);
  const[cart,setcart]=useState([]);
 const handleaddProduct=(product)=>{
    const newCrd=[...cart,product];
    setcart(newCrd);
 }
  
    return (
        <div className='shop-container'>
            <div className='product-container'>
                <ul>
                    {
                        products.map(pd=><Product 
                           handleaddProduct={handleaddProduct}
                            product={pd}></Product>)
                    }
                </ul>

            </div>
            <div className='card-container'>
                <Cart cart={cart}></Cart>

            </div>
         
            
        </div>
    );
};

export default Shop;