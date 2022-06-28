import styled from 'styled-components'

export const Wrapper = styled.div`
    .level_icon_wrap {
        position: relative;
        width: 100%;
        height: 0;
        .level_icon_img {
            position: absolute;
            bottom: -10px;
            right: 8px;
            width: 55px;
            height: 55px;   
            z-index: 1;
        }
    }
`