import { combineReducers } from '@reduxjs/toolkit';
import { reducer as authReducer } from 'slices/authentication';
import { reducer as newsReducer } from 'slices/news';

const rootReducer = combineReducers({
    auth: authReducer,
    news: newsReducer,
});

export default rootReducer;
