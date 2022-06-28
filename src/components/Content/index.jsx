import React, { useState, useEffect } from 'react';
import { Wrapper } from './style'
import { DownOutline, UpOutline } from 'antd-mobile-icons'
import classnames from 'classnames'
import Mask from '../commons/open-mask'

const Content = ({content={}}) => {

    const { contentDetail={} } = content
    const { content_tags=[], contents, content_title, contentDate } = contentDetail
    const [isdisplay, setIsdisplay] = useState(true)
    const [ismask, setIsmask] = useState(false)

    const tags = () => {
        return content_tags.map((tag, index) => 
            <span className="content_ctag" key={index}>{tag}</span>
        )
    }

    const display = () => {
        setIsdisplay(!isdisplay)
        setIsmask(true)
    }

    const closeMask = () => {
        setIsmask(false)
    }

    let time = new Date(contentDate)
    let nowtime = new Date()
    let dateDiff = nowtime.getTime() - time.getTime()
    let dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000))

    return (
        <Wrapper>
            <div className="content detail_content_wrap" >
                <div id="contentDetail" className={classnames({content_detail_retract: isdisplay})}>
                    <span className="detail_content_title">{content_title}</span><br/>
                    {tags()}<br/> 
                    {contents}
                </div>
                {
                    isdisplay &&
                    <div className="content_retract_div" onClick={() => display()} >
                            <p className="content_retract_before"></p>
                            <p className="content_retract_content">
                                展开全文
                                <DownOutline />
                            </p>
                    </div>
                }
                {
                    !isdisplay &&
                    <div onClick={() => display()}>
                        <p className="content_retract_content">
                            收起
                            <UpOutline />
                        </p>
                    </div>
                }
            </div>
            <div className="content_topic_layer taglist"></div>
            <div className="publish_time_wrapper time">
                <span className="publish_time">{`${dayDiff}天前发布`}</span>
                <span className="shoot_time">{`拍摄于${contentDate}`}</span>
            </div>
            <div className="content_spliter"></div>
            <Mask ismask={ismask} closeMask={closeMask} />
        </Wrapper>
    )
}

export default Content