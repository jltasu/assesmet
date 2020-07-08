import React from 'react'

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-7">
                                <h2 className="footer-heading mb-4">Acerca de Nosotros</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                            </div>
                            <div className="col-md-4 ml-auto">
                                <h2 className="footer-heading mb-4">Caracteristicas</h2>
                                <ul className="list-unstyled">
                                    <li><a href="#">Terminos y Condiciones</a></li>
                                    <li><a href="#">Privacidad</a></li>
                                    <li><a href="#">Contáctanos</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ml-auto">
                        <h2 className="footer-heading mb-4">Siguenos</h2>
                        <a href="#about-section" className="smoothscroll pl-0 pr-3"><span className="icon-facebook"></span></a>
                        <a href="#" className="pl-3 pr-3"><span className="icon-twitter"></span></a>
                        <a href="#" className="pl-3 pr-3"><span className="icon-instagram"></span></a>
                        <a href="#" className="pl-3 pr-3"><span className="icon-linkedin"></span></a>

                    </div>
                </div>
                <div className="row pt-5 mt-5 text-center">
                    <div className="col-md-12">
                        <div className="border-top pt-5">
                            <p>

                                Copyright 2020 &copy;<script type="44bcf6ecc84568d1bf8bf9de-text/javascript">document.write(new Date().getFullYear());</script> All rights reserved <i className="icon-heart text-danger" aria-hidden="true"></i>

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer