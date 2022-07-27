import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useSelector } from 'store';
import { newsSelector } from 'utils/selectors';
import { Pagination } from './components/Filter/Pagination';
import NewsList from './components/NewsList';
import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import newsApi ,{api2}from 'api/newsApi';
import { FilterByCategory } from './components/Filter/FilterByCategory';
import { SubSection } from './components/SubSection';
import axiosClient from 'lib/axios';
const listCategory = [
    { name: 'All', class: 'all', index: 1 },
    { name: 'Football', class: 'football', index: 2 },
    { name: 'Basketball', class: 'basketball', index: 3 },
    { name: 'Tennis', class: 'tennis', index: 4 },
    { name: 'Racing', class: 'racing', index: 5 },
    
];

function Home(props) {
    const { news } = useSelector(newsSelector);
    const { t } = useTranslation();
    const navigate = useNavigate();

    const location = useLocation();
    const [newsList, setNewsList] = useState([]);
    const [recentPost,setRecentPost]=useState([]);
    const [loading, setLoading] = useState(true);
    const [searchValue,setSearchValue]=useState(1);
    const [scoreBoard,setScoreBoard]=useState([]);
    // const [queryParams, setQueryParams] = useState({});
    console.log(searchValue)
    const queryParams = useMemo(() => {
        const params = queryString.parse(location.search);
        
        if(params.listCate){
            setSearchValue(+params.listCate)
            
        }

        return {
            ...params,
            pageIndex: Number(params.pageIndex) || 1,
            pageSize: Number(params.pageSize) || 8,
            category: '',
        };
    }, [location.search]);
    
    const [pagination, setPagination] = useState({
        limit: 1,
        total: 7,
        page: 1,
    });
    console.log("pagination & query")
    // console.log(queryParams)
    // console.log(location.search)
    

    useEffect(() => {
        (async () => {
            try {
                const {data} = await axiosClient.post(`/product/getAllProductByCategory?pageIndex=${queryParams.pageIndex-1}&searchValue=${searchValue}`);
                console.log(data.totalitems);
                setNewsList(data.products)

                const {  pagination } = await newsApi.getAll({
                    ...queryParams,
                    keyWord: queryParams.keyWord ? queryParams.keyWord : '',
                    newList2:data.totalitems
                });
                setPagination(pagination);
                
            } catch (error) {
                console.log('Failed to fetch product list: ', error);
            }
            setLoading(false);
        })();
    }, [queryParams]);

    useEffect(()=>{
        (async () => {
            try {
                const {data} = await axiosClient.post(`/product/recentPost`);
                console.log(data)
                setRecentPost(data)
                
            } catch (error) {
                console.log('Failed to fetch product list: ', error);
            }
            setLoading(false);
        })();

    },[newsList])

    useEffect(()=>{
        (async () => {
            try {
                const {data} = await axiosClient.post(`/product/showScoreBoard?id=${searchValue==1||searchValue==2?1:searchValue}`);
                console.log(data)
                console.log("aaaaaaa")
                setScoreBoard(data)
                
            } catch (error) {
                console.log('Failed to fetch product list: ', error);
            }
            setLoading(false);
        })();

    },[queryParams])
    

    const handlePageChange = (page) => {
        const filters = {
            ...queryParams,
            pageIndex: page,
        };

        navigate({
            pathname: location.pathname,
            search: queryString.stringify(filters),
        });
    };

    const handleSearchFilter = (newKeyWord) => {
        const filters = {
            ...queryParams,
        };
        if (newKeyWord) {
            filters.keyWord = newKeyWord;
        } else {
            delete filters.keyWord;
        }

        navigate({
            pathname: location.pathname,
            search: queryString.stringify(filters),
        });
    };

    const handleFilterChange = (newFilters) => {
        console.log("handleFilterChangeee")
        console.log(newFilters)
        const filters = {
            ...queryParams,
            ...newFilters,
        };

        navigate({
            pathname: location.pathname,
            search: queryString.stringify(filters),
        });
    };

    const setNewFilters = (newFilters) => {
        navigate({
            pathname: location.pathname,
            search: queryString.stringify(newFilters),
        });
    };

    return (
        <>
            <main>
                {/* Whats New Start */}
                <section className="whats-news-area pt-50 pb-20">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <FilterByCategory onChange={handleFilterChange} listCategory={listCategory} />
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
                                                <NewsList newsList={newsList} />
                                            </div>
                                            {/* Card two */}
                                            <div
                                                className="tab-pane fade"
                                                id="nav-profile"
                                                role="tabpanel"
                                                aria-labelledby="nav-profile-tab"
                                            >
                                                <NewsList newsList={newsList} />
                                            </div>
                                            {/* Card three */}
                                            <div
                                                className="tab-pane fade"
                                                id="nav-contact"
                                                role="tabpanel"
                                                aria-labelledby="nav-contact-tab"
                                            >
                                                <NewsList newsList={newsList} />
                                            </div>
                                            {/* card fure */}
                                            <div className="tab-pane fade" id="nav-last" role="tabpanel" aria-labelledby="nav-last-tab">
                                                <NewsList newsList={newsList} />
                                            </div>
                                            {/* card Five */}
                                            <div className="tab-pane fade" id="nav-nav-Sport" role="tabpanel" aria-labelledby="nav-Sports">
                                                <NewsList newsList={newsList} />
                                            </div>
                                            {/* card Six */}
                                            <div className="tab-pane fade" id="nav-techno" role="tabpanel" aria-labelledby="nav-technology">
                                                <NewsList newsList={newsList} />
                                            </div>
                                        </div>
                                        {/* End Nav Card */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <SubSection recentPost={recentPost} scoreBoard={scoreBoard} onSearch={handleSearchFilter} />
                            </div>
                        </div>
                    </div>
                </section>
                {/* Whats New End */}
                <Pagination pagination={pagination} handlePageChange={handlePageChange} />
            </main>
        </>
    );
}

Home.propTypes = {};

export default Home;
