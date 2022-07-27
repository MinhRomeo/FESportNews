import React, { useMemo ,useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'store';
import { newsSelector } from 'utils/selectors';
import { useParams } from 'react-router-dom';
import newsApi ,{api3}from 'api/newsApi';
function NewsDetail(props) {
    const { news } = useSelector(newsSelector);
    const newsId = useParams().newsId;
    console.log('NewsDetail ~ newsId', newsId);
    const [detailNew, setDetailNew] = useState({});
    // const newsDetail = useMemo(() => {
    //     console.log('newsDetail ~ news.list', news.list);
    //     return news.list.find((news) => news.id.toString() === newsId);
    // }, [news, newsId]);
    useEffect(() => {
        (async () => {
            try {
                // const { data, pagination } = await newsApi.getAll({
                //     ...queryParams,
                //     keyWord: queryParams.keyWord ? queryParams.keyWord : '',
                // });
                // setNewsList(data);
                // setPagination(pagination);
                const {data} = await api3.getProductDetails(newsId);
                console.log(data);
                setDetailNew(data)
                
            } catch (error) {
                console.log('Failed to fetch product list: ', error);
            }
         
        })();
    }, []);
    return (
        <section className="blog_area single-post-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 posts-list">
                        <div className="single-post">
                            <div className="feature-img" style={{display:"flex"}}>
                                <img className="img-fluid" style={{width:"400px",objectFit:"cover"}} src={detailNew?.imageEntity?.[0].url} alt="" />
                                <img className="img-fluid"  style={{width:"400px",objectFit:"cover"}} src={detailNew?.imageEntity?.[1].url} alt="" />
                            </div>
                            <div className="blog_details">
                                {/* <h2>{newsDetail.name}</h2> */}
                                <ul className="blog-info-link mt-3 mb-4">
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-user" /> Sport News
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-comments" /> 03 Comments
                                        </a>
                                    </li>
                                </ul>
                                <p className="excert">Trân trọng gửi tới quý vị độc giả lịch thi đấu bóng đá hôm nay và ngày mai được cập nhật mới nhất, chính xác nhất của các giải đấu.</p>
                              
                                <div className="quote-wrapper">
                                    <div className="quotes">
                                      {detailNew.name}
                                    </div>
                                </div>
                                <p>
                                    {detailNew.descriptions}
                                </p>
                               
                            </div>
                        </div>
                        <div className="navigation-top">
                            <div className="d-sm-flex justify-content-between text-center">
                                <p className="like-info">
                                    <span className="align-middle">
                                        <i className="fa fa-heart" />
                                    </span>{' '}
                                    Lily and 4 people like this
                                </p>
                                <div className="col-sm-4 text-center my-2 my-sm-0">
                                    {/* <p class="comment-count"><span class="align-middle"><i class="fa fa-comment"></i></span> 06 Comments</p> */}
                                </div>
                                <ul className="social-icons">
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-dribbble" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-behance" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="navigation-area">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center">
                                        <div className="thumb">
                                            <a href="#">
                                                <img className="img-fluid" src="assets/img/post/preview.png" alt="" />
                                            </a>
                                        </div>
                                        <div className="arrow">
                                            <a href="#">
                                                <span className="lnr text-white ti-arrow-left" />
                                            </a>
                                        </div>
                                        <div className="detials">
                                            <p>Prev Post</p>
                                            <a href="#">
                                                <h4>Space The Final Frontier</h4>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center">
                                        <div className="detials">
                                            <p>Next Post</p>
                                            <a href="#">
                                                <h4>Telescopes 101</h4>
                                            </a>
                                        </div>
                                        <div className="arrow">
                                            <a href="#">
                                                <span className="lnr text-white ti-arrow-right" />
                                            </a>
                                        </div>
                                        <div className="thumb">
                                            <a href="#">
                                                <img className="img-fluid" src="assets/img/post/next.png" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        <iframe
                  title="comment"
                  src="http://www.facebook.com/plugins/comments.php?href=http://localhost:3000"
                  scrolling="no"
                  frameBorder="0"
                  style={{
                    border: "none",
                    overflow: "hidden",
                    width: "100%",
                    height: "1000px",
                  }}
                ></iframe>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog_right_sidebar">
                            <aside className="single_sidebar_widget search_widget">
                                <form action="#">
                                    <div className="form-group">
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Search Keyword" />
                                            <div className="input-group-append">
                                                <button className="btns" type="button">
                                                    <i className="ti-search" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn" type="submit">
                                        Search
                                    </button>
                                </form>
                            </aside>
                            {/* <aside className="single_sidebar_widget post_category_widget">
                                <h4 className="widget_title">Category</h4>
                                <ul className="list cat-list">
                                    <li>
                                        <a href="#" className="d-flex">
                                            <p>Resaurant food</p>
                                            <p>(37)</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="d-flex">
                                            <p>Travel news</p>
                                            <p>(10)</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="d-flex">
                                            <p>Modern technology</p>
                                            <p>(03)</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="d-flex">
                                            <p>Product</p>
                                            <p>(11)</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="d-flex">
                                            <p>Inspiration</p>
                                            <p>(21)</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="d-flex">
                                            <p>Health Care</p>
                                            <p>(21)</p>
                                        </a>
                                    </li>
                                </ul>
                            </aside>
                            <aside className="single_sidebar_widget popular_post_widget">
                                <h3 className="widget_title">Recent Post</h3>
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
                            <aside className="single_sidebar_widget tag_cloud_widget">
                                <h4 className="widget_title">Tag Clouds</h4>
                                <ul className="list">
                                    <li>
                                        <a href="#">project</a>
                                    </li>
                                    <li>
                                        <a href="#">love</a>
                                    </li>
                                    <li>
                                        <a href="#">technology</a>
                                    </li>
                                    <li>
                                        <a href="#">travel</a>
                                    </li>
                                    <li>
                                        <a href="#">restaurant</a>
                                    </li>
                                    <li>
                                        <a href="#">life style</a>
                                    </li>
                                    <li>
                                        <a href="#">design</a>
                                    </li>
                                    <li>
                                        <a href="#">illustration</a>
                                    </li>
                                </ul>
                            </aside> */}
                            <aside className="single_sidebar_widget instagram_feeds">
                                <h4 className="widget_title">Instagram Feeds</h4>
                                <ul className="instagram_row flex-wrap">
                                    <li>
                                        <a href="#">
                                            <img className="img-fluid" src="assets/img/post/post_5.png" alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img className="img-fluid" src="assets/img/post/post_6.png" alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img className="img-fluid" src="assets/img/post/post_7.png" alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img className="img-fluid" src="assets/img/post/post_8.png" alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img className="img-fluid" src="assets/img/post/post_9.png" alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img className="img-fluid" src="assets/img/post/post_10.png" alt="" />
                                        </a>
                                    </li>
                                </ul>
                            </aside>
                            <aside className="single_sidebar_widget newsletter_widget">
                                <h4 className="widget_title">Newsletter</h4>
                                <form action="#">
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            className="form-control"
                                            //   onFocus="this.placeholder = ''"
                                            //   onBlur="this.placeholder = 'Enter email'"
                                            placeholder="Enter email"
                                            required=""
                                        />
                                    </div>
                                    <button className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn" type="submit">
                                        Subscribe
                                    </button>
                                </form>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

NewsDetail.propTypes = {};

export default NewsDetail;
