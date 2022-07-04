// @flow
import * as React from 'react';
import './Scoreboard.scss';

export const ScoreBoard = (props) => {
    return (
        <div className="scoreboard">
            <div className="scoreboard__header">
                <h5>Score board</h5>
            </div>
            <ul className="scoreboard__list">
                <li className="scoreboard__item">
                    <div className="scoreboard__item-section left">
                        <img src="assets/img/news/whatNews1.jpg" alt="scoreboard" className="scoreboard__item-img" />
                        <span className="scoreboard__item-name">Thiện</span>
                    </div>
                    <div className="scoreboard__item-center">
                        <span className="scoreboard__item-score">1:1</span>
                    </div>
                    <div className="scoreboard__item-section right">
                        <img src="assets/img/news/whatNews1.jpg" alt="scoreboard" className="scoreboard__item-img" />
                        <span className="scoreboard__item-name">Khá Bảnh</span>
                    </div>
                </li>
                <li className="scoreboard__item">
                    <div className="scoreboard__item-section left">
                        <img src="assets/img/news/whatNews1.jpg" alt="scoreboard" className="scoreboard__item-img" />
                        <span className="scoreboard__item-name">Thiện</span>
                    </div>
                    <div className="scoreboard__item-center">
                        <span className="scoreboard__item-score">1:1</span>
                    </div>
                    <div className="scoreboard__item-section right">
                        <img src="assets/img/news/whatNews1.jpg" alt="scoreboard" className="scoreboard__item-img" />
                        <span className="scoreboard__item-name">Khá Bảnh</span>
                    </div>
                </li>
            </ul>
        </div>
    );
};
