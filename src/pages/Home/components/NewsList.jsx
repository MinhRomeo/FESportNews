import { useNavigate } from 'react-router';

function NewsList(props) {
    const { newsList } = props;
    const navigate = useNavigate();
    return (
        <>
            <div className="whats-news-caption">
                <div className="row">
                    {newsList.map((newsItem) => {
                        return (
                            <div key={newsItem.id} className="col-lg-6 col-md-6">
                                <div className="single-what-news mb-100">
                                    <div className="what-img">
                                        <img src={newsItem.image} alt="" />
                                    </div>
                                    <div className="what-cap">
                                        <span className="color1">{newsItem.author}</span>
                                        <h4>
                                            <span onClick={() => navigate(`/${newsItem.id}`, { replace: true })}>{newsItem.title}</span>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

NewsList.propTypes = {};

export default NewsList;
