import React, { useState } from 'react';
import { Dropdown, Space, Menu, message, Button } from 'antd';
import 'antd/dist/antd.css';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import SignUp from '../SignUp/SignUp';
import Login from '../Login/Login';
import { useEffect } from 'react';
function Header(props) {
    const { t, i18n } = useTranslation();
    const [userName,setUserName]=useState("");
    const [reload,setReload]=useState(false);
    useEffect(()=>{
        const userName= localStorage.getItem("username")
        setUserName(userName)
    },[reload])
    console.log(userName)
    const onClick = ({ key }) => {
        message.success(`Language has changed!`);
        console.log(typeof key);
        i18n.changeLanguage(key);
        localStorage.setItem('lang', key);
    };
    const handleLogOut=()=>{
        localStorage.removeItem("username")
        setUserName("")
        setReload(!reload);
    }
    const toggle = ({ key }) => i18n.changeLanguage(key);
    const menu = (
        <Menu
            onClick={onClick}
            items={[
                {
                    label: 'English',
                    key: 'en',
                },
                {
                    label: 'Vietnamese',
                    key: 'vn',
                },
            ]}
        />
    );

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
                                            <ul className="header-social">
                                                <li>
                                                    <Dropdown overlay={menu}>
                                                        <Button type="primary" onClick={(e) => e.preventDefault()}>
                                                            <Space>
                                                                <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
                                                                {t('header.languages')}
                                                            </Space>
                                                        </Button>
                                                    </Dropdown>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="header-info-right">
                                            <ul className="header-social">
                                                {
                                                 userName!=null?<div style={{display:"flex",height:"30px"}}>
                                                                    <p>{userName}</p>
                                                                    <button onClick={handleLogOut}>{t('header.logout')}</button>   
                                                    </div>:
                                                        <div>
                                                            <li>
                                                                <SignUp />
                                                            </li>

                                                            <li>
                                                                <Login />
                                                            </li>
                                                    </div>
                                                }
                                               
                                               
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
                                            <a href="/">
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
                    </div>
                </div>
            </header>
        </React.Fragment>
    );
}

Header.propTypes = {};

export default Header;
