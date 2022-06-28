import styled from 'styled-components'

export const Wrapper = styled.div`
    .star_product_wrap {
        position: relative;
        margin-top: -10px;
        margin-bottom: 4px;
    }
    .goods_cards_wrap * {
        box-sizing: border-box;
    }
    .goods_cards_wrap {
        position: relative;
        width: 100%;
        font-family: PingFangSC-Regular;
        .swiper-container {
            padding: 12px 16px;
            .swiper-slide {
                margin-right: 16px;
            }
        }
        .goods_card_border {
            position: relative;
            display: flex;
            width: calc(100% - 24px);
            height: 105px;
            background-color: #fff;
            padding: 8px 14px 8px 8px;
            border-radius: 4px;
            margin: auto;
            box-shadow: 0 1px 12px 0 rgb(154 191 219 / 28%);
            justify-content: space-between;
        }
        .card_cover_wrap {
            position: relative;
            width: 89px;
            height: 89px;
            border-radius: 4px;
            overflow: hidden;
        }
        .card_cover_img {
            width: 100%;
            height: 100%;
            border-radius: 4px;
        }
        .card_cover_tag {
            position: absolute;
            top: 0;
            left: 0;
            height: 19px;
            max-width: 80%;
            padding: 0 5px;
            border-radius: 4px 0;
            background-color: rgba(51,51,51,.8);
            box-shadow: 0 2px 8px 1px rgb(0 0 0 / 6%);
            text-align: center;
            font-size: 11px;
            color: #fff;
            line-height: 19px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .card_cover_tag_bottom {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 20px;
            border-radius: 0 0 4px 4px;
            background-image: url(https://pages.c-ctrip.com/livestream/tripshoot/goods_tag_bottom_bg.png);
            background-size: 100% 100%;
            font-family: PingFangSC-Medium;
            font-size: 11px;
            color: #fff;
            text-align: center;
            line-height: 20px;
        }
        .card_body_wrap {
            position: relative;
            height: 100%;
            width: calc(100% - 97px);
        }
        .body_title_main {
            width: 100%;
            height: 21px;
            margin-bottom: 2px;
            font-family: PingFangSC-Medium;
            font-size: 16px;
            color: #222;
            line-height: 21px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .body_tags_wrap {
            display: flex;
            width: 163px;
            height: 16px;
            margin-top: 2px;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            overflow: hidden;
        }
        .body_tag {
            height: 100%;
            padding: 2px 4px;
            border-radius: 2px;
            margin-right: 4px;
            font-size: 11px;
            line-height: 12px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .body_footer_wrap {
            position: absolute;
            left: 0;
            bottom: 0;
            display: -ms-flexbox;
            display: flex;
            width: 100%;
            height: 30px;
            -ms-flex-pack: justify;
            justify-content: space-between;
            -ms-flex-align: end;
            align-items: flex-end;
        }
        .footer_desc_wrap {
            display: -ms-flexbox;
            display: flex;
            -ms-flex: 1;
            flex: 1;
            height: 13px;
            margin-bottom: 5px;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            overflow: hidden;
        }
        .footer_desc_item {
            min-width: 20px;
            height: 13px;
            margin-right: 4px;
            line-height: 13px;
            font-size: 12px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .footer_btn {
            position: relative;
            height: 30px;
            left: 4px;
            padding: 0 12px;
            border-radius: 4px;
            background-image: linear-gradient(270deg,#f70,#ffa50a);
            line-height: 30px;
            font-size: 13px;
            color: #fff;
            -ms-flex: none;
            flex: none;
            z-index: 1;
        }
        .dark_text {
            position: absolute;
            top: 2px;
            right: 2px;
            width: 10px;
            font-family: PingFangSC-Light;
            font-size: 10px;
            color: #eef1f6;
            line-height: 12px;
            word-break: break-all;
        }
        .footer_price_wrap {
            display: -ms-flexbox;
            display: flex;
            -ms-flex-align: end;
            align-items: flex-end;
            color: #f70;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            overflow: hidden;
            height: 20px;
        }
        .price_prefix {
            font-family: PingFangSC-Medium;
            font-size: 10px;
            line-height: 18px;
        }
        .price_num {
            margin-right: 1px;
            font-family: PingFangSC-Medium;
            font-size: 16px;
            line-height: 20px;
        }
        .price_suffix {
            font-size: 10px;
            line-height: 18px;
        }
        .price_original {
            margin-left: 2px;
            font-size: 11px;
            color: #999;
            line-height: 16px;
            text-decoration: line-through;
        }
        .price_discount {
            height: 16px;
            padding: 0 4px;
            background-color: #fff1e6;
            border-radius: 8px;
            margin-left: 4px;
            margin-bottom: 2px;
            font-size: 10px;
            color: #f70;
            line-height: 16px;
        }
        .footer_btn_sold {
            position: relative;
            display: -ms-flexbox;
            display: flex;
            height: 40px;
            left: 4px;
            padding: 0 12px;
            border-radius: 4px;
            background-image: linear-gradient(270deg,#f70,#ffa50a);
            line-height: 30px;
            font-size: 13px;
            color: #fff;
            -ms-flex: none;
            flex: none;
            -ms-flex-direction: column;
            flex-direction: column;
            -ms-flex-align: center;
            align-items: center;
        }
        .btn_sold_name {
            margin-top: 5px;
            margin-bottom: 2px;
            font-family: PingFangSC-Medium;
            line-height: 17px;
        }
        .btn_sold_num {
            font-size: 10px;
            line-height: 11px;
        }
        .maindesc {
            background-image: linear-gradient(270deg, rgb(250, 133, 80) 0%, rgb(233, 100, 93) 100%);
            color: rgb(255, 255, 255);
        }
        .partdesc {
            background: rgb(242, 248, 254);
            color: rgb(38, 152, 247);
        }
    }
`