import React, { useState, useEffect } from 'react';
import { Wrapper } from './style'
import UserInfo from '../user-info'
import ImgSwiper from '../img-swiper'
import CardSwiper from '../card-swiper'
import Content from '../Content'
import PraiseAndComments from '../praise-and-comments'
import RelatedPosts from '../related-posts'
import Task from '../commons/task'
import Location from '../Location'
import LevelIcon from '../commons/level-icon'
import OpenCtrip from '../commons/open-ctrip'
import PublishButton from '../commons/publish-button'
import { getpersonInfo, getListInfo, getContent, getUserInfo, getOthers, getContentLocation } from '@/api/request'

const Main = () => {

    const [imgdata, setImgData] = useState([])
    const [cardInfo, setCardInfo] = useState([])
    const [content, setContent] = useState()
    const [useinfo, setUseInfo] = useState([])
    const [posts, setPosts] = useState([])
    const [contentLocation, setContentLocation] = useState()

    useEffect(() => {
        (async () => {
        let { data: imgData } = await getpersonInfo()
        let { data: cardInfoData } = await getListInfo()
        let { data: contentData } = await getContent()
        let { data: useInfoData } = await getUserInfo()
        let { data: postsData } = await getOthers()
        let { data: contentLocationData } = await getContentLocation()
        setImgData(imgData)
        setCardInfo(cardInfoData)
        setContent(contentData)
        setUseInfo(useInfoData)
        setPosts(postsData)
        setContentLocation(contentLocationData)
        })()
    }, [])

    return (
        <Wrapper>
            <div className="main">
                <UserInfo />
                <ImgSwiper imgdata={imgdata}/>
                <OpenCtrip text='打开携程App，查看高清大图' />
                <PublishButton />
                <Location contentLocation={contentLocation} />
                <LevelIcon />
                <CardSwiper cardInfo={cardInfo} />
                <Content content={content} />
                <PraiseAndComments useinfo={useinfo} />
                <OpenCtrip text='打开携程App，查看更多笔记'/>
                <RelatedPosts posts={posts} />
                <Task />
                <OpenCtrip text='打开携程App，查看更多笔记'/>
            </div>
        </Wrapper>
    )
}

export default Main