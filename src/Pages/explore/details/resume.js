import React from 'react';
import Footer from "../../../Components/footer";
import { Link } from 'react-router-dom';
import { Tabs, Empty } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import Ambiental from '../../imagenes/ambiental.jpg';


const { TabPane } = Tabs;

const Career = () => {
    return (
        <div>
            <header className="site-navbar site-navbar-target" role="banner">
                <div className="container">
                    <div className="row align-items-center position-relative">
                        <div className="col-lg-1.5 text-center">
                            <div className="site-logo">
                                <a><Link className="nav-link" to='/asessments/explore' style={{ fontSize: 25 }}><ArrowLeftOutlined /></Link></a>
                            </div>
                            <div className="ml-auto toggle-button d-inline-block d-lg-none"><a href="#" className="site-menu-toggle py-5 js-menu-toggle text-white"><span className="icon-menu h3 text-white"></span></a></div>
                        </div>
                    </div>
                    <div>
                        <b><h3 className="h3 text-white" style={{ paddingLeft: 35, paddingTop: 35, fontSize: 35 }}>{"Ingenieria Ambiental"}</h3></b>
                        <b><h5 className="h5 text-white" style={{ paddingLeft: 35, paddingTop: 35, fontSize: 18 }}>{"Facultad de Ingenieria y Arquitectura"}</h5></b>
                    </div>
                </div>
            </header>
            <div className="site-wrap" id="home-section">
                <div className="site-mobile-menu site-navbar-target">
                    <div className="site-mobile-menu-header">
                        <div className="site-mobile-menu-close mt-3">
                            <span className="icon-close2 js-menu-toggle"></span>
                        </div>
                    </div>
                    <div class="site-mobile-menu-body" ></div>
                </div>
            </div>
            <div className="ftco-cover-4 overlay" style={{ backgroundImage: `url(${Ambiental})` }}></div>
            <div style={{ padding: 25 }} className="container">
                <Tabs defaultActiveKey="1" centered>
                    <TabPane tab="Presentación" key="1">
                        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} style={{color: 'black'}}/>
                    </TabPane>
                    <TabPane tab="Campo Ocupacional" key="2">
                        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} style={{color: 'black'}}/>
                    </TabPane>
                    <TabPane tab="Perfil Profesional" key="3">
                        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} style={{color: 'black'}}/>
                    </TabPane>
                    <TabPane tab="Proyección Profesional" key="4">
                        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} style={{color: 'black'}}/>
                    </TabPane>
                </Tabs>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Career;