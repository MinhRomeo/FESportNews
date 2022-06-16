import NewsList from 'components/newsList';
import React from 'react';
import { useSelector } from 'store';
import { newsSelector } from 'utils/selectors';
import Trending from '../../components/Trending/Trending';
import Video from '../../components/Video/Video';
function Home(props) {
    const { news } = useSelector(newsSelector);
    return (
        <main>
            {/* Whats New Start */}
            <section className="whats-news-area pt-50 pb-20">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row d-flex justify-content-between">
                                <div className="col-lg-3 col-md-3">
                                    <div className="section-tittle mb-30">
                                        <h3>Whats New</h3>
                                    </div>
                                </div>
                                <div className="col-lg-9 col-md-9">
                                    <div className="properties__button">
                                        {/*Nav Button  */}
                                        <nav>
                                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                                <a
                                                    className="nav-item nav-link active"
                                                    id="nav-home-tab"
                                                    data-toggle="tab"
                                                    href="#nav-home"
                                                    role="tab"
                                                    aria-controls="nav-home"
                                                    aria-selected="true"
                                                >
                                                    All
                                                </a>
                                                <a
                                                    className="nav-item nav-link"
                                                    id="nav-profile-tab"
                                                    data-toggle="tab"
                                                    href="#nav-profile"
                                                    role="tab"
                                                    aria-controls="nav-profile"
                                                    aria-selected="false"
                                                >
                                                    Lifestyle
                                                </a>
                                                <a
                                                    className="nav-item nav-link"
                                                    id="nav-contact-tab"
                                                    data-toggle="tab"
                                                    href="#nav-contact"
                                                    role="tab"
                                                    aria-controls="nav-contact"
                                                    aria-selected="false"
                                                >
                                                    Travel
                                                </a>
                                                <a
                                                    className="nav-item nav-link"
                                                    id="nav-last-tab"
                                                    data-toggle="tab"
                                                    href="#nav-last"
                                                    role="tab"
                                                    aria-controls="nav-contact"
                                                    aria-selected="false"
                                                >
                                                    Fashion
                                                </a>
                                                <a
                                                    className="nav-item nav-link"
                                                    id="nav-Sports"
                                                    data-toggle="tab"
                                                    href="#nav-nav-Sport"
                                                    role="tab"
                                                    aria-controls="nav-contact"
                                                    aria-selected="false"
                                                >
                                                    Sports
                                                </a>
                                                <a
                                                    className="nav-item nav-link"
                                                    id="nav-technology"
                                                    data-toggle="tab"
                                                    href="#nav-techno"
                                                    role="tab"
                                                    aria-controls="nav-contact"
                                                    aria-selected="false"
                                                >
                                                    Technology
                                                </a>
                                            </div>
                                        </nav>
                                        {/*End Nav Button  */}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    {/* Nav Card */}
                                    <div className="tab-content" id="nav-tabContent">
                                        {/* card one */}
                                        <div
                                            className="tab-pane fade show active"
                                            id="nav-home"
                                            role="tabpanel"
                                            aria-labelledby="nav-home-tab"
                                        >
                                            <NewsList newsList={news.list} />
                                        </div>
                                        {/* Card two */}
                                        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                            <NewsList newsList={news.list} />
                                        </div>
                                        {/* Card three */}
                                        <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                            <NewsList newsList={news.list} />
                                        </div>
                                        {/* card fure */}
                                        <div className="tab-pane fade" id="nav-last" role="tabpanel" aria-labelledby="nav-last-tab">
                                            <NewsList newsList={news.list} />
                                        </div>
                                        {/* card Five */}
                                        <div className="tab-pane fade" id="nav-nav-Sport" role="tabpanel" aria-labelledby="nav-Sports">
                                            <NewsList newsList={news.list} />
                                        </div>
                                        {/* card Six */}
                                        <div className="tab-pane fade" id="nav-techno" role="tabpanel" aria-labelledby="nav-technology">
                                            <NewsList newsList={news.list} />
                                        </div>
                                    </div>
                                    {/* End Nav Card */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Whats New End */}
        </main>
    );
}

Home.propTypes = {};

export default Home;
