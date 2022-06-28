import styled from 'styled-components'

export const Wrapper = styled.div`
    .praise_card_wrap {
        position: relative;
        width: 100%;
        height: 62px;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        height: 62px;
        background: rgb(255, 255, 255);
    }
    .head_img_wrap {
        display: -ms-flexbox;
        display: flex;
        height: 29px;
        padding: 0 16px 0 20px;
    }
    .head_img_item {
        position: relative;
        width: 28px;
        height: 28px;
        margin-left: -4px;
        border: 1px solid #eee;
        border-radius: 50%;
    }
    .head_img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
    .praise_more {
        height: 32px;
    }
    .praise_more_img {
        height: 32px;
        width: 48px;
    }
    .praise_btn_wrap {
        position: absolute;
        right: 36px;
        top: 50%;
        transform: translateY(-50%);
        display: -ms-flexbox;
        display: flex;
    }
    .praise_btn {
        width: 34px;
        height: 26px;
        background-size: 25px;
        background-position: 5px 2px;
        background-repeat: no-repeat;
        background-image: url(https://pages.c-ctrip.com/livestream/tripshoot/zan_icon_empty.png);
    }
    .praise_count_wrap {
        position: absolute;
        left: 100%;
        font-family: PingFangSC-Regular;
        font-size: 11px;
        color: #222;
        line-height: 12px;
    }
    .comment_list_wrap {
        padding: 8px 16px;
        background: #fff;
        .comment_list_title {
            padding: 15px 12px 14px 0;
            font-size: 15px;
            font-family: PingFangSC-Regular;
            color: #222;
            background: #fff;
            line-height: 24px;
        }
        .comment_list_item {
            padding-bottom: 20px;
            display: -ms-flexbox;
            display: flex;
            position: relative;
        }
        .item_head_wrap {
            position: relative;
            width: 32px;
            height: 32px;
            margin-right: 5px;
            border: 1px solid #eaeaea;
            border-radius: 50%;
            -ms-flex-negative: 0;
            flex-shrink: 0;
        }
        .item_head_img {
            position: relative;
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
        .item_info_wrap {
            padding-right: 8px;
            -ms-flex: 1;
            flex: 1;
            width: calc(100% - 80px);
        }
        .item_name_wrap {
            font-size: 15px;
            color: #222;
            line-height: 21px;
            height: 21px;
            max-width: 250px;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-align: center;
            align-items: center;
        }
        .item_info_name {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-family: PingFangSC-Regular;
            font-size: 13px;
            color: #666;
            line-height: 16px;
        }
        .item_comment_content {
            font-size: 14px;
            font-family: PingFangSC-Medium;
            color: #222;
            line-height: 21px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .item_publish_time {
            color: #999;
            font-family: PingFangSC-Regular;
            line-height: 18px;
            font-size: 13px;
            margin-top: 4px;
        }
        .item_praise_wrap {
            display: -ms-flexbox;
            display: flex;
        }
        .item_praise_btn {
            width: 18px;
            height: 18px;
            background-image: url(https://pages.c-ctrip.com/you/livestream/lvpai-detail-newbot-praiseee.png);
            background-size: 18px;
        }
        .item_praise_num {
            font-family: PingFangSC-Regular;
            font-size: 11px;
            color: #222;
            line-height: 18px;
            margin-left: 2px;
        }
        .item_spliter {
            position: absolute;
            right: -16px;
            bottom: 11px;
            width: 322px;
            height: 1px;
            background: #eee;
            transform: scaleY(.5);
            width: 378px;
        }
    }
`