import React from 'react'
import './ProductDetails.css'
import { useParams } from 'react-router-dom'
import productDetail from '../Products/products.json'
import StarRateIcon from '@mui/icons-material/StarRate';
import StarOutlineIcon from '@mui/icons-material/StarOutlineOutlined';
import { addToWishlist, toggleWishlist } from '../../Redux/Actions/Actions';
import { useDispatch } from 'react-redux'
import { addToCart } from '../../Redux/Actions/Actions'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { toast, ToastContainer } from 'react-toastify'
import FavoriteIcon from '@mui/icons-material/Favorite';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
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
    const handleWishlist = (item) => {

        dispatch(toggleWishlist(item));

        toast.success(
            itemExists ? "Removed from Wishlist" : "Added to Wishlist"
        );
    };

    return (
        <div className='productDetailsPage'>

            <div
                className="wishlistBtn"
                onClick={() => handleWishlist(product)}
            >
                <FavoriteIcon />
            </div>
            <div className='productDetailsLeft'>
                <img
                    src={product.imageUrl}
                    alt=""
                    className='productDetailsImage'
                />
            </div>

            <div className='productDetailsRight'>

                <h2>{product.name}</h2>

                <h1><CurrencyRupeeIcon /> {product.price}</h1>

                <p>
                    Best Product With High Quality Features.
                </p>

                <div className="productRating">

                    <StarRateIcon sx={{ fontSize: "25px", color: "#f66227" }} />
                    <StarRateIcon sx={{ fontSize: "25px", color: "#f66227" }} />
                    <StarRateIcon sx={{ fontSize: "25px", color: "#f66227" }} />
                    <StarRateIcon sx={{ fontSize: "25px", color: "#f66227" }} />
                    <StarOutlineIcon sx={{ fontSize: "25px", color: "#f66227" }} />
                    <span>(4.8)</span>
                </div>

                <p className="stockStatus">
                    <CheckCircleIcon sx={{ fontSize: "23px", color: "green", marginBottom: "5px" }} />
                    In Stock
                </p>

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