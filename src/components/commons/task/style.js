import styled from "styled-components";

export const Wrapper = styled.div`
    .task-module {
        position: fixed;
        width: 80px;
        height: 80px;
        bottom: 96px;
        right: 8px;
        overflow: hidden;
        z-index: 2;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        .task-swiper {
            width: 55px;
            height: 55px;
            .task-item {
                width: 100%;
                height: 100%;
                .task_item_img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
            }
        }
        .close-view {
            position: absolute;
            right: 5px;
            top: 5px;
            width: 20px;
            height: 20px;
            z-index: 1;
            .close_view_img {
                width: 16px;
                height: 16px;
                top: 0;
                right: 0;
                position: absolute;
            }
        }
    }
    
`