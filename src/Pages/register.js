import React, { useState } from 'react';
import ImageHeader from '../Pages/imagenes/banner.jpg'
import RegisterForm from './form-register';
<<<<<<< HEAD
import { Card} from 'antd';
import Header from '../Components/header';
import Footer from '../Components/footer';
//import ReactInputVerificationCode from 'react-input-verification-code';

const Register = () => {

    const [modal, setModal] = useState(false)
=======
import { Card } from 'antd';
import Header from '../Components/header';
import Footer from '../Components/footer';
>>>>>>> 4ee67a8227d0db348507cf01c66671831e1f8423

export default () => {
    return (
        <div>
            <Header />
            <div className="site-wrap" id="home-section" >
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
                                <div className="col-lg-6 text-center" style={{ paddingTop: 100 }}>
                                    <Card
                                        hoverable="true"
                                        bordered={false}
                                        cover='Registrarse'
                                        className="mb-6"
                                        style={{
                                            width: 420,
                                            height: 550,
                                            opacity: 4,
                                            backgroundColor: 'rgba(245, 245, 245, 0.88)',
                                            borderRadius: 12,
                                            fontSize: 25
                                        }}>
                                        <RegisterForm />
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
}