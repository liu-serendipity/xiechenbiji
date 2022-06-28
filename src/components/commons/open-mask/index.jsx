import React from 'react';
import { Wrapper } from './style'

const Mask = ({closeMask}) => {

    return (
        <Wrapper>
                <div className="open_Model">
                    <div className="content">
                        <div className="content_text">是否打开“携程App”阅读全文</div>
                        <div className="footer_handle">
                            <div className="btn cancle" onClick={closeMask}>取消</div>
                            <div className="btn confirm">确认</div>
                        </div>
                    </div>
                </div>
        </Wrapper>
    )
}

export default Mask