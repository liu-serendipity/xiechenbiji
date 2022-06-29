import styled from 'styled-components'

export const Wrapper = styled.div`
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