import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { CognitoUserPool } from 'amazon-cognito-identity-js'


var AmazonCognitoIdentity = require('amazon-cognito-identity-js');

const RegisterForm = () => {
    const poolData = {
        UserPoolId: 'us-east-2_ZR6tA3cBm',
        ClientId: '3s8ll3pc36qpkki11njbd7pb05'
    }

    const UserPool = new CognitoUserPool(poolData);

    var attributeList = [];

    const onFinish = values => {

        var dataName = {
            Name: 'name',
            Value: values.name
        };

        var dataApellidos = {
            Name: 'family_name',
            Value: values.apellidos
        };

        var dataEmail = {
            Name: 'email',
            Value: values.email
        };

        var dataPhone = {
            Name: 'phone_number',
            Value: values.telefono
        };

        var dataBirth = {
            Name: 'birthdate',
            Value: values.nacimiento
        };

        var dataSchool = {
            Name: 'custom:school',
            Value: values.school
        };

        var dataCity = {
            Name: 'custom:city',
            Value: values.city
        };

        var attributeName = new AmazonCognitoIdentity.CognitoUserAttribute(dataName);
        var attributeLastName = new AmazonCognitoIdentity.CognitoUserAttribute(dataApellidos);
        var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);
        var attributePhone = new AmazonCognitoIdentity.CognitoUserAttribute(dataPhone);
        var attributeBirth = new AmazonCognitoIdentity.CognitoUserAttribute(dataBirth);
        var attributeSchool = new AmazonCognitoIdentity.CognitoUserAttribute(dataSchool);
        var attributeCity = new AmazonCognitoIdentity.CognitoUserAttribute(dataCity);
         
        attributeList.push(attributeLastName);
        attributeList.push(attributeName);
        attributeList.push(attributeEmail);
        attributeList.push(attributePhone);
        attributeList.push(attributeBirth);
        attributeList.push(attributeSchool);
        attributeList.push(attributeCity);

        console.log(attributeList);

        UserPool.signUp(
            values.email, 
            values.password,
            attributeList,
            null,
            (err, data) => {
            if(err) console.log(err);
            console.log(data)
        })
    }

    return (
        <Form
            name="form_register"
            className="horizontal_login"
            layout="horizontal"
            initialValues={{
            }}
            onFinish={onFinish}
        >
            <Form.Item
                name="name"
                rules={[
                    {
                        required: true,
                        message: 'Ingresa tu nombre'
                    }
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} 
                       placeholder="Nombres" 
                       style={{borderRadius: 12}}
                />
            </Form.Item>
            <Form.Item
                name="apellidos"
                rules={[
                    {
                        required: true,
                        message: 'Ingresa tus apellidos'
                    }
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} 
                       placeholder="Apellidos" 
                       style={{borderRadius: 12}}
                />
            </Form.Item>
            <Form.Item
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Ingresa tu correo'
                    }
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} 
                       placeholder="Correo Electronico" 
                       style={{borderRadius: 12}}
                />
            </Form.Item>
            <Form.Item
                name="school"
                rules={[
                    {
                        required: true,
                        message: 'Ingresa el nombre de tu Colegio',
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    placeholder="Colegio"
                    style={{borderRadius: 12}}
                />
            </Form.Item>
            <Form.Item
                name="city"
                rules={[
                    {
                        required: true,
                        message: 'Ingresa el nombre de la ciudad',
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    placeholder="Ciudad"
                    style={{borderRadius: 12}}
                />
            </Form.Item>
            <Form.Item
                name="nacimiento"
                rules={[
                    {
                        required: true,
                        message: 'Ingresa tu fecha de Nacimiento',
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="date"
                    placeholder="Fecha de Nacimiento"
                    style={{borderRadius: 12}}
                />
            </Form.Item>
            <Form.Item
                name="telefono"
                rules={[
                    {
                        required: true,
                        message: 'Ingresa tu numero de celular',
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    placeholder="Numero de celular"
                    style={{borderRadius: 12}}
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
                    placeholder="Password"
                    style={{borderRadius: 12}}
                />
            </Form.Item>
            <Form.Item>
                <Button type="danger" htmlType="submit" className="login-form-button" style={{ borderRadius: 6 }} >
                    Registrarse
        </Button>
            </Form.Item>
        </Form>
    )
}

export default RegisterForm