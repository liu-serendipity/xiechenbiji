import styled from 'styled-components'

export const Wrapper = styled.div`
    .detail_relevant_wrap {
        height: 100%;
        background: #f4f8fb;
        margin-top: 10px;
    }
    .relevant_title {
        height: 60px;
        line-height: 60px;
        background: #fff;
        color: #222;
        font-size: 18px;
        font-family: PingFangSC-Medium;
        padding-left: 12px;
    }
    .relevant_waterfall_box {
        width: 100%;
        position: relative;
        background: #f4f8fb;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        height: 2710px;
    }
    .relevant_wf_item {
        width: 48%;
        box-shadow: 0 1px 8px rgb(0 0 0 / 4%);
        border-radius: 6px;
        margin-bottom: 10px;
        background: #fff;
        position: relative;
        counter-increment: item-counter;
    }
    .relevant_wf_item_box {
        margin: 5px;
        background: #fff;
        border-radius: 4px;
    }
    .wf_item_box_t, .wf_item_cover_image {
        position: relative;
        width: 100%;
    }
    .wf_item_cover_image {
        min-height: 150px;
        max-height: 300px;
        border-radius: 6px 6px 0 0;
        background: url(https://pages.c-ctrip.com/you/component-local/default.png) 50% no-repeat;
        background-size: 50%;
        z-index: 1;
    }
    .wf_item_video_icon {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 41px;
        height: 41px;
        margin-top: -20px;
        margin-left: -20px;
        z-index: 1;
    }
    .wf_item_poi_tag {
        display: -ms-flexbox;
        display: flex;
        max-width: 92%;
        position: absolute;
        bottom: 8px;
        left: 8px;
        height: 18px;
        padding: 0 8px 0 5px;
        border-radius: 18px;
        box-sizing: border-box;
        z-index: 1;
        font-size: 12px;
        background: rgba(0,0,0,.5);
        color: #fff;
        line-height: 18px;
    }
    .wf_item_poi_tag_icon {
        width: 16px;
        height: 16px;
        min-height: 0;
    }
    .wf_item_poi_tag_name {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .wf_item_box_c {
        padding: 6px 4px 0 8px;
    }
    .wf_item_article_title {
        font-size: 14px;
        line-height: 21px;
        max-height: 42px;
        color: #222;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }
    .wf_item_box_b {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        padding: 0 4px 12px 8px;
        overflow: hidden;
    }
    .wf_item_avatar_wrap {
        position: relative;
        width: 23px;
        height: 23px;
        margin-right: 8px;
        border: 1px solid #e2e2e2;
        border-radius: 50%;
    }
    .wf_item_avatar_img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
    .wf_item_avatar_vicon {
        width: 10px;
        height: 10px;
        position: absolute;
        bottom: 0;
        right: -3px;
    }
    .wf_item_nickname {
        -ms-flex: 1;
        flex: 1;
        font-size: 12px;
        color: #222;
        line-height: 18px;
        padding-right: 16px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        align-items: center;
    }
    .wf_item_like_wrap {
        position: relative;
        display: -ms-flexbox;
        display: flex;
        width: 50px;
        height: 32px;
        align-items: center;
    }
    .wf_item_like_icon {
        display: inline-block;
        width: 18px;
        height: 18px;
    }
    .wf_item_like_count {
        position: absolute;
        left: 18px;
        height: 14px;
        text-align: right;
        font-size: 11px;
        color: #222;
        line-height: 14px;
    }
`