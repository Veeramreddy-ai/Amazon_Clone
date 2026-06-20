import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromWishlist, moveToCart } from '../../Redux/Actions/Actions'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import './Wishlist.css'

function Wishlist() {

    const dispatch = useDispatch();

    const wishlist = useSelector(
        (state) => state.cart.wishlist
    );

    const handleRemove = (id) => {
        dispatch(removeFromWishlist(id));
    };

    return (
        <div className="wishlistPage">

            <h1 className="wishlistTitle">
                <span className="wishlistIcon">
                    <FavoriteBorderIcon />
                </span>
                My Wishlist
            </h1>

            <div className="wishlistGrid">

                {
                    wishlist.length === 0 ? (
                        <div className="emptyWishlist">
                            <h2><HeartBrokenIcon sx={{ color: "red",fontSize:"35px" }} /> Your Wishlist is Empty</h2>
                            <p>Add items you love!</p>
                            <Link to="/products" className="wishlistshopnow">
                                <ShoppingBagOutlinedIcon />
                                Shop Now
                            </Link>
                        </div>
                    ) : (
                        wishlist.map((item) => (
                            <div className="wishlistCard" key={item.id}>

                                <img
                                    src={item.imageUrl}
                                    className="wishlistImage"
                                    alt=""
                                />

                                <div className="wishlistInfo">

                                    <div className="wishlistName">
                                        {item.name}
                                    </div>

                                    <div className="wishlistPrice">
                                        <CurrencyRupeeIcon />
                                         {item.price}
                                    </div>
                                    <button
                                        className="moveToCartBtn"
                                        onClick={() => dispatch(moveToCart(item))}
                                    >
                                        Move to Cart <ShoppingCartOutlinedIcon />
                                    </button>
                                    <button
                                        className="removeBtn"
                                        onClick={() => handleRemove(item.id)}
                                    >
                                        <CancelOutlinedIcon /> Remove
                                    </button>

                                </div>

                            </div>
                        ))
                    )
                }

            </div>
        </div>
    )
}

export default Wishlist