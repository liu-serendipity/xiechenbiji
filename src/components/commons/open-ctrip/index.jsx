import React from 'react';
import { Wrapper } from './style'

const OpenCtrip = ({text}) => {
    return (
        <Wrapper>
            <div className="openCtrip_media openCtrip_Bottom">{text}</div>
        </Wrapper>
    )
}

export default OpenCtrip