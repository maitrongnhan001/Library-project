import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './menu/menu';
import Search from "./search/search";
import "./top.scss";

const Top = () => {
    return (
        <div className='top-main-header'>
            <div className="logo">
                <Link to="/">
                    <img src="/image/logo/main-logo.jpeg" alt="logo" />
                </Link>
            </div>
            <Search/>
            <Menu/>
            <div className="clearfix"></div>
        </div>
    );
}

export default Top;
