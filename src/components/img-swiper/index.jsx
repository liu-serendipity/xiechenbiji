import React, { useEffect } from 'react';
import Swiper from 'swiper';
import { Wrapper } from './style';

const ImgSwiper = ({imgdata}) => {
    let swiper = null;
    useEffect(() => {
        if (swiper) {
            return 
        }
        swiper= new Swiper('#imgswiper', {
            loop: true,
            pagination: {
                el:"#pagination",
                // observerParent: true,
            }
        })
    }, [])

    const renderImg = () => {
        return imgdata.map(item => {
            return (
                <img 
                    src={item.pic} 
                    key={item.id}
                    className="swiper-slide"
                    />
            )
        })
    }

    return (
        <Wrapper>
            <div className="media media-layer">
                <div className="swiper-container mediaSwiper" id="imgswiper">
                    <div className="swiper-wrapper media-swiper-wrapper">
                        {renderImg()}
                    </div>
                    <div className="swiper-pagination" id="pagination"></div>
                </div>
            </div>
        </Wrapper>
    )
}

export default ImgSwiper