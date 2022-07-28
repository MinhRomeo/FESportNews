// @flow
import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ScoreBoard } from './Scoreboard';
import axiosClient from 'lib/axios';
export const SubSection = (props) => {
    const { onSearch ,recentPost,scoreBoard} = props;
    const [searchValue, setSearchValue] = useState('');
    const [newSearch,setNewSearch]=useState([]);
    const navigate = useNavigate();
console.log(searchValue.length)

    useEffect(()=>{
            (async () => {
                try {
                    const {data} = await axiosClient.post(`/product/SearchProduct?searchValue=${searchValue.length>=1?searchValue:1}`);
                    console.log(data.content)
                    setNewSearch(data.content)
                    
                    
                } catch (error) {
                    console.log('Failed to fetch product list: ', error);
                }
             
            })();
       

    },[searchValue])
    return (
        <>
            <div className="blog_right_sidebar">
                <aside className="single_sidebar_widget search_widget">
                    <form action="#" style={{position:"relative"}}>
                        <div className="form-group" style={{margin:0}}>
                            <div className="input-group">
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
                        <div className='drop-down-container'  style={{backgroundColor:"#f7f7f7",position:"absolute",width:"100%"}}>
                            <ul>
                                {
                                    newSearch.map((item,index)=>{

                                     return   <li key={index} style={{cursor:"pointer"}}>
                                            <img src={item.imageEntity?.[1]?.url} style={{width:"50px",height:"50px",objectFit:"contain"}} />
                                            <span>{item.name}</span>
                                        </li>                      
                                    })
                                }
                            </ul>
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
