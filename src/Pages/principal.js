import React from "react";
import ImageHeader from '../Pages/imagenes/imagen02.jpg'
import Header from "../Components/header";
import Footer from "../Components/footer";

const Principal = () => {
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
              <div className="ftco-cover-1 overlay" style={{backgroundImage : `url(${ImageHeader})`}}>
                <div className="container">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6 text-center">
                      <h1>Descubre tu vocación y potencial</h1>
                      <p>Te acompañamos en el proceso, con el fin de darte la mejor visión para un futuro exitoso</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container site-section">
              <div className="row justify-content-center text-center mb-5">
                <div className="col-md-6">
                  <span className="text-primary">Explora tu vocación</span>
                  <h2 className="mb-4">Porque Tú eres nuestra prioridad</h2>
                  <p> Antes de empezar debes conocer los tres aspectos que te ayudaran a descubrir tu vocación</p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="feature-1">
                    <img src="images/imagen09.jpg" alt="Imagen" className="img-fluid"></img>
                    <div className="feature-1-contents">
                      <h2>INTERESES</h2>
                      <p>Es la predisposición que sientes por realizar algunas actividades, ligadas a alguna ocupación o profesión, 
                        en lugar de otras. Sin embargo, recuerda que solo puedes preferir algo si es que ya lo conoces. Por eso,
                         debes explorar todas las opciones posibles antes de responder a la pregunta ¿Qué me interesa? Por ejemplo:
                          ¿Qué carrera me interesa?</p>
                      
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="feature-1">
                    <img src="images/imagen08.jpg" alt="Imagen" className="img-fluid"></img>
                    <div className="feature-1-contents">
                      <h2>PREFERENCIAS Y HABILIDADES</h2>
                      <p>Consiste en la selección de un determinado campo académico profesional compuesto de un conjunto de actividades
                         lúdico-laborales que se quieran realidad profesionalmente y para el cual existen una serie de habilidades
                          (aptitudes, conocimientos previos y motivos que llevan a una elección de titulación o profesión futura)</p>
                     
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="feature-1">
                    <img src="images/imagen10.jpg" alt="Image" className="img-fluid"></img>
                    <div className="feature-1-contents">
                      <h2>PERSONALIDAD</h2>
                      <p>Cada uno de ustedes es único, por eso actúan, piensan y sienten de forma diferente. Tu personalidad es el conjunto
                         de características que definirá quién eres. Piensa cuáles son los rasgos positivos de tu personalidad y aquellos
                          que deberías mejorar; esto te ayudará a entender quién eres, para luego pensar quién quieres ser.</p>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="site-section section-2">
              <div className="container">
                <div className="row justify-content-center text-center mb-5 section-2-title">
                  <div className="col-md-6">
                    <span className="text-primary">Our Features</span>
                    <h2 className="mb-4">¿Cómo funciona "Vocacional Explorer"?</h2>
                    <p>solo debes seguir los siguientes pasos descritos a continuacion</p>
                  </div>
                </div>
              </div>
              <div className="container site-section">
                <div className="row align-items-stretch feature-2">
                  <div className="col-lg-9 feature-2-img">
                    <img src="images/personalidad.jpg" alt="Image" className="img-fluid"></img>
                  </div>
                  <div className="col-lg-3 feature-2-contents pl-lg-5">
                    <div className="fixed-content">
                      <span className="caption">01.</span>
                      <h3 className="mb-5">Descubre tu personalidad</h3>
                      <p>Para descubrir tu vocación debes empezar por conocerte a ti mismo, así como entender qué es una vocación y qué no lo es.</p>
                      <p>Registrarte con tu cuenta de facebook u otra red social con la que tengas mayor interacción</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container site-section">
                <div className="row align-items-stretch feature-2">
                  <div className="col-lg-9 feature-2-img order-lg-2">
                    <img src="images/header.jpg" alt="Image" className="img-fluid"></img>
                  </div>
                  <div className="col-lg-3 feature-2-contents pr-lg-5">
                    <div className="fixed-content">
                      <span className="caption">02.</span>
                      <h3 className="mb-5">Responde una serie de preguntas</h3>
                      <p>En esta sección indicarás tus gustos y preferencias respecto de las actividades y profesiones que se presentan</p>
                      <p>Responde la evaluación y obten las coincidencias de tu carrera y mucho más</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container site-section">
              <div className="row justify-content-center text-center mb-5">
                <div className="col-md-6">
                  <span className="text-primary">Descubre tu futuro</span>
                  <h2 className="mb-4">Para cada etapa profesional, ten en cuenta lo siguiente</h2>
                  <p>Te mostramos una breve descripción de cada etapa profesional, por las cuales atravesarás</p>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-7">
                  <div className="row">
                    <div className="col-lg-6 mr-auto pr-lg-5">
                      <div className="feature-3">
                        <h3>Profesionales que trabajan</h3>
                        <p>Sé tu mejor yo en el trabajo. Aprenda qué lo hace único y qué tan adecuado es para sus elecciones de carrera pasadas, actuales y futuras.</p>
                      </div>
                    </div>
                    <div className="col-lg-6 ml-auto pl-lg-5">
                      <div className="feature-3">
                        <h3>Estudiantes universitarios y graduados</h3>
                        <p>¿No estás seguro de qué hacer después de la universidad? Vea la variedad de carreras que puede seguir con sus intereses, personalidad y educación.</p>
                      </div>
                    </div>
                    <div className="col-lg-6 mr-auto pr-lg-5">
                      <div className="feature-3">
                        <h3>Cambiadores de carrera</h3>
                        <p>¿Buscas hacer un cambio de carrera? ¿Pensando en volver a la escuela? CareerExplorer lo guiará en la dirección correcta.</p>
                      </div>
                    </div>
                    <div className="col-lg-6 ml-auto pl-lg-5">
                      <div className="feature-3">
                        <h3>Estudiantes de secundaria</h3>
                        <p>Descubre tu verdadero potencial y todas las opciones que tienes después de la secundaria. Luego vea qué camino es el adecuado para usted.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="site-section section-4">
              <div className="container">
                <div className="row justify-content-center text-center">
                  <div className="col-md-7">
                    <blockquote className="testimonial-1">
                      <span className="quote quote-icon-wrap"><span className="icon-format_quote"></span></span>
                      <p>Cuando debes hacer una eleccion y no la hacemos, esto ya es una elección</p>
                      <cite><span className="text-black">William James</span> &mdash; <span className="text-muted">Filósofo y Psicólogo</span></cite>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
            <div className="site-section bg-light">
              <div className="container">
                <div className="row align-items-stretch">
                  <div className="col-lg-3 col-md-6 mb-5">
                    <div className="post-entry-1 h-100">
                      <a href="#">
                        <img src="images/post_1.jpg" alt="Image" className="img-fluid"></img>
                      </a>
                      <div className="post-entry-1-contents">
                        <span className="meta">July 17, 2019</span>
                        <a href="#"><h2>4 latest technology for future generation</h2></a>
                        <a href="#" className="more">Read More</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 mb-5">
                    <div className="post-entry-1 h-100">
                      <a href="#">
                        <img src="images/post_2.jpg" alt="Image" className="img-fluid"></img>
                      </a>
                      <div className="post-entry-1-contents">
                        <span className="meta">July 17, 2019</span>
                        <a href="#"><h2>4 latest technology for future generation</h2></a>
                        <a href="#" className="more">Read More</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 mb-5">
                    <div className="post-entry-1 h-100">
                      <a href="#">
                        <img src="images/post_3.jpg" alt="Image" className="img-fluid"></img>
                      </a>
                      <div className="post-entry-1-contents">
                        <span className="meta">July 17, 2019</span>
                        <a href="#"><h2>4 latest technology for future generation</h2></a>
                        <a href="#" className="more">Read More</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 mb-5">
                    <div className="post-entry-1 h-100">
                      <a href="#">
                        <img src="images/post_4.jpg" alt="Image" className="img-fluid"></img>
                      </a>
                      <div className="post-entry-1-contents">
                        <span className="meta">July 17, 2019</span>
                        <a href="#"><h2>4 latest technology for future generation</h2></a>
                        <a href="#" className="more">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
      </div>
    );
}
export default Principal;
