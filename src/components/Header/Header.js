import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import {
  Form,
  Input,
  Tooltip,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  Modal
} from 'antd';
import "antd/dist/antd.css";
import { QuestionCircleOutlined } from '@ant-design/icons';
import SignUp from '../SignUp/SignUp';
import Login from '../Login/Login';
function Header(props) {
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
                      <ul>
                        <li>
                          <img src="assets/img/icon/header_icon1.png" alt="" />
                          34ºc, Sunny{" "}
                        </li>
                        <li>
                          <img src="assets/img/icon/header_icon1.png" alt="" />
                          Tuesday, 18th June, 2019
                        </li>
                      </ul>
                    </div>
                  
                    <div className="header-info-right">
                      
                      <ul className="header-social">
                      <li><SignUp/></li>
                
                      <li><Login/></li>
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
                          {" "}
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

  )
}


Header.propTypes = {}

export default Header
