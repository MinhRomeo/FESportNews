import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

function Footer(props) {
  const { t, i18n } = useTranslation();
    return (
        <footer>
            {/* Footer Start*/}
            <div className="footer-area footer-padding fix">
                <div className="container">
                    <div className="row d-flex justify-content-between">
                        <div className="col-xl-6 col-lg-6 col-md-7 col-sm-12">
                            <div className="single-footer-caption">
                                <div className="single-footer-caption">
                                    {/* logo */}
                                    <div className="footer-logo">
                                        <a href="index.html">
                                            <img src="assets/img/logo/logo2_footer.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="footer-tittle">
                                        <div className="footer-pera">
                                            <p>
                                            {t('footer.contents')}
                                            </p>
                                        </div>
                                    </div>
                                    {/* social */}
                                    <div className="footer-social">
                                        <a href="#">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-instagram" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-pinterest-p" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-7  col-sm-12">
                            <div className="single-footer-caption mt-60">
                                <div className="footer-tittle">
                                    <h4>{t('footer.email')}</h4>
                                    <p>{t('footer.title2')}</p>
                                    {/* Form */}
                                    <div className="footer-form">
                                        <div id="mc_embed_signup">
                                            <form
                                                target="_blank"
                                                action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01"
                                                method="get"
                                                className="subscribe_form relative mail_part"
                                            >
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="newsletter-form-email"
                                                    placeholder="Email Address"
                                                    className="placeholder hide-on-focus"
                                                    // onfocus="this.placeholder = ''"
                                                    // onblur="this.placeholder = ' Email Address '"
                                                />
                                                <div className="form-icon">
                                                    <button
                                                        type="submit"
                                                        name="submit"
                                                        id="newsletter-submit"
                                                        className="email_icon newsletter-submit button-contactForm"
                                                    >
                                                        <img src="assets/img/logo/form-iocn.png" alt="" />
                                                    </button>
                                                </div>
                                                <div className="mt-10 info" />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            {/* footer-bottom aera */}
            <div className="footer-bottom-area">
                <div className="container">
                    <div className="footer-border">
                        <div className="row d-flex align-items-center justify-content-between">
                            <div className="col-lg-6">
                                <div className="footer-copy-right">
                                    <p> 
                                        Copyright © All rights reserved by Minh & Thiện
                                    </p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer End*/}
        </footer>
    );
}

Footer.propTypes = {};

export default Footer;
