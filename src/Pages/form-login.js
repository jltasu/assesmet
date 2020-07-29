import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { login } from '../actions/auth'

const LoginForm = ({ isAuthenticated, login }) => {

    if(isAuthenticated){
        return <Redirect to="/asessments/welcome"></Redirect>
    }
 
    const onFinish = values => {
        login(values.email, values.password)
    }

    return (
        <Form
            name="form_login"
            className="login-form"
            initialValues={{
                remember: true
            }}
            onFinish={onFinish}
        >
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
                <Form.Item name="remember" valuePropName="checked" noStyle >
                    <Checkbox>Recordarme</Checkbox>
                </Form.Item>
                <a className="login-form-forgot"><Link to="/forget-password">¿Olvidaste tu contraseña?</Link></a>
            </Form.Item>
            <Form.Item>
                <Button type="danger" htmlType="submit" className="login-form-button" style={{ borderRadius: 6 }} >Ingresar</Button>
            </Form.Item>
            <b><a className="login-form-forgot"><Link to="/register">¿Aún no tienes una cuenta? ¡Registrate!</Link></a></b>
        </Form>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

const mapDispatchToProps = dispatch => {
    return {
        login: (username, password) => dispatch(login(username, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)