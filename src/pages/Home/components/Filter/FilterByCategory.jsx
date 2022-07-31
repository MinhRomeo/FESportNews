// @flow
import React from 'react';

export const FilterByCategory = (props) => {
    const { listCategory, onChange } = props;

    const handleCategoryChange = (categoryName) => {
        const categoryIndex = listCategory.find((category) => category.name === categoryName).index;
        const newListCategory = [categoryIndex];
        console.log(newListCategory);
        onChange({ listCate: newListCategory });
    };
    return (
        <div className="row d-flex justify-content-bnetween">
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
                            {/* <button
                                style={{ backgroundColor: 'transparent', cursor: 'pointer' }}
                                className="nav-item nav-link active"
                                id="nav-home-tab"
                                data-toggle="tab"
                                role="tab"
                                aria-controls="nav-home"
                                aria-selected="true"
                                
                            >
                                All
                            </button> */}
                            {listCategory.map((category) => {
                                return (
                                    <button
                                        key={category.class}
                                        style={{ backgroundColor: 'transparent', cursor: 'pointer' }}
                                        className="nav-item nav-link"
                                        id={`nav-${category.class}-tab`}
                                        data-toggle="tab"
                                        role="tab"
                                        aria-controls="nav-home"
                                        aria-selected="true"
                                        onClick={() => handleCategoryChange(category.name)}
                                    >
                                        {category.name}
                                    </button>
                                );
                            })}
                        </div>
                    </nav>
                    {/*End Nav Button  */}
                </div>
            </div>
        </div>
    );
};
