import React, { useEffect, useState } from 'react';
import Button from '../../../components/Button';
import HeaderSecond from '../../../components/HeaderDark';
import productImg1 from "../../../assets/product-image-collect.jpg";
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import './styles.scss'
import PostProfileDark from '../../../components/PostProfileDark';
import LoaderMain from '../../../components/Loader';

function ProfileSecond() {
  const [postSate, setPostState] = useState(1);
  const [loading, setLoading] = useState(true);
  
  const [userDetails, setUserDetails] = useState({});
  const imageDummy = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  const { state } = useLocation();
  const { userName = '' } = state

  useEffect(() => {
    getUserDetails()
  }, [userName])

  const getUserDetails = async () => {
    if (userName) {
      const config = {
        method: 'get',
        url: `https://api.galleri5.co.in/servicer/galleri5/creator-zone/creator/profile/${userName}`
      };
      await axios(config)
        .then((response) => {
          setUserDetails(response.data)
        })
        .catch((error) => {
          console.log(error)
        }).finally(() =>{
          setLoading(false)
        })
    }
  }

  const handleClick = (val) => {
    setPostState(val)
  }

  const switchFeedType = () => {
    if (postSate == "1") {
      return userDetails?.posts?.length ?
        userDetails?.posts.map((val, index) => {
          return <div key={index}>
            <PostProfileDark postDetails={val} userDetails={userDetails} />
          </div>
        }) : <div className="noData-msg">No Posts Yet!</div>
    } else {
      return userDetails?.collections?.length ?
        userDetails?.collections?.map((val, index) => {
          return (
            <div key={index} className='collection-productwap'>
              <div className='collectrow--webmulti'>
                <h2 className='prodct-titlehead'>{val.title}</h2>
                <div className='row product-wap--flex-collection'>
                  {val.products?.length ? val.products.map((value, i) => {
                    return <div key={i} className='col-6 collection-col-wap'>
                      <div className='product-boxwap-collect'>
                        <div className='product-imgcollection'>
                          <img src={productImg1} />
                          <div className='collect--discweb-titles'>
                            <h4 className='head-product-collect'>{value?.title}</h4>
                            <p className='product--disc-short'>{value?.description}</p>
                            <div className='product--footerweb'>
                              <span className='price-head-collect'>${value?.price}</span>
                              <span className='button-purchase'><button className='btn btn-buynow'>Buy Now</button></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  }) : null
                  }
                </div>
              </div>
            </div>)
        }) : <div className="noData-msg">No Collections Yet!</div>
    }
  }

    if(loading){
      return <LoaderMain />
    }

  return (
    <div className='dark-theme'>
      <div className="webprofile--warpper">
        <HeaderSecond renderRightButton={false} />
        <div className='top-profile-web'>
          <div className='container-width'>
            <div className='profile-flexusr'>
              <div className='left-usr--img'>
                <img src={userDetails?.dp ? userDetails?.dp : imageDummy} className="mainImage" alt="image" />
              </div>
              <div className='profile--infocontent'>
                <div className='header-flexwidget'>
                  <div className='headerwap--flex-sect'>
                    <h3 className='prf--titleweb'>{userDetails?.name}</h3>
                    <p className='eml-prf-web'>@{userDetails?.username}</p>
                  </div>
                  <div className='view-follow-flex'><Button type="button" className="btn btn-follow">FOLLOW</Button></div>
                </div>
                <div className='listitem--follow-web'>
                  <ul className='view--web-follow'>
                    <li className='view-post--widgt'>{userDetails?.followers} Followers</li>
                    <li className='view-post--widgt'>{userDetails?.postCount} Posts</li>
                    <li className='view-post--widgt'>{userDetails?.liveStreamCount} Livestreams</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='profile-disc'>
              <p>{userDetails?.description}</p>
            </div>
          </div>
        </div>


        <div className='postwap--sectbody'>
          <div className='container-width'>
            <div className="tabsticky--header">
              <ul className="menutab--navwap">
                {/* <li className="active tabmenu-items">
                  <button className='btn btn-menu-tab'>Livestreams</button>
                </li> */}
                <li className={postSate == 1 ? "tabmenu-items active" : "tabmenu-items"}>
                  <button className='btn btn-menu-tab' onClick={() => handleClick("1")}>Post</button>
                </li>
                <li className={postSate == 2 ? "tabmenu-items active" : "tabmenu-items"}>
                  <button className='btn btn-menu-tab' onClick={() => handleClick("2")}>Collections</button>
                </li>
              </ul>
            </div>
            {switchFeedType()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSecond;