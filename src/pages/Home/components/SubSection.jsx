// @flow
import React, { useState } from 'react';
import { ScoreBoard } from './Scoreboard';

export const SubSection = (props) => {
    const { onSearch } = props;
    const [searchValue, setSearchValue] = useState('');

    return (
        <>
            <div className="blog_right_sidebar">
                <aside className="single_sidebar_widget search_widget">
                    <form action="#">
                        <div className="form-group">
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search Keyword"
                                    value={searchValue}
                                    onChange={(e) => setSearchValue(e.target.value)}
                                />
                                <div className="input-group-append">
                                    <button className="btns" type="button" onClick={() => onSearch(searchValue)}>
                                        <i className="ti-search" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </aside>
                <ScoreBoard />
                <aside className="single_sidebar_widget popular_post_widget">
                    <h3 className="widget_title">Top</h3>
                    <div className="media post_item">
                        <img src="assets/img/post/post_1.png" alt="post" />
                        <div className="media-body">
                            <a href="single-blog.html">
                                <h3>From life was you fish...</h3>
                            </a>
                            <p>January 12, 2019</p>
                        </div>
                    </div>
                    <div className="media post_item">
                        <img src="assets/img/post/post_2.png" alt="post" />
                        <div className="media-body">
                            <a href="single-blog.html">
                                <h3>The Amazing Hubble</h3>
                            </a>
                            <p>02 Hours ago</p>
                        </div>
                    </div>
                    <div className="media post_item">
                        <img src="assets/img/post/post_3.png" alt="post" />
                        <div className="media-body">
                            <a href="single-blog.html">
                                <h3>Astronomy Or Astrology</h3>
                            </a>
                            <p>03 Hours ago</p>
                        </div>
                    </div>
                    <div className="media post_item">
                        <img src="assets/img/post/post_4.png" alt="post" />
                        <div className="media-body">
                            <a href="single-blog.html">
                                <h3>Asteroids telescope</h3>
                            </a>
                            <p>01 Hours ago</p>
                        </div>
                    </div>
                </aside>
            </div>
        </>
    );
};
