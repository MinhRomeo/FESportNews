import { combineReducers } from '@reduxjs/toolkit';
import { reducer as authReducer } from 'slices/authentication';

const rootReducer = combineReducers({
    auth: authReducer,
});

export default rootReducer;
