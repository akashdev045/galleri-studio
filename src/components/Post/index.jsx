import React from 'react';
import './post.scss';

function Post() {
  return (
    <div className="post">
        <div className="postHeader">
            <img src="https://img.freepik.com/free-photo/cheeky-stylish-handsome-queer-guy-denim-shirt-shopping-summer-vacation-picking-clothes-store-pointing-upper-left-corner-demonstrating-link-online-shop-yellow-background_1258-59654.jpg?w=1800&t=st=1671218341~exp=1671218941~hmac=0c24132994e3d55fbec11377565b26d7123d21b8be50023d4b4147074b55dbb0" alt="image" />
            <div>
                <h4>
                    Nautica Home
                </h4>
                <p>
                    4 hours ago
                </p>
            </div>
            <div />
            <div>
                Follow    
            </div>
        </div>
    </div>
  );
}

export default Post;
