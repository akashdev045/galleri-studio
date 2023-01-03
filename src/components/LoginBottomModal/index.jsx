import React from 'react';
import './styles.scss';

function LoginBottomModal() {
    let image = 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2022/9/6/8cc74fa4-9191-45a4-95db-d0481cf867641662403714032-Sign-Up-Card_Flat----200-Off--1-.jpg'
    return (
        <div className="loginBottomModal">
            <div className="drawer  active">
                <div className="popupContent">
                    <img src={image} alt="" width="100%" />




                </div>
            </div>
        </div>
    );
}

export default LoginBottomModal;
