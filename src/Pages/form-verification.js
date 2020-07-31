import React, { useState } from 'react'
import { Alert } from 'antd';
import ReactInputVerificationCode from 'react-input-verification-code';

var AmazonCognitoIdentity = require('amazon-cognito-identity-js');

const ValidationForm = ({email}) => {

    const [kill, setKill] = useState()

    const poolData = {  
        UserPoolId: 'us-east-2_ZR6tA3cBm',
        ClientId: '3s8ll3pc36qpkki11njbd7pb05'
    }

    var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

    var userData = {
        Username: email,
        Pool: userPool,
    };

    if(kill != null){
        const temp = (kill.match(/\d/g) || []).length;
        if (temp === 6){
            var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
            cognitoUser.confirmRegistration(kill, true, function(err, result) {
                if (err) {
                    return <Alert message={err.message} type="error" showIcon />;
                }
                console.log('call result: ' + result);
            });
        }
    }

    return (
        <ReactInputVerificationCode type="number" 
        onChange={(values) => setKill(values)}
        autoFocus={false}
        length={6} />
    )
}

export default ValidationForm;