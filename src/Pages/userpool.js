import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: 'us-east-2_ZR6tA3cBm',
    ClientId: '3s8ll3pc36qpkki11njbd7pb05'
};

export default new CognitoUserPool(poolData);