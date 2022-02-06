import React from 'react';
import Top from './top-header/top';
import "./header.scss";
import Banner from './banner/banner';

const Header = () => {
    return (
        <div className='main-header'>
            <Top/>
            <Banner/>
        </div>
    );
}

export default Header;
