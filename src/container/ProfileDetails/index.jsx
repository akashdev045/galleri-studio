import React from 'react';
import Header from '../../components/Header';
import Post from '../../components/Post';
import './styles.scss'

function ProfileDetails() {
  const imageDummy = "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_400,c_limit,fl_progressive/assets/images/2022/12/15/2f98dc81-f574-40d9-989f-d4f549cc48291671116151641-47.jpg"

  return (
    <div className="profileDetails">
      <Header renderRightButton={false} />
      <div className="profileImageOut">
        <img src={imageDummy} className="mainImage" alt="image" />
        <div className="profileConatiner">
          <div className="paddingCon">
            <div className="personTitleOut">
              <div>
                <h3>
                  Zinklondon
                </h3>
                <span>
                  @Zinklondon
                </span>
              </div>
              <button>
                + follow
              </button>
            </div>
            <div className="profileDes">
              <div className="followDetails">
                <span>22</span> <p>Followers</p> <div className="bullet">⬤</div> <span>7</span> <p>Posts</p>
              </div>
              <p>
                Zink London is a leading fashion brand offering compelling fashion to express yourself.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="stickyHeader">
        <div className="optionsOut">
          <div className="active options">
            Posts
          </div>
          <div className="options">
            Recommended Products
        </div>
        </div>
      </div>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />

    </div>
  );
}

export default ProfileDetails;
