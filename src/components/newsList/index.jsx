import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import queryString from 'query-string';
import newsApi from 'api/newsApi';

// Use for demo
const listPages = [1, 2, 3, 4];

function NewsList() {
    const navigate = useNavigate();
    const location = useLocation();
    const [newsList, setNewsList] = useState([]);
    const [loading, setLoading] = useState(true);

    const queryParams = useMemo(() => {
        const params = queryString.parse(location.search);
        return {
            ...params,
            _page: Number(params._page) || 1,
            _limit: Number(params._limit) || 9,
            _sort: params._sort || 'salePrice:ASC',
        };
    }, [location.search]);
    const [pagination, setPagination] = useState({
        limit: 9,
        total: 10,
        page: 1,
    });

    useEffect(() => {
        (async () => {
            try {
                const { data, pagination } = await newsApi.getAll(queryParams);
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
            _page: page,
        };

        navigate({
            pathname: location.pathname,
            search: queryString.stringify(filters),
        });
    };

    const handleSortChange = (newSortValue) => {
        const filters = {
            ...queryParams,
            _sort: newSortValue,
        };

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
            <div className="whats-news-caption">
                <div className="row">
                    {newsList.map((newItem) => {
                        return (
                            <div key={newItem.id} className="col-lg-4 col-md-4">
                                <div className="single-what-news mb-100">
                                    <div className="what-img">
                                        <img src={newItem.image} alt="" />
                                    </div>
                                    <div className="what-cap">
                                        <span className="color1">{newItem.author}</span>
                                        <h4>
                                            <a href="#">{newItem.title}</a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            {/*Start pagination */}
            <div className="pagination-area pb-45 text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="single-wrap d-flex justify-content-center">
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination justify-content-start">
                                        <li
                                            className="page-item"
                                            onClick={() => {
                                                if (pagination.page === 1) return;
                                                handlePageChange(pagination.page - 1);
                                            }}
                                        >
                                            <a className="page-link" href="#">
                                                <span className={`flaticon-arrow roted ${pagination.page > 1 && 'active'}`} />
                                            </a>
                                        </li>
                                        {listPages.map((page) => (
                                            <li
                                                key={page}
                                                className={`page-item ${pagination.page === page && 'active'}`}
                                                onClick={() => handlePageChange(page)}
                                            >
                                                <a className="page-link" href="#">
                                                    {page}
                                                </a>
                                            </li>
                                        ))}
                                        <li
                                            className="page-item"
                                            onClick={() => {
                                                if (pagination.page === listPages.length) return;
                                                console.log(listPages, pagination.page);
                                                handlePageChange(pagination.page + 1);
                                            }}
                                        >
                                            <a className="page-link" href="#">
                                                <span
                                                    className={`flaticon-arrow right-arrow ${
                                                        pagination.page < listPages.length && 'active'
                                                    }`}
                                                />
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End pagination  */}
        </>
    );
}

NewsList.propTypes = {};

export default NewsList;
