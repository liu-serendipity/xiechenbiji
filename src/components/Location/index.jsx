import React from 'react'
import { Wrapper } from './style'
import { LocationFill, RightOutline } from 'antd-mobile-icons'

const Location = ({contentLocation=[]}) => {
    // console.log(contentLocation);
    const items = () => {
        return contentLocation.map((item, index) => 
            <div className="poiItem detail_poi_item" key={ index }>
                <LocationFill />
                <span className="poi_item_name">
                    {item.location}
                    { item.content_nums != 0 && <span className="poicount poi_item_count">{item.content_nums}</span> }
                </span>
                <RightOutline className="right-outline" />
            </div>
        )
    }

    return (
        <Wrapper>
            <div className="poitag detail_poi_wrap poi_wrap_level">{items()}</div>
        </Wrapper>
    )
}

export default Location