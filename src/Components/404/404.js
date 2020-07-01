import React from 'react'

import Header from '../header'
import ImageHeader from '../../Pages/imagenes/hero_1.jpg'
const Error404 = () => {
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
                {/* <div class="ftco-cover-1 overlay" style="background-image: url('images/hero_3.jpg')"> */}
                <div className="ftco-cover-1 overlay" style={{ backgroundImage: `url(${ImageHeader})` }}>
                    <div class="container">
                        <div class="row align-items-center justify-content-center">
                            <div class="col-lg-6 text-center">
                                <h1>404</h1>
                                <p>Pagina no encontrada</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         
           
        </div>
    </div>
    )
}

export default Error404