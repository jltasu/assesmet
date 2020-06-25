import React from 'react';
import ImageHeader from '../Pages/imagenes/banner.jpg'
import LoginForm from './form-login';
import { Card } from 'antd';
import Header from '../Components/header';
import Footer from '../Components/footer';

const Login = () => {
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
                            <div className="row right">
                            <div className="col-lg-6 text-center" style={{paddingTop: 180}}>
                                    <Card
                                    hoverable="true"
                                    bordered={false}
                                    cover="Iniciar Sesión"
                                    title="  " 
                                    className="mb-4" 
                                    style={{ width: 420, 
                                            height: 400, 
                                            opacity: 4, 
                                            backgroundColor: 'rgba(245, 245, 245, 0.88)',
                                            borderRadius: 12,
                                            fontSize: 25
                                            }}>
                                        <LoginForm></LoginForm>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
              <Footer />
            </div>
  );
};

export default Login;
