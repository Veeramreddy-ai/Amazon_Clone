import React from 'react'
import './HomeBanner.css'
import HomeBannerItemProduct from '../../../HomeProduct.json';

function HomeBanner () {
    return (
        <div className="homeBanner">
            <img className='homeBannerimg' src='https://m.media-amazon.com/images/I/61Dr+oVuClL._SX3000_.jpg' />
            <div className="grayBackgroundHomeBanner"></div>

            <div className="homeBannerItemDiv">

                {
                    HomeBannerItemProduct.product.map((item, ind) => {
                        return (
                            <div className="homeBannerItemDivCard" key={ind}>
                                <div className="homeBannerItemDivCardTitle">{item.itemTitle}</div>
                                <div className="imgHomeBannerItemDivCard">
                                    {
                                        item.imgs.map((item, ind )=> {
                                            return (
                                                <div className="imgBannerHomeDiv" key={ind}>
                                                    <img className='imgBannerHomeDivImg' src={item} />
                                                    <div className="imgBannerImgName">boAt Stone 1800 Bluet</div>
                                                </div>
                                            );

                                        })
                                    }




                                </div>

                                <div className="seeMoreHomeBanner">See More</div>
                            </div>
                        );
                    })
                }






            </div>

        </div>
    )
}

export default HomeBanner