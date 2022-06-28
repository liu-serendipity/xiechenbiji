import React from 'react';
import { Wrapper } from './style'
import { LeftOutline } from 'antd-mobile-icons'

const Header = () => {
    return (
        <Wrapper>
            <div className="header detail_header">
                <LeftOutline className="iconstyle"/>
                <a href="#">
                    <span>携程笔记</span>
                </a>
            </div>
        </Wrapper>
    )
}

export default Header