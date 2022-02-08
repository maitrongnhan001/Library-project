import React from 'react';
import './footer.scss';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="web-info">
                <h2>
                    Can Tho University
                    <br />
                    Ninh kieu - Can Tho <br />
                    Viet Nam
                </h2>
                <p className='footer-phone'><b>Phone: </b> 0943 363 414</p>
            </div>
            <div className="footer-more-info">
                <p>
                    <b>Description: </b><br />
                    This website alow you read books free, you can contribution your book to resource of website
                    , this will help another people.
                    <br /><br />
                    We very happied, when we helped for social and when you use our product.
                    <br /><br />
                    Happy read book
                </p>
            </div>
            <div className="footer-social">
                <h2>Socical:</h2>
                <a href="#">
                    <img className='footer-img' src="/image/social/Logo-facebook.png" alt="facebook" />
                </a>
                <a href="#">
                    <img className='footer-img' src="/image/social/Logo-Instagram.png" alt="instagram" />
                </a>
                <a href="#">
                    <img className='footer-img' src="/image/social/Logo-Tiwtter.png" alt="tiwtter" />
                </a>
            </div>
            <div className="clearfix"></div>
        </div>
    );
}

export default Footer;
