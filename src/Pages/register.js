import React, { useState } from 'react';
import ImageHeader from '../Pages/imagenes/banner.jpg'
import RegisterForm from './form-register';
import { Card, Modal, Button, Space } from 'antd';
import Header from '../Components/header';
import Footer from '../Components/footer';
import ReactInputVerificationCode from 'react-input-verification-code';

const Register = () => {

    const [modal, setModal] = useState(false)

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
                                        <Button type="primary" onClick={() => setModal(true)}>
                                            Vertically centered modal dialog
            </Button>
                                        <Modal
                                            title="Vertically centered modal dialog"
                                            centered
                                            visible={modal}
                                            onOk={() => setModal(false)}
                                            onCancel={() => setModal(false)}
                                        >
                                            <div style={{padding: 5}}>
                                            <ReactInputVerificationCode
                                            onChange={console.log} length={6}/>
                                            </div>
                                        </Modal>
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

export default Register