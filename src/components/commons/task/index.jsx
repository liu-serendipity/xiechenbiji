import React, { useEffect, useState } from 'react';
import { Wrapper } from './style'
import Swiper from 'swiper'

const Task = () => {
    const [istask, setIstask] = useState(true)
    let swiper = null;
    useEffect(() => {
        if (swiper) {
            return 
        }
        swiper= new Swiper('.swiper-container', {})
    }, [])

    return (
        istask && <Wrapper>
            <div className="task-module">
                <div className="swiper-container task-swiper swiper-container-3d">
                    <div className="swiper-wrapper">
                        <div className="task-item swiper-slide">
                            <img src="https://dimg04.c-ctrip.com/images/0106l120008jelt2nB954.png" alt="" className="task_item_img" />
                        </div>
                    </div>
                </div>
                <div className="close-view" onClick={() => setIstask(!istask)} >
                    <img src="https://pages.c-ctrip.com/livestream/tripshoot/dest_tripshoot_task_close.png" className="close_view_img" />
                </div>
            </div>
        </Wrapper>
    )
}

export default Task