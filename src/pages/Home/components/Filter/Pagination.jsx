// @flow
import React from 'react';
export const Pagination = (props) => {
    const { pagination, handlePageChange } = props;
    const paginationLength = Math.ceil(pagination.total / pagination.limit);

    return (
        /*Start pagination */
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
                                            if (pagination.page <= 1) return;
                                            handlePageChange(pagination.page - 1);
                                        }}
                                    >
                                        <button className="page-link">
                                            <span className={`flaticon-arrow roted ${pagination.page > 1 && 'active'}`} />
                                        </button>
                                    </li>
                                    {new Array(paginationLength).fill(0).map((page, index) => {
                                        const pageName = index + 1;
                                        return (
                                            <li
                                                key={pageName}
                                                className={`page-item ${pagination.page === pageName && 'active'}`}
                                                onClick={() => handlePageChange(pageName)}
                                            >
                                                <button className="page-link">{pageName}</button>
                                            </li>
                                        );
                                    })}
                                    <li
                                        className="page-item"
                                        onClick={() => {
                                            if (pagination.page === paginationLength) return;
                                            handlePageChange(pagination.page + 1);
                                        }}
                                    >
                                        <button className="page-link">
                                            <span
                                                className={`flaticon-arrow right-arrow ${pagination.page < paginationLength && 'active'}`}
                                            />
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    {
        /* End pagination  */
    }
};
