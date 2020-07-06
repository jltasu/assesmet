import React from 'react'
import { Layout, Menu, Button, Row, Col, Divider, Card, PageHeader } from 'antd';
import ImageHeader from './../Pages/imagenes/desktop.jpg'
import ImageGap from './../Pages/imagenes/gap2.jpg'
import ImageGaps from './../Pages/imagenes/gaps.jpg'
import { Link } from 'react-router-dom'
import Footer from '../Components/footer';
import { Avatar } from 'antd';

const WelcomePage = () => {
    return (
        <div>
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
                        <b><h3 className="h3 text-white" style={{ paddingTop: 35, fontSize: 45 }}>Bienvenido a Vocacional Explorer</h3></b>
                        <div style={{ paddingTop: 25 }}>
                            <a style={{ fontSize: 20 }} className="text-white">Bienvenido a Vocacional Explorer</a>
                        </div>
                        <div style={{ paddingTop: 20, paddingBottom: 40 }}>
                            <Button type="primary" style={{ width: 450, height: 60, borderRadius: 9, fontSize: 25, fontWeight: 'bold' }}>Iniciar ahora</Button>
                        </div>
                        <div>
                            <a className="text-white" style={{ fontSize: 20 }}>Aprenda más ...</a>
                        </div>
                    </div>
                    <div className="row no-gutters list-grouped" style={{paddingTop: 15}}>
                        <div className="col-sm-6">
                            <div className="list-item list-overlay r mb-3">
                                <div className="media media-4x3">
                                    <a
                                        href="music.detail.html#"
                                        className="ajax media-content"
                                        style={{ backgroundImage: `url(${ImageGaps})` }}
                                    ></a>
                                    <div className="media-action"></div>
                                </div>
                                <div class="list-content p-5">
                                    <div className="list-body">
                                        <a
                                            href="music.detail.html#"
                                            className="list-title title ajax h4 font-weight-bold"
                                        >Amazing songs </a
                                        ><a
                                            href="music.artist.html#"
                                            className="list-subtitle d-block text-muted subtitle ajax h-1x"
                                        >Pharetra dapibus cursus tellus scelerisque sed morbi nulla rhoncus,</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="list-item list-overlay r mb-3">
                                <div className="media media-4x3">
                                    <a
                                        href="music.detail.html#"
                                        className="ajax media-content"
                                        style={{ backgroundImage: `url(${ImageGap})` }}
                                    ></a>
                                    <div className="media-action"></div>
                                </div>
                                <div className="list-content p-5">
                                    <div className="list-body">
                                        <a
                                            href="music.detail.html#"
                                            className="list-title title ajax h4 font-weight-bold"
                                        >Weekly top albums </a>
                                        <a
                                            href="music.artist.html#"
                                            className="list-subtitle d-block text-muted subtitle ajax h-1x"
                                        >Porta neque, ultricies porta consectetur diam aenean volutpat mi</a>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                    <div className="site-mobile-menu-body"></div>
                </div>
                <div className="ftco-blocks-cover-1">
                    <div className="ftco-cover-1 overlay" style={{ backgroundImage: `url(${ImageHeader})` }}>
                        <div className="container">
                            <div className="row right">
                                <div className="col-lg-6 text-center" style={{ paddingTop: 180 }}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default WelcomePage