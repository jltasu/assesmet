import React from 'react'
import ValidationForm from './form-verification'
import Header from '../Components/header';
import ImageHeader from '../Pages/imagenes/banner.jpg'
import Footer from '../Components/footer';
import { Card, Row, Col } from 'antd';

const ValidatorScreen = () => {
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
                                            cover="Ingrese el codigo de verificación"
                                            title="  "
                                            className="mb-4"
                                            style={{
                                                width: 600,
                                                height: 200,
                                                opacity: 4,
                                                backgroundColor: 'rgba(245, 245, 245, 0.88)',
                                                borderRadius: 12,
                                                fontSize: 25
                                            }}>
                                            <ValidationForm />
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

export default ValidatorScreen