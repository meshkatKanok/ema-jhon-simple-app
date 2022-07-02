import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, prd) => total + prd.price, 0);
//    let total=0;
//    for(let i=0;i<cart.length;i++){
//     const product=cart[i];
//     total=total+product.price;
//     console.log(total);
//    };

    console.log(shipping);
    let shipping=0;
    if(total>35){
        shipping = 0;
    }
    else if(total>15){
        shipping=4.99;
    }
    else if(total>0){
        shipping=12.99;
    }
    const tax=total/10;
    const formatNumber=num=>{
        const precison=num.toFixed(2);
        return parseFloat(precison);
    }

    return (
        <div>
            <h1>Order Summary</h1>
            <p>Items Orderd:{cart.length}</p>
            <p>Product Price:{formatNumber(total)}</p>
            <p>Shipping Cost:{shipping}</p>
            <p>Tax + Vat:{formatNumber(tax)}</p>
            <p>Total Price:{formatNumber(total + shipping + tax)}</p>



        </div>
    );
};

export default Cart;