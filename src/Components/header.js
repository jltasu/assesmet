import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="site-navbar site-navbar-target" role="banner">
            <div className="container">
                <div className="row align-items-center position-relative">
                    <div className="col-lg-4">
                        <nav className="site-navigation text-right ml-auto " role="navigation">
                            <ul className="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
                                <li className="active"><Link className="nav-link" to='/'>Inicio</Link></li>
                                <li><Link className="nav-link" to='/test-vocacional'>Test vocacional</Link></li>
                                <li><Link className="nav-link" to='/carreras'>Carreras</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-4 text-center">
                        <div className="site-logo">
                            <a href="index.html">Vocacional Explorer</a>
                        </div>
                        <div className="ml-auto toggle-button d-inline-block d-lg-none"><a href="#" className="site-menu-toggle py-5 js-menu-toggle text-white"><span className="icon-menu h3 text-white"></span></a></div>
                    </div>
                    <div className="col-lg-4">

                        <nav className="site-navigation text-left mr-auto " role="navigation">
                            <ul className="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
                                <li><Link to='/contact'>Contactar</Link></li>
                                <li><Link to='/login'>Iniciar Sesión</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header