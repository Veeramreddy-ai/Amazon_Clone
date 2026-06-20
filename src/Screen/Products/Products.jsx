import React, { useState } from 'react'
import './Products.css';
import StarRateIcon from '@mui/icons-material/StarRate';
import StarOutlineIcon from '@mui/icons-material/StarOutlineOutlined';
import productDetail from './products.json';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/Actions/Actions';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Link } from 'react-router-dom';

function Products() {

    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOption, setSortOption] = useState("");
    const [priceFilter, setPriceFilter] = useState("");
    const cartItems = useSelector((state) => state.cart.items);
    const handleAddToCart = (item) => {

        toast.success("Added To Cart", {
            position: "bottom-right"
        })

        dispatch(addToCart(item));
    }
    let filteredProducts = [...productDetail.product];

    filteredProducts = filteredProducts.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    switch (priceFilter) {
        case "under1000":
            filteredProducts = filteredProducts.filter(
                (item) => item.price < 1000
            );
            break;

        case "1000to10000":
            filteredProducts = filteredProducts.filter(
                (item) => item.price >= 1000 && item.price <= 10000
            );
            break;

        case "above10000":
            filteredProducts = filteredProducts.filter(
                (item) => item.price > 10000
            );
            break;

        default:
            break;
    }
    // console.log("Search:", searchTerm);
    // console.log("Products:", filteredProducts);

    if (sortOption === "lowToHigh") {
        filteredProducts = [...filteredProducts].sort(
            (a, b) => a.price - b.price
        );
    }

    if (sortOption === "highToLow") {
        filteredProducts = [...filteredProducts].sort(
            (a, b) => b.price - a.price
        );
    }
    return (
        <div className="productPage">
            <div className="productTopBanner">
                <div className="productTopBannerItems">
                    Electronics
                </div>
                <div className="productTopBannerItemsSubMenu">Mobiles & Accessories</div>
                <div className="productTopBannerItemsSubMenu">Laptops & Accessories</div>
                <div className="productTopBannerItemsSubMenu">TV & Home Entertainment</div>
                <div className="productTopBannerItemsSubMenu">Audio</div>
                <div className="productTopBannerItemsSubMenu">Cameras</div>
                <div className="productTopBannerItemsSubMenu">Computer Peripherals</div>
                <div className="productTopBannerItemsSubMenu">Smart Technology</div>
                <div className="productTopBannerItemsSubMenu">Musical Instruments</div>
                <div className="productTopBannerItemsSubMenu">Office & Stationary</div>
            </div>

            <div className="productsPageMain">
                <div className="productsPageMainLeftCategory">
                    <div className="productsPageMainLeftCategoryTitle">Category</div>
                    <div className="productsPageMainLeftCategoryContent">
                        <div className="productsPageMainLeftCategoryTitleContent">Computers & Accessories</div>
                        <div className="productsPageMainLeftCategoryContentSub">Macbooks</div>
                        <div className="productsPageMainLeftCategoryContentSub">Amazon Prime</div>
                        <div className="productsPageMainLeftCategoryContentSub">Average Customer Review</div>

                        <div className="ratingLeftBox">
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />

                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <div className="andUp"> & Up</div>
                        </div>

                        <div className="ratingLeftBox">
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />

                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <div className="andUp"> & Up</div>
                        </div>

                        <div className="ratingLeftBox">
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />

                            <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <div className="andUp"> & Up</div>
                        </div>

                        <div className="ratingLeftBox">
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />

                            <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <div className="andUp"> & Up</div>
                        </div>

                        <div className="productsPageMainLeftCategoryContentSub">Amazon Prime</div>
                        <div className="productsPageMainLeftCategoryContentSub">Average Customer Review</div>

                        <div className="productsPageMainLeftCategoryContentSub">Amazon Prime</div>
                        <div className="productsPageMainLeftCategoryContentSub">Average Customer Review</div>

                        <div className="productsPageMainLeftCategoryContentSub">Amazon Prime</div>
                        <div className="productsPageMainLeftCategoryContentSub">Average Customer Review</div>

                        <div className="productsPageMainLeftCategoryContentSub">Amazon Prime</div>
                        <div className="productsPageMainLeftCategoryContentSub">Average Customer Review</div>

                        <div className="productsPageMainLeftCategoryContentSub">Amazon Prime</div>
                        <div className="productsPageMainLeftCategoryContentSub">Average Customer Review</div>

                    </div>
                </div>

                <div className="productsPageMainRight">
                    <div className="productsPageMainRightTopBanner">
                        1-5 of 5 results for <span className='productsPageMainRightTopBannerSpan'>Macbooks</span>
                    </div>
                    <div className="productControls">

                        <input
                            type="text"
                            placeholder="Search Product..."
                            value={searchTerm}
                            onChange={(e) => {
                                console.log(e.target.value);
                                setSearchTerm(e.target.value);
                            }}
                        />

                        <select
                            value={priceFilter}
                            onChange={(e) => {
                                console.log("Price Filter:", e.target.value);
                                setPriceFilter(e.target.value);
                            }}
                        >
                            <option value="">All Prices</option>
                            <option value="under1000">Under ₹1000</option>
                            <option value="1000to10000">₹1000 - ₹10000</option>
                            <option value="above10000">Above ₹10000</option>
                        </select>

                        <select
                            value={sortOption}
                            onChange={(e) => {
                                console.log("Sort:", e.target.value);
                                setSortOption(e.target.value);
                            }}
                        >
                            <option value="">Sort By</option>
                            <option value="lowToHigh">Price Low To High</option>
                            <option value="highToLow">Price High To Low</option>
                        </select>

                    </div>
                    <div className="itemsImageProductPage">

                        {
                            filteredProducts.map((item, index) => {
                                return (
                                    <div className='itemsImageProductPageOne' key={item.id}>
                                        <div className='imgBlockitemsImageProductPageOne'>
                                            <Link to={`/product/${item.id}`}>
                                                <img
                                                    src={item.imageUrl}
                                                    className='productImageProduct'
                                                    alt=""
                                                />
                                            </Link>
                                        </div>
                                        <div className='productNameProduct'>
                                            <div>{item.name}</div>
                                            <div className='productNameProductRating'>
                                                <StarRateIcon sx={{ fontSize: "16px", color: "#febd69" }} />
                                                <StarRateIcon sx={{ fontSize: "16px", color: "#febd69" }} />
                                                <StarRateIcon sx={{ fontSize: "16px", color: "#febd69" }} />
                                                <StarRateIcon sx={{ fontSize: "16px", color: "#febd69" }} />
                                                <StarOutlineIcon sx={{ fontSize: "16px", color: "#febd69" }} />
                                            </div>
                                            <div className='priceProductDetailsPage'>
                                                <div className='currencyText'><CurrencyRupeeIcon sx={{ fontSize: "16px" }} /></div>
                                                <div className='rateHomeDetail'>
                                                    <div className='rateHomeDetailsPrice'>{item.price}</div>
                                                    <div className='addtobasketBtn' onClick={() => {
                                                        handleAddToCart(item)
                                                    }}>Add To Cart</div>
                                                </div>
                                            </div>
                                            <div className='offProductPage'> Upto 10% off on select cards</div>
                                            <div className='freeDeliveryHomePage'>Free Delivery By Amazon</div>
                                        </div>
                                    </div>
                                );

                            })
                        }


                    </div>

                </div>
            </div>
            <ToastContainer />
        </div>


    )
}

export default Products