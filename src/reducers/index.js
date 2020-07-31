import { combineReducers } from 'redux'
import leads from './leads'
import auth from './auth'
import questions from './questions';

export default combineReducers({
    leads,
    auth,
    questions
});