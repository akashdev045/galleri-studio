import React from 'react';
import { ReactComponent as ArrowBack } from '../../assets/arrowBack.svg'
import { ReactComponent as Search } from '../../assets/search.svg'
import { ReactComponent as Settings } from '../../assets/settings.svg'
import { ReactComponent as Widget } from '../../assets/widget.svg'
import './header.scss';

function Header() {
    return (
        <div className="headerMain">
            <div className="headerContainer">
                <div class="headerTitle">
                    <ArrowBack />
                    <p>
                        Studio
                    </p>
                </div>
                <div class="headerRight">
                    <Widget />
                    <Settings />
                    <Search />
                </div>
            </div>
        </div>
    );
}

export default Header;
