import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.scss";
import { Pagination } from "swiper";
import Banner from "../../assets/banner-home2.jpg";
import userImg1 from "../../assets/user-img-1.jpg";
import userImg2 from "../../assets/user-img-2.png";
import userImg3 from "../../assets/user-img-3.png";
import userImg4 from "../../assets/user-img-4.png";
import userImg5 from "../../assets/user-img-5.png";
import productSteam1 from "../../assets/product-img-steam-1.jpg";
import playVideoIcon from "../../assets/play-icon.svg";
import axios from 'axios';
import ReactOwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Button from '../../components/Button';
import HeaderSecond from '../../components/Header2';
import PostSecond from '../../components/Post2';
import productImg1 from "../../assets/productImg-1.jpg";

function Homepage2() {
    //const imageDummy =  ""
    const [homeData, setHomeData] = useState([])

    const getHomeData = async () => {

        var config = {
            method: 'get',
            url: 'https://api.galleri5.co.in/servicer/galleri5/creator-zone/home',
            headers: {}
        };

        await axios(config)
            .then(function (response) {
                setHomeData(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        getHomeData();
    }, [])

    console.log(homeData, "homeData")

    const heroBanners = homeData && homeData.length && homeData?.filter(item => item.name === "HERO_BANNER_CAROUSEL")[0] || {}
    const RoundedTopInfluencers = homeData && homeData.length && homeData?.filter(item => item.name === "ROUNDED_IMAGE_CAROUSEL")[0] || {}
    const liveStream = homeData && homeData.length && homeData?.filter(item => item.name === "MINI_IMAGE_CAROUSEL")[0] || {}
    const profile = homeData && homeData.length && homeData?.filter(item => item.name === "FEED_TIMELINE")[0] || {}
    const profileDetails = profile?.details?.meta[0]?.details
    const imageDummy = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"

    console.log(homeData, "homeDatahomeDatahomeData")

    console.log(heroBanners, "heroBanners")
    console.log(RoundedTopInfluencers, "RoundedTopInfluencers")

    return (
        <div className='dark-theme'>
            <div className='banner-slider-home'>
                <ReactOwlCarousel
                    className='owl-theme'
                    loop={true}
                    autoplayTimeout={100000}
                    autoplay={true}
                    margin={10}
                    nav
                    items="1"
                >
                    {/* <div className='carausal-image'>
                        <img src={Banner} alt="postImage" />
                    </div> */}
                    {heroBanners?.details?.meta?.map((item, index) => {
                        return (
                            <div className='carausal-image' key={index}>
                                <img src={item?.thumbnail} alt="postImage" />
                            </div>
                        )
                    })}
                </ReactOwlCarousel>
            </div>
            <div className='top-influence-sect'>
                <div className='container-width'>
                    <div className='heading-sect'>
                        <h2 className='title-h2-head'>{RoundedTopInfluencers?.details?.title || "Top Influencers"}</h2>
                    </div>
                    <div className='influice--wrap-items'>
                        <ReactOwlCarousel
                            className='owl-theme top-slide-product'
                            loop={true}
                            autoplayTimeout={10000}
                            autoplay={true}
                            margin={10}
                            nav={false}
                            dots={false}
                            items="4"
                        >
                            {RoundedTopInfluencers?.details?.meta?.map((item, index) => {
                                return (
                                    <div class='item' key={index}>
                                        <div className='item--topcategry text-center'>
                                            <div className='imgproduct--gm'><img src={item?.thumbnail} alt="" /></div>
                                            <h4 className='heading-gm-wigt' style={{ color: "#fff" }}>{item?.name || ''}</h4>
                                        </div>
                                    </div>
                                )
                            })}
                        </ReactOwlCarousel>
                    </div>
                </div>
            </div>
            <div className='live-stream-wap'>
                <div className='container-width'>
                    <div className='heading-sect stream-heading'>
                        <h2 className='title-h2-head'><img src={playVideoIcon} alt='Play icon' /> Live Streams</h2>
                        <span className='view-allstream'><button type='button' className='btn-view-all'>View All</button></span>
                    </div>
                    <div className='stream-sec-wap'>
                        <div className='row-stream-grid-custom'>
                            {
                                liveStream?.details?.meta.map((val, index) => {
                                    return (
                                        <div key={index} className='column-wig--stmweb'>
                                            <div className='stm-boxwidgets'>
                                                <div className='img-product--mt'><img src={val?.thumbnail} alt="web" /></div>
                                                <div className='disc-shortweb-stm'>
                                                    <h3 className='headstm--wm'>{val.description || ''}</h3>
                                                    <span className='name-usr-titl'>{val.name || ''}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                            {/* <div className='column-wig--stmweb'>
                                <div className='stm-boxwidgets'>
                                    <div className='img-product--mt'><img src={productSteam1} alt="web" /></div>
                                    <div className='disc-shortweb-stm'>
                                        <h3 className='headstm--wm'>Festive Festival Watches Extra 20% Off</h3>
                                        <span className='name-usr-titl'>Raghav</span>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className='postwap--sectbody'>
                <div className='container-width'>
                    <>
                        <PostSecond profileDetails={profileDetails} onProfileClick={'/profile2'}/>
                    </>
                </div>
            </div>
        </div>
    )
}
export default Homepage2;