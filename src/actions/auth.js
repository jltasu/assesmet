// import axios from 'axios';
import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js'
import UserPool from '../Pages/userpool';
import {
    // USER_LOADED,
    // USER_LOADING,
    // AUTH_ERROR,
    LOGIN_FAIL,
    LOGIN_SUCCESS
} from '../actiontype/types';

export const loadUser = () => (dispatch, values) => {
    console.log('eeee')
}

export const login = (username, password) => dispatch => {

    const user = new CognitoUser({
        Username: username,
        Pool: UserPool
    });
    
    const authDetails = new AuthenticationDetails({
        Username: username,
        Password: password
    });

    user.authenticateUser(authDetails, {
        onSuccess: data =>  {
            console.log(data.idToken.jwtToken);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: data.idToken
            })
        },
        onFailure: err => {
            console.log('onFailure: ', err);
            dispatch({
                type: LOGIN_FAIL,
            })
        },
        newPasswordRequired: data => {
            console.log('newPasswordRequired:', data)
        }
    })
}