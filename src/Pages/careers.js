import React from 'react';
import ImageHeader from '../Pages/imagenes/hero_1.jpg'
import Header from '../Components/header';
import Footer from '../Components/footer';

const Careers = (props) => {
    // let imageUrl = require(`../assets/imagenes/${props.image}.jpg`) 
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
                    {/* <div class="ftco-cover-1 overlay" style="background-image: url('images/hero_3.jpg')"> */}
                    <div className="ftco-cover-1 overlay" style={{ backgroundImage: `url(${imageUrl})` }}>
                        <div class="container">
                            <div class="row align-items-center justify-content-center">
                                <div class="col-lg-6 text-center">
                                    <h1>Careers</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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
                                    <span class="roles">Software Engineering</span>
                                    <h3><a href="#">Senior Backend Software Engineer</a></h3>
                                </div>
                                <div class="careers-1">
                                    <span class="roles">Software Engineering</span>
                                    <h3><a href="#">Senior Backend Software Engineer</a></h3>
                                </div>
                                <div class="careers-1">
                                    <span class="roles">Software Engineering</span>
                                    <h3><a href="#">Senior Backend Software Engineer</a></h3>
                                </div>
                                <div class="careers-1">
                                    <span class="roles">Software Engineering</span>
                                    <h3><a href="#">Senior Backend Software Engineer</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container site-section">
                    <div class="row justify-content-center text-center mb-5">
                        <div class="col-md-6">
                            <span class="text-primary">Be part of talented people</span>
                            <h2 class="mb-4">What Are The Benifits For Joining Us</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis provident eius ratione velit, voluptas laborum nemo quas ad necessitatibus placeat?</p>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-7">
                            <div class="row">
                                <div class="col-lg-6 mr-auto pr-lg-5">
                                    <div class="feature-3">
                                        <h3>Competitive Compensation</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores assumenda sequi magnam totam alias minima.</p>
                                    </div>
                                </div>
                                <div class="col-lg-6 ml-auto pl-lg-5">
                                    <div class="feature-3">
                                        <h3>Generous insurance coverage</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores assumenda sequi magnam totam alias minima.</p>
                                    </div>
                                </div>
                                <div class="col-lg-6 mr-auto pr-lg-5">
                                    <div class="feature-3">
                                        <h3>Commuter Benefits</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores assumenda sequi magnam totam alias minima.</p>
                                    </div>
                                </div>
                                <div class="col-lg-6 ml-auto pl-lg-5">
                                    <div class="feature-3">
                                        <h3>Generous insurance coverage</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores assumenda sequi magnam totam alias minima.</p>
                                    </div>
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

export default Careers