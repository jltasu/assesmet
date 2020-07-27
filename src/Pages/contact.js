import React, { useEffect } from "react";
import ImageHeader from "../Pages/imagenes/hero_1.jpg";
import Header from "../Components/header";
import Footer from "../Components/footer";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLeads } from '../actions/lead';

const Contact = ({ getLeads, leads }) => {

    useEffect(() => {
        getLeads()
    }, [getLeads])

    console.log(leads)

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
                    {/* <div class="ftco-cover-1 overlay" style="background-image: url('images/hero_1.jpg')"> */}
                    <div className="ftco-cover-1 overlay" style={{ backgroundImage: `url(${ImageHeader})` }}>
                        <div class="container">
                            <div class="row align-items-center justify-content-center">
                                <div class="col-lg-6 text-center">
                                    <h1>Contact Us</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="site-section bg-light" id="contact-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 mb-5">
                                <form action="#" method="post">
                                    <div class="form-group row">
                                        <div class="col-md-6 mb-4 mb-lg-0">
                                            <input type="text" class="form-control" placeholder="First name" />
                                        </div>
                                        <div class="col-md-6">
                                            <input type="text" class="form-control" placeholder="First name" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-md-12">
                                            <input type="text" class="form-control" placeholder="Email address" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-md-12">
                                            <textarea name="" id="" class="form-control" placeholder="Write your message." cols="30" rows="10"></textarea>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-md-6 mr-auto">
                                            <input type="submit" class="btn btn-block btn-primary text-white py-3 px-5" value="Send Message" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="col-lg-4 ml-auto">
                                <div class="bg-white p-3 p-md-5">
                                    <h3 class="text-black mb-4">Contact Info</h3>
                                    <ul class="list-unstyled footer-link">
                                        <li class="d-block mb-3">
                                            <span class="d-block text-black">Address:</span>
                                            <span>34 Street Name, City Name Here, United States</span></li>
                                        <li class="d-block mb-3"><span class="d-block text-black">Phone:</span><span>+1 242 4942 290</span></li>
                                        <li class="d-block mb-3"><span class="d-block text-black">Email:</span><span><a href="https://colorlib.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="066f686069467f69737462696b676f682865696b">[email&#160;protected]</a></span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    leads: state.leads.leads,
})

const mapDispatchToProps = distpatch => {
    return {
        getLeads: () => distpatch(getLeads())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
