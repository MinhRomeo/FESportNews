import { useNavigate } from 'react-router-dom';

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
                                        <img src={newsItem?.imageEntity[0]?.url} alt="" />
                                    </div>
                                    <div className="what-cap" style={{padding:"0"}}>
                                        <span className="color1">{newsItem?.name}</span>
                                        <h4>
                                            <span onClick={() => navigate(`/${newsItem.id}`, { replace: true })}>{newsItem?.name}</span>
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
