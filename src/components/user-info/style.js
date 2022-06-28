import styled from 'styled-components';

export const Wrapper = styled.div`
    .user_info_wrap{
        position: relative;
        display: flex;
        box-sizing: border-box;
        width: 100%;
        padding: 8px 16px;
        background-color: #fff;
        z-index: 2;
        -ms-flex-align: center;
        align-items: center
    }
    .user_head_img_wrap {
        position: relative;
        width: 36px;
        height: 36px;
        margin-right: 6px;
        border: 1px solid #eaeaea;
        border-radius: 50%;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        .user_head_img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
        .user_head_vicon {
            position: absolute;
            right: 0;
            bottom: 0;
            width: 11px;
            height: 11px;
        }
    }
    .user_text_wrap {
        display: flex;
        flex-direction: column;
        margin-right: 4px;
        width: calc(100% - 114px);
        .user_name_and_tag {
            display: flex;
            align-items: center;
            .user_text_name {
                margin-right: 3px;
                font-family: PingFangSC-Medium;
                font-size: 18px;
                color: #222;
                line-height: 20px;
                flex-shrink: 3;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                -ms-flex-negative: 3;
            }
        }
        .user_text_job {
            display: flex;
            flex-direction: row;
            margin-top: 4px;
            align-items: center;
            .user_text_job_name {
                display: flex;
                max-width: 100%;
                padding: 0px 3px;
                background-color: rgba(204, 132, 8, 0.08);
                border-radius: 8px 1px;
                font-family: PingFangSC-Regular;
                font-size: 10px;
                color: rgb(204, 132, 8);
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                margin-right: 4px;
            }
            .user_text_describe {
                /* display: flex; */
                font-size: 11px;
                color: #999;
                line-height: 15px;
                -ms-flex: 1;
                flex: 1;
                font-family: PingFangSC-Regular;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
    }
    .user_btn_wrap {
        box-sizing: border-box;
        display: -ms-flexbox;
        display: flex;
        padding-left: 12px;
        padding-right: 12px;
        height: 28px;
        border: 1px solid #e1e1e1;
        border-radius: 14px;
        font-family: PingFangSC-Medium;
        font-size: 14px;
        color: #333;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        .btn_follow_text {
            line-height: 14px
        }
    }
    .media-layer {
        position: relative;
        height: 500px;
    }
    .mediaSwiper {
        height: 100%;
        position: relative;
    }
    .swiper-container {
        margin-left: auto;
        margin-right: auto;
        position: relative;
        overflow: hidden;
        list-style: none;
        padding: 0;
        z-index: 1;
    }
    .swiper-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        z-index: 1;
        display: flex;
        transition-property: transform;
        box-sizing: content-box;
    }
    .swiper-slide {
        flex-shrink: 0;
        width: 100%;
        height: 100%;
        position: relative;
        transition-property: transform;
        max-height: 500px;
        object-fit: cover;
    }
`