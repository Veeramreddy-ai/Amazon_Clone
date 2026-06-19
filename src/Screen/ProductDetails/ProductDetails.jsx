import React from 'react'
import './ProductDetails.css'
import { useParams } from 'react-router-dom'
import productDetail from '../Products/products.json'

import { useDispatch } from 'react-redux'
import { addToCart } from '../../Redux/Actions/Actions'

import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function ProductDetails() {

    const { id } = useParams();

    const dispatch = useDispatch();

    const product = productDetail.product.find(
        (item) => item.id === id
    );

    const handleAddToCart = () => {

        dispatch(addToCart(product));

        toast.success("Added To Cart", {
            position: "bottom-right"
        });
    }

    return (
        <div className='productDetailsPage'>

            <div className='productDetailsLeft'>
                <img
                    src={product.imageUrl}
                    alt=""
                    className='productDetailsImage'
                />
            </div>

            <div className='productDetailsRight'>

                <h2>{product.name}</h2>

                <h1>₹ {product.price}</h1>

                <p>
                    Best Product With High Quality Features.
                </p>

                <div className="productRating">
                    ⭐⭐⭐⭐⭐ <span>(4.8)</span>
                </div>

                <p className="stockStatus">✅ In Stock</p>

                <div className="btnGroup">
                    <button className="buyNowBtn">Buy Now</button>
                    <button
                        className="addToCartDetailsBtn"
                        onClick={handleAddToCart}
                    >
                        Add To Cart
                    </button>
                </div>

            </div>

            <ToastContainer />

        </div>
    )
}

export default ProductDetails