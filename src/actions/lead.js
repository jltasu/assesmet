import axios from 'axios';
import { GET_LEADS } from '../actiontype/types';

export const getLeads = () => dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
        dispatch({
            type: GET_LEADS,
            payload: res.data
        });
    }).catch(err => console.log(err))
}