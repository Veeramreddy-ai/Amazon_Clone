import React, { useState, useEffect } from 'react'
import './Cart.css'
import { useSelector, useDispatch } from 'react-redux'
import {
    removeFromCart,
    updateCartQuantity
} from '../../Redux/Actions/Actions'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Cart() {
    const [cartItem, setCartItem] = useState([]);
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    // let a = 0;
    // let cost = cartItems.map((item)=>{return  a = a+ item.price})

    useEffect(() => {
        setCartItem(cartItems);
    }, [cartItems])

    const handleRemoveFromCart = (id) => {
        toast.error("Item Removed From Cart", {
            position: "bottom-right"
        })
        dispatch(removeFromCart(id));
    }
    const increaseQuantity = (item) => {
        dispatch(
            updateCartQuantity(
                item.id,
                item.quantity + 1
            )
        );
    };

    const decreaseQuantity = (item) => {

        if (item.quantity > 1) {
            dispatch(
                updateCartQuantity(
                    item.id,
                    item.quantity - 1
                )
            );
        }
    };
    return (
        <div className="cart">

            <div className="topLeftCart">
                <div className="topLeftCartTitle">Shopping Cart</div>
                <div className="desellectAllCart">Deselect all items</div>
                <div className="cartPriceTextDivider">Price</div>

                <div className="cartItemsDiv">
                    {
                        cartItems.map((item, ind) => {
                            return (
                                <div className='cartItemBlock' key={item.id}>
                                    <div className='cartItemLeftBlock'>
                                        <div className='cartItemLeftBlockImage'>
                                            <img className='cartItemLeftBlocking' src={item.imageUrl} alt="" />
                                        </div>
                                        <div className='cartItemLeftBlockDetails'>
                                            <div className='cartItemProductName'>{item.name}</div>
                                            <div className='inStockcart'>In stock</div>
                                            <div className="quantityContainer">

                                                <button
                                                    className="qtyBtn"
                                                    onClick={() => decreaseQuantity(item)}
                                                >
                                                    -
                                                </button>

                                                <span className="qtyValue">
                                                    {item.quantity}
                                                </span>

                                                <button
                                                    className="qtyBtn"
                                                    onClick={() => increaseQuantity(item)}
                                                >
                                                    +
                                                </button>

                                            </div>
                                            <div className='elgFreeShp'>Elligible for FREE Shopping</div>
                                            <div className='amazonFullFilledImage'><img className='fullfillImg' src='https://m.media.amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png' alt="" /></div>
                                            <div
                                                className='removeFromcart'
                                                onClick={() => handleRemoveFromCart(item.id)}
                                            >
                                                Remove From Basket
                                            </div>
                                        </div>
                                    </div>

                                    <div className="cartItemRightBlock">
                                        Rs {item.price * item.quantity}
                                    </div>
                                </div>
                            );
                        })
                    }




                </div>

            </div>

            <div className="topRightCart">
                <div className="subTotalTitle">Subtotal ({cartItems.length} items) : <span className='subTotalTitleSpan'>Rs {totalPrice}</span></div>
                <div className="giftAddto">
                    <input type='checkbox' />
                    <div>This Order Contains a gift</div>
                </div>
                <div className="proceedToBuy">Proceed To Buy</div>

            </div>
            <ToastContainer />
        </div>
    )
}

export default Cart