import styled from "styled-components";

export const Wrapper = styled.div`
    .open_Model {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        background-color: rgba(0,0,0,.7);
        z-index: 100;
        .content {
            position: absolute;
            width: 280px;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            background-color: #fff;
            border-radius: 8px;
            padding: 24px 16px 16px;
            .content_text {
                color: #333;
                font-family: PingFangSC-Medium;
                font-size: 15px;
                font-weight: 500;
                line-height: 23px;
                text-align: center;
            }
            .footer_handle {
                margin-top: 24px;
                display: -ms-flexbox;
                display: flex;
                .btn {
                    -ms-flex: 1;
                    flex: 1;
                    line-height: 36px;
                    text-align: center;
                    border-radius: 18px;
                    box-sizing: border-box;
                    color: #fff;
                    font-family: PingFangSC-Regular;
                    font-size: 15px;
                    font-weight: 400;
                }
                .cancle {
                        border: 1px solid #2698f7;
                        color: #0086f6;
                    }
                .confirm {
                    background: #0086f6;
                    margin-left: 12px;
                }
            }
        }
    }
`