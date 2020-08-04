import React from 'react';
<<<<<<< HEAD
// import ImageHeader from '../Pages/imagenes/hero_1.jpg'
=======
>>>>>>> 4ee67a8227d0db348507cf01c66671831e1f8423
import Header from '../Components/header';
import Footer from '../Components/footer';

export default () => {

    let imageUrl = require(`../assets/imagenes/ingenieria-ambiental.jpg`)

    return (
        
        <div>
            <Header />
            <div class="site-wrap" id="home-section">
                <div class="site-mobile-menu site-navbar-target">
                    <div class="site-mobile-menu-header">
                        <div class="site-mobile-menu-close mt-3">
                            <span class="icon-close2 js-menu-toggle"></span>
                        </div>
                    </div>
                    <div class="site-mobile-menu-body"></div>
                </div>

                <div class="ftco-blocks-cover-1">
                    <div className="ftco-cover-1 overlay" style={{ backgroundImage: `url(${imageUrl})` }}>
                        <div class="container">
                            <div class="row align-items-center justify-content-center">
                                <div class="col-lg-6 text-center">
                                    <h1>Carreras</h1>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="site-section bg-light">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="careers-1">
                                    <h3><a href="#">ingenieria de Sistemas </a></h3>
                                </div>
                                <div class="careers-1">
                                    <h3><a href="#">ingenieria Ambiental</a></h3>
                                </div>
                                <div class="careers-1">
                                    <h3><a href="#">ingenieria Civil </a></h3>
                                </div>
                                <div class="careers-1">
                                    <h3><a href="#">ingenieria de Alimentos </a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>          
                <Footer />
            </div>
        </div>
    )
}