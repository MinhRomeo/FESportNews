// @flow
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ScoreBoard } from './Scoreboard';

export const SubSection = (props) => {
    const { onSearch ,recentPost,scoreBoard} = props;
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();
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
                <ScoreBoard scoreBoard={scoreBoard}/>
                <aside className="single_sidebar_widget popular_post_widget">
                    <h3 className="widget_title">Top</h3>
                    {
                        recentPost.map((item,index)=>{
                          return  <div className="media post_item" key={index}>
                                    <img src={item.imageEntity?.[1]?.url} alt="post" style={{width:"100px",height:"100px"}}/>
                                    <div className="media-body">
                                        <span onClick={() => navigate(`/${item?.id}`, { replace: true })}>
                                            <h3  style={{cursor:"pointer"}}>{item?.name}</h3>
                                        </span>
                                        <p>January 12, 2019</p>
                                    </div>
                                </div>
                        })
                    }
                 
                   
                </aside>
            </div>
        </>
    );
};
