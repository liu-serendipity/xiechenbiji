import React, { useEffect } from 'react';
import { Wrapper } from './style'
import Swiper from 'swiper';

const CardSwiper = ({cardInfo}) => {

    let swiper = null;
    useEffect(() => {
        if (swiper) {
            return 
        }
        swiper= new Swiper('#cardswpier', {
            loop: true,
        })
    }, [])

    const renderCardInfo = () => {
        return cardInfo.map((item) => 
            <div key={item.id} className="swiper-slide goods_card_border">
                <div className="card_cover_wrap">
                    <img src={item.img} alt="" />
                        <span className="card_cover_tag">{item.tagleft}</span>
                    { item.tagbottom && <div className="card_cover_tag_bottom">{item.tagbottom}</div> }
                </div>
                <div className="card_body_wrap">
                    <div className="body_title_main">{item.title}</div>
                    <div className="body_tags_wrap">
                        { item.maindesc && <div className="body_tag maindesc">{item.maindesc}</div> }
                        { item.partdesc1 && <div className="body_tag partdesc">{item.partdesc1}</div> }
                        { item.partdesc2 && <div className="body_tag partdesc">{item.partdesc2}</div> }
                        { item.partdesc3 && <div className="body_tag partdesc">{item.partdesc3}</div> }
                    </div>
                    <div className="body_footer_wrap">
                        { 
                            item.pricenow &&
                            <>
                                <div className="footer_price_wrap">
                                <span className="price_prefix">{item.priceprefix}</span>
                                <span className="price_num">{item.pricenow}</span>
                                <span className="price_suffix">{`/${item.pricesuffix}晚`}</span>
                                <span className="price_original">{`${item.priceprefix}${item.priceonce}`}</span>
                                <span className="price_discount">{`${(item.pricenow/item.priceonce).toFixed(1)*10}折`}</span>
                                </div>
                                <div className="footer_btn_sold">
                                    <span className="btn_sold_name">抢购</span>
                                    <span className="btn_sold_num">{`已售${item.sellnums}份`}</span>
                                </div>
                            </>
                        }
                        {
                            item.commentsnums &&
                            <>
                                <div className="footer_desc_wrap">
                                    <span className="footer_desc_item blue" >{`${item.grade}分`}</span>
                                    <span className="footer_desc_item gray">{`${item.commentsnums}条评论`}</span>
                                </div>
                                <div className="footer_btn">去看看</div>
                            </>
                        }
                    </div>
                </div>
                <div className="dark_text">携程推荐</div>
            </div>)
    }

    return (
        <Wrapper>
            <div className="star_product_wrap">
                <div className="goods_cards_wrap">
                    <div className="swiper-container" id="cardswpier">
                        <div className="swiper-wrapper goods_swiper">
                            {renderCardInfo()}
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default CardSwiper