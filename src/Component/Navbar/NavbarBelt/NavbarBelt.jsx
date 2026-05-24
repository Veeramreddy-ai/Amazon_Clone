import React from 'react'
import './NavbarBelt.css'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import amazonlogo from '../../../assets/amazonlogo.png';
import india from '../../../assets/india.png';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function NavbarBelt() {
  const cartItems = useSelector((state) => state.cart?.items || []);
  return (
    <div className='navbarBelt'>
      <div className='leftNavBelt'>
          <Link to={'/'} className='leftNavBeltLogo'>
            <img className='amazonLogoNavbar' src={amazonlogo} alt="" />
            <span className='navbar_inLogo'>.in</span>
          </Link>
          <div className='navbarBeltLocation'>
              <div className='navbarBeltLocationImg'>
                  <LocationOnOutlinedIcon className="navbarBeltLocationImgIcon" sx={{ fontSize:"22px"}}/>
              </div>
              <div className='navbarBeltLocationPlace'>
                  <div className='navbarBeltLocationTop'>
                        Delivery to Pune 411032
                  </div>
                  <div className='navbarBeltLocationBottom'>
                        Update Location
                  </div>
              </div>
          </div>
      </div>
      <div className='navbarBeltSearchBox'>
          <div className='navbarBeltSearchDiv'>
            <div className='navbarBeltSearchBoxAll'>
                <div className='navbarBeltSearchBoxAllText'>All</div>
                 <ArrowDropDownOutlinedIcon sx={{fontSize:"20px"}}/>
            </div>

            <input type='text' className='navbarBeltInputSearchBox' placeholder='Search Amazon.in'/>

              <div className='searchIconNavbarBelt'>
                   <SearchOutlinedIcon sx={{fontSize:"26px"}} className='searchIconNavbarBeltIcon'/>      
              </div>
          </div>
      </div>
      <div className='rightSideNavbarBelt'>

                <div className='indianFlagCode'>
                   <img src={india} className='indiaFlag' alt="" />
                    <div className='indiaCodeNavbarBelt'>EN <ArrowDropDownOutlinedIcon sx={{fontSize:16,marginTop:1,marginLeft:0.4}} className='indiaCodeNavbarBeltDrp'/></div>

                </div>

                <div className='helloSignInNavbarBelt'>
                        <div className='helloTopNavbarBelt'>Hello, User</div>
                        <div className='indiaCodeNavbarBelt'>Accounts & Lists</div>
                        <div
   className='logoutBtnNavbar'
   onClick={()=>{
      localStorage.removeItem("isLoggedIn");
      window.location.reload();
   }}
>
   Logout
</div>
                </div>

                <div className='helloSignInNavbarBelt'>
                        <div className='helloTopNavbarBelt'>Returns</div>
                        <div className='indiaCodeNavbarBelt'>& Orders</div>
                </div>

                

                {/* <Link to={'/cart'} className='helloSignInNavbarBelt'>
                    <span className='cartItemNumberNavbarBelt'>2</span>
                    <div className='helloTopNavbarBelt'><ShoppingCartOutlinedIcon/> <span className='cartTitle'>Cart</span>

                    </div>
                </Link> */}

                <Link to={'/cart'} className='helloSignInNavbarBelt'>
                    <span className='cartItemNumberNavbarBelt'>{cartItems.length}</span>
                    <div className='helloTopNavbarBelt'><ShoppingCartOutlinedIcon/> <span className='cartTitle'>Cart</span></div>
                    

                </Link>
                


            </div>
      
    </div>

    
  )
}

export default NavbarBelt