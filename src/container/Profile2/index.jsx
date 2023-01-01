import React, { useState } from 'react';
import Button from '../../components/Button';
import HeaderSecond from '../../components/Header2';
import PostSecond from '../../components/Post2';
import productImg1 from "../../assets/productImg-1.jpg";
import './styles.scss'

function ProfileSecond() {
  const [postSate, setPostState] = useState(1);
  const imageDummy = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"

  let handleClick = (val) =>{
    setPostState(val)
  }



  return (
    <div className='dark-theme'>
      <div className="webprofile--warpper">
        <HeaderSecond renderRightButton={false} />
        <div className='top-profile-web'>
          <div className='container-width'>
            <div className='profile-flexusr'>
              <div className='left-usr--img'>
                <img src={imageDummy} className="mainImage" alt="image" />
              </div>
              <div className='profile--infocontent'>
                <div className='header-flexwidget'>
                  <div className='headerwap--flex-sect'>
                    <h3 className='prf--titleweb'>Ruhi Saikia</h3>
                    <p className='eml-prf-web'>@Odette</p>
                  </div>
                  <div className='view-follow-flex'><Button type="button" className="btn btn-follow">FOLLOW</Button></div>
                </div>
                <div className='listitem--follow-web'>
                  <ul className='view--web-follow'>
                    <li className='view-post--widgt'>22 Followers</li>
                    <li className='view-post--widgt'>7 Posts</li>
                    <li className='view-post--widgt'>5 Livestreams</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='profile-disc'>
              <p>I create fashion content and express myself through my dressing style. I create fashion content and express myself through my dressing style</p>
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
            {
              postSate == "1" ? 
              <>
                <PostSecond />
                <PostSecond />
                <PostSecond />
                <PostSecond />
                <PostSecond />
                <PostSecond />
              </>
            :
            <>
              <div className='collection-productwap'>
                <div className='row product-wap--flex-collection'>                  
                  <div className='col-6 collection-col-wap'>
                    <div className='product-boxwap-collect'>
                      <div className='product-imgcollection'>
                        <img src={productImg1} />
                      </div>
                      <div className='collect--discweb-titles'>
                        <h4 className='head-product-collect'>Product 1 <svg className='wishlist--icon' width="12" height="12" viewBox="0 0 24 24" fill="rgba(40, 44, 63, 0.7)"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.998 4.918c1.07-1.222 2.597-1.936 4.216-1.918C19.466 3.002 22 5.809 22 9.16c0 1.354-.5 2.673-1.23 3.883-.73 1.214-1.717 2.362-2.755 3.388-2.078 2.052-4.438 3.686-5.605 4.447a.75.75 0 0 1-.82 0c-1.167-.76-3.527-2.395-5.605-4.447-1.038-1.026-2.025-2.175-2.756-3.388C2.501 11.833 2 10.513 2 9.16 2 5.809 4.534 3.002 7.786 3c1.621-.018 3.14.698 4.212 1.918Zm-.642 1.657C10.564 5.249 9.215 4.483 7.8 4.5H7.79C5.464 4.5 3.5 6.533 3.5 9.16c0 .986.368 2.036 1.014 3.11.645 1.07 1.54 2.12 2.526 3.094 1.757 1.735 3.746 3.171 4.96 3.987 1.214-.816 3.203-2.252 4.96-3.987.987-.974 1.881-2.024 2.526-3.095.646-1.073 1.014-2.123 1.014-3.109 0-2.627-1.964-4.66-4.29-4.66h-.009c-1.418-.017-2.775.75-3.555 2.072a.75.75 0 0 1-1.29.003Z" fill="rgba(40, 44, 63, 0.7)"></path></svg></h4>
                        <span className='price-head-collect'>$567</span>
                        <span className='price-disc-collect'>67% off</span>
                      </div>
                    </div>
                  </div>
                  <div className='col-6 collection-col-wap'>
                    <div className='product-boxwap-collect'>
                      <div className='product-imgcollection'>
                        <img src={productImg1} />
                      </div>
                      <div className='collect--discweb-titles'>
                        <h4 className='head-product-collect'>Product 1 <svg className='wishlist--icon' width="12" height="12" viewBox="0 0 24 24" fill="rgba(40, 44, 63, 0.7)"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.998 4.918c1.07-1.222 2.597-1.936 4.216-1.918C19.466 3.002 22 5.809 22 9.16c0 1.354-.5 2.673-1.23 3.883-.73 1.214-1.717 2.362-2.755 3.388-2.078 2.052-4.438 3.686-5.605 4.447a.75.75 0 0 1-.82 0c-1.167-.76-3.527-2.395-5.605-4.447-1.038-1.026-2.025-2.175-2.756-3.388C2.501 11.833 2 10.513 2 9.16 2 5.809 4.534 3.002 7.786 3c1.621-.018 3.14.698 4.212 1.918Zm-.642 1.657C10.564 5.249 9.215 4.483 7.8 4.5H7.79C5.464 4.5 3.5 6.533 3.5 9.16c0 .986.368 2.036 1.014 3.11.645 1.07 1.54 2.12 2.526 3.094 1.757 1.735 3.746 3.171 4.96 3.987 1.214-.816 3.203-2.252 4.96-3.987.987-.974 1.881-2.024 2.526-3.095.646-1.073 1.014-2.123 1.014-3.109 0-2.627-1.964-4.66-4.29-4.66h-.009c-1.418-.017-2.775.75-3.555 2.072a.75.75 0 0 1-1.29.003Z" fill="rgba(40, 44, 63, 0.7)"></path></svg></h4>
                        <span className='price-head-collect'>$567</span>
                        <span className='price-disc-collect'>67% off</span>
                      </div>
                    </div>
                  </div>
                  <div className='col-6 collection-col-wap'>
                    <div className='product-boxwap-collect'>
                      <div className='product-imgcollection'>
                        <img src={productImg1} />
                      </div>
                      <div className='collect--discweb-titles'>
                        <h4 className='head-product-collect'>Product 1 <svg className='wishlist--icon' width="12" height="12" viewBox="0 0 24 24" fill="rgba(40, 44, 63, 0.7)"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.998 4.918c1.07-1.222 2.597-1.936 4.216-1.918C19.466 3.002 22 5.809 22 9.16c0 1.354-.5 2.673-1.23 3.883-.73 1.214-1.717 2.362-2.755 3.388-2.078 2.052-4.438 3.686-5.605 4.447a.75.75 0 0 1-.82 0c-1.167-.76-3.527-2.395-5.605-4.447-1.038-1.026-2.025-2.175-2.756-3.388C2.501 11.833 2 10.513 2 9.16 2 5.809 4.534 3.002 7.786 3c1.621-.018 3.14.698 4.212 1.918Zm-.642 1.657C10.564 5.249 9.215 4.483 7.8 4.5H7.79C5.464 4.5 3.5 6.533 3.5 9.16c0 .986.368 2.036 1.014 3.11.645 1.07 1.54 2.12 2.526 3.094 1.757 1.735 3.746 3.171 4.96 3.987 1.214-.816 3.203-2.252 4.96-3.987.987-.974 1.881-2.024 2.526-3.095.646-1.073 1.014-2.123 1.014-3.109 0-2.627-1.964-4.66-4.29-4.66h-.009c-1.418-.017-2.775.75-3.555 2.072a.75.75 0 0 1-1.29.003Z" fill="rgba(40, 44, 63, 0.7)"></path></svg></h4>
                        <span className='price-head-collect'>$567</span>
                        <span className='price-disc-collect'>67% off</span>
                      </div>
                    </div>
                  </div>
                  <div className='col-6 collection-col-wap'>
                    <div className='product-boxwap-collect'>
                      <div className='product-imgcollection'>
                        <img src={productImg1} />
                      </div>
                      <div className='collect--discweb-titles'>
                        <h4 className='head-product-collect'>Product 1 <svg className='wishlist--icon' width="12" height="12" viewBox="0 0 24 24" fill="rgba(40, 44, 63, 0.7)"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.998 4.918c1.07-1.222 2.597-1.936 4.216-1.918C19.466 3.002 22 5.809 22 9.16c0 1.354-.5 2.673-1.23 3.883-.73 1.214-1.717 2.362-2.755 3.388-2.078 2.052-4.438 3.686-5.605 4.447a.75.75 0 0 1-.82 0c-1.167-.76-3.527-2.395-5.605-4.447-1.038-1.026-2.025-2.175-2.756-3.388C2.501 11.833 2 10.513 2 9.16 2 5.809 4.534 3.002 7.786 3c1.621-.018 3.14.698 4.212 1.918Zm-.642 1.657C10.564 5.249 9.215 4.483 7.8 4.5H7.79C5.464 4.5 3.5 6.533 3.5 9.16c0 .986.368 2.036 1.014 3.11.645 1.07 1.54 2.12 2.526 3.094 1.757 1.735 3.746 3.171 4.96 3.987 1.214-.816 3.203-2.252 4.96-3.987.987-.974 1.881-2.024 2.526-3.095.646-1.073 1.014-2.123 1.014-3.109 0-2.627-1.964-4.66-4.29-4.66h-.009c-1.418-.017-2.775.75-3.555 2.072a.75.75 0 0 1-1.29.003Z" fill="rgba(40, 44, 63, 0.7)"></path></svg></h4>
                        <span className='price-head-collect'>$567</span>
                        <span className='price-disc-collect'>67% off</span>
                      </div>
                    </div>
                  </div>
                  
                  
                  
                </div>
              </div> 
            </>
            }
        </div>
      </div>
      </div>
    </div>
  );
}

export default ProfileSecond;