import React, {useState, useEffect} from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Redirect } from "react-router-dom";

const LoginForm = () => {
    const [button, setButton] = useState(false)
    const onFinish = values => {
        if(values != null){
            setButton(true);
        }else{
            setButton(false)
        }
    }

    if(button){
        return <Redirect to='/asessments/welcome'></Redirect>
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
                name="Correo Electronico"
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
                <a className="login-form-forgot" href="" >
                    ¿Olvidaste tu contraseña?
        </a>
            </Form.Item>
            <Form.Item>
                <Button type="danger" htmlType="submit" className="login-form-button" style={{ borderRadius: 6 }} >
                    Ingresar
        </Button>
            </Form.Item>
        </Form>
    )
}

export default LoginForm