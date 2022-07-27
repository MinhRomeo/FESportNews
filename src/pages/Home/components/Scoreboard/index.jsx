// @flow
import * as React from 'react';
import './Scoreboard.scss';

export const ScoreBoard = (props) => {
    const {scoreBoard}=props;
    return (
        <div className="scoreboard">
            <div className="scoreboard__header">
                <h5>Score board</h5>
            </div>
            <ul className="scoreboard__list">
                {
                   <>
                       <li className="scoreboard__item">
                    <div className="scoreboard__item-section left">
                        <img src={scoreBoard[0]?.image} alt="scoreboard" className="scoreboard__item-img" />
                        <span className="scoreboard__item-name">{scoreBoard[0]?.name}</span>
                    </div>
                    <div className="scoreboard__item-center">
                        <span className="scoreboard__item-score">{scoreBoard[0]?.score}:{scoreBoard[1]?.score}</span>
                    </div>
                    <div className="scoreboard__item-section right">
                        <img  src={scoreBoard[1]?.image} alt="scoreboard" className="scoreboard__item-img" />
                        <span className="scoreboard__item-name">{scoreBoard[1]?.name}</span>
                    </div>
                </li>
              
                   </>
                
                
                  
                }
             
            
            </ul>
        </div>
    );
};
