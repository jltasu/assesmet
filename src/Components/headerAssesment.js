import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const HeaderAssesment = ({ title }) => {
    return (
        <header className="site-navbar site-navbar-target" role="banner">
            <div className="container">
                <div className="row align-items-center position-relative">
                    <div className="col-lg-1.5 text-center">
                        <div className="site-logo">
                        <a><Link className="nav-link" to='/asessments/welcome' style={{ fontSize: 20 }}>Vocacional Explorer</Link></a>
                        </div>
                        <div className="ml-auto toggle-button d-inline-block d-lg-none"><a href="#" className="site-menu-toggle py-5 js-menu-toggle text-white"><span className="icon-menu h3 text-white"></span></a></div>
                    </div>
                    <div className="col-lg-5">
                        <nav className="site-navigation text-left ml-auto " role="navigation">
                            <ul className="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
                                <li><Link className="nav-link" to='/asessments/reports' style={{ fontSize: 20 }}>Reportes</Link></li>
                                <li><Link className="nav-link" to='/asessments/explore' style={{ fontSize: 20 }}>Explorar</Link></li>
                                <li><Link className="nav-link" to='/asessments/contact' style={{ fontSize: 20 }}>Contactar</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-4 text-right">
                        <Avatar size={40}>DANIEL</Avatar>
                    </div>
                </div>
                <div>
                    <b><h3 className="h3 text-white" style={{ paddingLeft: 35, paddingTop: 35, fontSize: 35 }}>{title}</h3></b>
                </div>
            </div>
        </header>
    )
}

export default HeaderAssesment