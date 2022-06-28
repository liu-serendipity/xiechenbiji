import styled from 'styled-components'

export const Wrapper = styled.div`
    .detail_content_wrap {
        padding: 0 16px;
        background: #fff;
        font-size: 17px;
        font-family: PingFangSC-Regular;
        color: #222;
        line-height: 26px;
        position: relative;
        text-align: justify;
        .detail_content_title {
            font-family: PingFangSC-Medium;
            font-size: 20px;
            color: #333;
            text-align: justify;
        }
        .content_ctag {
            font-size: 16px;
            font-family: PingFangSC-Regular;
            z-index: 3;
            color: #0086f6;
        }
        .ctag_poi:before {
            content: "";
            display: inline-block;
            width: 18px;
            height: 18px;
            margin-top: -5px;
            background-image: url(https://pages.c-ctrip.com/livestream/tripshoot/detail_content_location.png);
            background-size: 100%;
            vertical-align: middle;
        }
    }
    #contentDetail {
        word-break: break-word;
        white-space: pre-line;
    }
    .content_detail_retract {
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 10;
        overflow: hidden;
        display: -webkit-box;
    }
    .content_retract_div {
        margin-top: -70px;
        .content_retract_before {
            width: 100%;
            height: 70px;
            display: block;
            background-image: linear-gradient(-180deg,hsla(0,0%,100%,0),#fff);
        }
    }
    .content_retract_content {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: center;
        justify-content: center;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #0086f6;
    }
    .content_topic_layer {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        background-color: #fff;
        padding: 16px 16px 11px;
    }
    .publish_time_wrapper {
        height: 24px;
        padding: 0 16px 12px;
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #999;
        line-height: 24px;
        background-color: #fff;
        .publish_time {
            margin-right: 8px;
        }
    }
    .content_spliter {
        width: 100%;
        height: 10px;
        background-color: #f2f6f9;
    }
`