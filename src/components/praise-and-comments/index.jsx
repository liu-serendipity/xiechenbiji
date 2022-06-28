import React from 'react';
import { Wrapper } from './style'

const PraiseAndComments = ({useinfo}) => {

    const items = () => {
        return useinfo
            .filter(item => item.ispraise === true)
            .map((item) => 
                <div className="head_img_item" key={item.user_id}>
                    <img src={item.user_head_img} alt="" className="head_img" />
                </div>
        )
    }

    const items1 = () => {
        const items2 = useinfo.filter(item1 => item1.comments !== null)
        return items2.map((item, index) => 
                <div className="comment_list_item" key={item.user_id}>
                    <div className="item_head_wrap">
                        <img src={item.user_head_img} alt="" className="item_head_img" />
                    </div>
                    <div className="item_info_wrap">
                        <div className="item_name_wrap">
                            <span className="item_info_name">{item.user_name}</span>
                        </div>
                        <div className="item_comment_content">{item.comments}</div>
                        <div className="item_publish_time">2天前</div>
                    </div>
                    <div className="item_praise_wrap">
                        <span className="item_praise_btn"></span>
                        <span className="item_praise_num">{item.comments_praise}</span>
                        { index+1 != items2.length && <div className="item_spliter"></div> }
                    </div>
                </div>
        )
    }

    // 假数据，简单判断用户/文章id，从而获得/更新点赞数
    const contentPraise = () => {
        return useinfo.map(element => {
            if (element.user_id == 8) return element.content_praise
        });
    }

    return (
        <Wrapper>
            <div className="praise_card_wrap">
                <div className="head_img_wrap">
                    {items()}
                </div>
                <div className="praise_more">
                    <img src="https://pages.c-ctrip.com/livestream/tripshoot/zan_700.png" alt="" className="praise_more_img" />
                </div>
                <div className="praise_btn_wrap">
                    <span className="praise_btn"></span>
                    <span className="praise_count_wrap">{contentPraise()}</span>
                </div>
            </div>
            <div className="comment_list_wrap">
                <div className="comment_list_title">评论</div>
                {items1()}
            </div>
        </Wrapper>
    )
}

export default PraiseAndComments