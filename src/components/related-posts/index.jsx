import React, { useRef, useEffect } from 'react';
import { Wrapper } from './style'
import { EnvironmentOutline, LikeOutline } from 'antd-mobile-icons';

const RelatedPosts = ({posts}) => {

    const items = () => {
        return posts.map(item => 
            <div className="wf_item relevant_wf_item" key={item.others_id}>
                <div className="relevant_wf_item_box">
                    <div className="wf_item_box_t">
                        <img src={item.others_img} alt="" className="wf_item_cover_image" />
                        { 
                            item.isvedio && 
                            <img src="https://pages.c-ctrip.com/you/livestream/lvpai_waterfall_paly.png" 
                                alt="" 
                                className="wf_item_video_icon" />
                        }
                        <div className="wf_item_poi_tag">
                            <EnvironmentOutline className="wf_item_poi_tag_icon" />
                            <div className="wf_item_poi_tag_name">{item.others_location}</div>
                        </div>
                    </div>
                    <div className="wf_item_box_c">
                        <div className="wf_item_article_title">{item.others_title}</div>
                    </div>
                    <div className="wf_item_box_b">
                        <div className="wf_item_avatar_wrap">
                            <img src={item.others_head_img} alt="" className="wf_item_avatar_img" />
                            { item.isvicon && <img src="https://dimg04.c-ctrip.com/images/0104h1200082xud8qB94B.png" alt="" className="wf_item_avatar_vicon" /> }
                        </div>
                        <p className="wf_item_nickname">{item.others_name}</p>
                        <div className="wf_item_like_wrap">
                            <LikeOutline className="wf_item_like_icon"/>
                            <span className="wf_item_like_count">{item.others_content_praise}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <Wrapper>
            <div className="detail_relevant_wrap">
                <div className="relevant_title">相关帖子</div>
                <div className="relevant_waterfall_box">
                    {items()}
                </div>
            </div>
        </Wrapper>
    )
}

export default RelatedPosts