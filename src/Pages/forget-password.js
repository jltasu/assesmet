import React from 'react';
import Header from '../Components/header';
import ImageHeader from '../Pages/imagenes/banner.jpg'
import Footer from '../Components/footer';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Card, Row, Col, Form, Input, Button } from 'antd';
var AmazonCognitoIdentity = require('amazon-cognito-identity-js');

export default () => {

    const poolData = {
        UserPoolId: 'us-east-2_ZR6tA3cBm',
        ClientId: '3s8ll3pc36qpkki11njbd7pb05'
    }

    var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

    var userData = {
        Username: 'jenson@upeu.edu.pe',
        Pool: userPool,
    };

    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

    const onFinish = values => {
        cognitoUser.forgotPassword({
            onSuccess: function(data){

            },
            onFailure: function(err){
                alert(err.message || JSON.stringify(err));
            },

            inputVerificationCode: function(data){
                console.log('Code sent to: ' + data);
                cognitoUser.confirmPassword(values.code, values.password, {
                    onSuccess(){
                        console.log('Password Confirmed')
                    },
                    onFailure(err){
                        console.log('Password not confirmed!');
                    }
                })
            }
        });
    }


    return (
        <div>
            <Header />
            <div className="site-wrap" id="home-section">
                <div className="site-mobile-menu site-navbar-target">
                    <div className="site-mobile-menu-header">
                        <div className="site-mobile-menu-close mt-3">
                            <span className="icon-close2 js-menu-toggle"></span>
                        </div>
                    </div>
                    <div className="site-mobile-menu-body"></div>
                </div>
                <div className="ftco-blocks-cover-1">
                    <div className="ftco-cover-1 overlay" style={{ backgroundImage: `url(${ImageHeader})` }}>
                        <div className="container">
                            <div className="col-lg-6 text-center" style={{ paddingTop: 120 }}>
                                <Row>
                                    <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                                    </Col>
                                    <Col xs={20} sm={16} md={12} lg={8} xl={4}>
                                        <Card
                                            hoverable="true"
                                            bordered={false}
                                            cover="Recuperar Contraseña"
                                            title="  "
                                            className="mb-4"
                                            style={{
                                                width: 600,
                                                height: 300,
                                                opacity: 4,
                                                backgroundColor: 'rgba(245, 245, 245, 0.88)',
                                                borderRadius: 12,
                                                fontSize: 25
                                            }}>
                                            <Form
                                                name="form_login"
                                                className="login-form"
                                                initialValues={{
                                                    remember: true
                                                }}
                                                onFinish={onFinish}
                                            >
                                                <Form.Item
                                                    name="code"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Ingresa el codigo de Verificacion'
                                                        }
                                                    ]}
                                                >
                                                    <Input prefix={<UserOutlined className="site-form-item-icon" />}
                                                        placeholder="Ingresa el codigo de Verificacion"
                                                        type="number"
                                                        style={{ borderRadius: 12 }}
                                                    />
                                                </Form.Item>
                                                <Form.Item
                                                    name="password"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Ingresa tu contraseña',
                                                        },
                                                    ]}
                                                >
                                                    <Input
                                                        prefix={<LockOutlined className="site-form-item-icon" />}
                                                        type="password"
                                                        placeholder="Ingrese una nueva contraseña"
                                                        style={{ borderRadius: 12 }}
                                                    />
                                                </Form.Item>
                                                <Form.Item>
                                                    <Button type="danger" htmlType="submit" className="login-form-button" style={{ borderRadius: 6 }} >
                                                        Recuperar
                                                </Button>
                                                </Form.Item>
                                            </Form>

                                        </Card>
                                    </Col>
                                    <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}