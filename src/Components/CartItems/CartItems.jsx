import React, { useContext } from 'react';
import './CartItem.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../../assets/cart_cross_icon.png';

const CartItems = () => {
    const { getTotalCartAmount, all_products, cartItem, removeFromCart } = useContext(ShopContext);

    return (
        <div className='cartitem'>
            <div className="cartitem-top">
                <div className="cartitems-format-main">
                    <p>Products</p>
                    <p className='title'>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p className='remove'>Remove</p>
                </div>
                <hr />
                {all_products.map((product) => {
                    if (cartItem[product.id] > 0) {
                        return (
                            <div key={product.id}>
                                <div className="cartitems-format cartitems-format-main">
                                    <img src={product.image} alt="" className='carticon-product-icon' />
                                    <p className='title'>{product.name}</p>
                                    <p>${product.new_price}</p>
                                    <button className='cartitems-quantity'>{cartItem[product.id]}</button>
                                    <p>${product.new_price * cartItem[product.id]}</p>
                                    <img className='remove-icon' src={remove_icon} alt="" onClick={() => removeFromCart(product.id)} />
                                </div>
                                <hr />
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>Proceed To Checkout</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promo code, Enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='Promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItems;
