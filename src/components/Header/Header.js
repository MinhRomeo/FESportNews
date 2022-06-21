import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Space, Menu, message, Row, Col, Checkbox, Button, AutoComplete, Modal } from 'antd';
import 'antd/dist/antd.css';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import SignUp from '../SignUp/SignUp';
import Login from '../Login/Login';
function Header(props) {
    // const { t, i18n } = useTranslation();
    // const changeLanguage = (lng) => {
    //     console.log(lng);
    //     i18n.changeLanguage(lng);
    //     console.log(lng);
    //     localStorage.setItem('lang', lng);
    // };
    // const handleMenuClick = (e) => {
    //   message.info('Click on menu item.');
      
    //   console.log('click', e);
    // };
    // const menu = (
    //   <Menu
    //     onClick={handleMenuClick}
    //     items={[
    //       {
    //         label: '1st menu item',
    //         key: '1',
    //         icon: faGlobe,
            
    //       },
    //       {
    //         label: '2nd menu item',
    //         key: '2',
    //         icon: faGlobe,
    //       },
    //     ]}
    //   />
    // );
    return (
        <React.Fragment>
            <div id="preloader-active">
                <div className="preloader d-flex align-items-center justify-content-center">
                    <div className="preloader-inner position-relative">
                        <div className="preloader-circle"></div>
                        <div className="preloader-img pere-text">
                            <img src="assets/img/logo/logo.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <header>
                <div className="header-area">
                    <div className="main-header ">
                        <div className="header-top black-bg d-none d-md-block">
                            <div className="container">
                                <div className="col-xl-12">
                                    <div className="row d-flex justify-content-between align-items-center">
                                        <div className="header-info-left">
                                            {/* <div className="header__top__right__language">
                                                <FontAwesomeIcon icon={faGlobe} style={{ marginRight: '10px' }} />
                                                <div>{t('header.languages')}</div>
                                                <span className="arrow_carrot-down"></span>
                                                <ul>
                                                    <li>
                                                        <a onClick={() => changeLanguage('en')} href="#">
                                                            {t('header.languages_1')}
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => changeLanguage('vn')} href="#">
                                                            {' '}
                                                            {t('header.languages_2')}
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div> */}
                                            {/* <Dropdown overlay={menu}>
                                                <Button>
                                                    <Space>
                                                    {t('header.languages')}
                                                    </Space>
                                                </Button>
                                            </Dropdown> */}
                                        </div>

                                        <div className="header-info-right">
                                            <ul className="header-social">
                                                <li>
                                                    <SignUp />
                                                </li>

                                                <li>
                                                    <Login />
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-twitter" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-instagram" />
                                                    </a>
                                                </li>
                                                <li>
                                                    {' '}
                                                    <a href="#">
                                                        <i className="fab fa-pinterest-p" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="header-mid d-none d-md-block">
                            <div className="container">
                                <div className="row d-flex align-items-center">
                                    {/* Logo */}
                                    <div className="col-xl-3 col-lg-3 col-md-3">
                                        <div className="logo">
                                            <a href="index.html">
                                                <img src="assets/img/logo/logo.png" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-xl-9 col-lg-9 col-md-9">
                                        <div className="header-banner f-right ">
                                            <img src="assets/img/hero/header_card.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="header-bottom header-sticky">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-xl-10 col-lg-10 col-md-12 header-flex">
                                        {/* sticky */}
                                        <div className="sticky-logo">
                                            <a href="index.html">
                                                <img src="assets/img/logo/logo.png" alt="" />
                                            </a>
                                        </div>
                                        {/* Main-menu */}
                                        <div className="main-menu d-none d-md-block">
                                            <nav>
                                                <ul id="navigation">
                                                    <li>
                                                        <Link to="/">Home</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/category">Category</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/about">About</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/lastnews">Latest News</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/contact">Contact</Link>
                                                    </li>
                                                    <li>
                                                        <a href="#">Pages</a>
                                                        <ul className="submenu">
                                                            <li>
                                                                <Link to="/blog">Blog</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/blogdetail">Blog Details</Link>
                                                            </li>
                                                            <li>
                                                                <a href="details.html">Categori Details</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-2 col-md-4">
                                        <div className="header-right-btn f-right d-none d-lg-block">
                                            <i className="fas fa-search special-tag" />
                                            <div className="search-box">
                                                <form action="#">
                                                    <input type="text" placeholder="Search" />
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Mobile Menu */}
                                    <div className="col-12">
                                        <div className="mobile_menu d-block d-md-none" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    );
}

Header.propTypes = {};

export default Header;
