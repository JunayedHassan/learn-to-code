import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart = props.cart;
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const course = cart[i];
        totalPrice = totalPrice + course.price;

    }

    return (
        <div>
            <div className="cart-style">
                <h4>Course Summery</h4>
                <p>Courses Enrolled: {cart.length}</p>
                <p>Total Price: ${totalPrice}</p>
            </div>
        </div>
    );
};

export default Cart;