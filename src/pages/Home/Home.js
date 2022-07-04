import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useSelector } from 'store';
import { newsSelector } from 'utils/selectors';
import { Pagination } from './components/Filter/Pagination';
import NewsList from './components/NewsList';
import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import queryString from 'query-string';
import newsApi from 'api/newsApi';
import { FilterByCategory } from './components/Filter/FilterByCategory';
import { SubSection } from './components/SubSection';

const listCategory = [
    { name: 'LifeStyle', class: 'profile', index: 2 },
    { name: 'Travel', class: 'contact', index: 3 },
    { name: 'Fashion', class: 'last', index: 4 },
    { name: 'Sports', class: 'Sport', index: 5 },
    { name: 'Technology', class: 'technology', index: 6 },
];

function Home(props) {
    const { news } = useSelector(newsSelector);
    const { t } = useTranslation();
    const navigate = useNavigate();

    const location = useLocation();
    const [newsList, setNewsList] = useState([]);
    const [loading, setLoading] = useState(true);

    const queryParams = useMemo(() => {
        const params = queryString.parse(location.search);

        return {
            ...params,
            pageIndex: Number(params.pageIndex) || 1,
            pageSize: Number(params.pageSize) || 3,
            category: '',
        };
    }, [location.search]);
    const [pagination, setPagination] = useState({
        limit: 3,
        total: 8,
        page: 1,
    });

    useEffect(() => {
        (async () => {
            try {
                const { data, pagination } = await newsApi.getAll({
                    ...queryParams,
                    keyWord: queryParams.keyWord ? queryParams.keyWord : '',
                });
                setNewsList(data);
                setPagination(pagination);
            } catch (error) {
                console.log('Failed to fetch product list: ', error);
            }
            setLoading(false);
        })();
    }, [queryParams]);

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
                                <SubSection onSearch={handleSearchFilter} />
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
