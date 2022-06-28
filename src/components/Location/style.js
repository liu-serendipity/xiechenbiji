import styled from "styled-components";

export const Wrapper = styled.div`
    .detail_poi_wrap {
        background: #fff;
        padding: 12px 0 16px 12px;
        display: -ms-flexbox;
        display: flex;
        white-space: nowrap;
    }
    .detail_poi_wrap.poi_wrap_level {
        margin-right: 63px;
    }
    .detail_poi_wrap .detail_poi_item {
        display: -ms-flexbox;
        display: flex;
        height: 20px;
        padding: 0 8px 0 2px;
        margin-right: 6px;
        border-radius: 14px;
        background: #f2f3f7;
        -ms-flex-align: center;
        align-items: center;
        font-size: 12px;
        line-height: 20px;
        font-family: PingFangSC-Regular;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        .location-fill {
            width: 16px;
            height: 16px;
            margin-right: 6px;
            -ms-flex-negative: 0;
            flex-shrink: 0;
        }
        .poi_item_name {
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: #333;
            -ms-flex: 1;
            flex: 1;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            .poi_item_count {
                font-family: PingFangSC-Regular;
                font-size: 10px;
                margin-left: 4px;
                color: #bbb;
            }
        }
        .right-outline {
            width: 14px;
            height: 14px;
        }
    }
`