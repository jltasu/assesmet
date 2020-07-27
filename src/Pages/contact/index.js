import React from 'react';
import { Layout, Card, Col, Row, Divider } from 'antd';
import ResumePage from "../../Asessments/resume";
import ImageHeader from '../imagenes/patient.jpg';
import Footer from "../../Components/footer";
import { Link } from 'react-router-dom'; 

const { Meta } = Card;

const Contactar = () => {
    return (
        <div>
            <Layout>
                <ResumePage title={'Consulta con los expertos'} img={ImageHeader} />
            </Layout>
            <div className="container" style={{paddingBottom: 20}}>
                <div class="heading py-2 d-flex"><div>
                    <div class="text-muted text-sm sr-item">Nuestros Especialistas</div>
                    <h5 class="text-highlight sr-item">Contactenos</h5>
                    <Divider />
                    </div><span class="flex"></span>
                </div>
                <div className="site-card-wrapper">
                    <Row gutter={16}>
                        <Col span={8}>
                            <Link to='/contact/profile'>
                            <Card
                                hoverable
                                style={{ width: 250 }} 
                                bordered={true}
                                cover={<img alt="example" src="https://previews.123rf.com/images/seventyfour74/seventyfour741708/seventyfour74170800167/83829695-retrato-de-hermosa-mujer-psic%C3%B3loga-con-gafas-posando-con-portapapeles-en-la-oficina-de-terapia-c%C3%B3moda-sonr.jpg" />}
                                >
                                <Meta title="Psych. Elma Mutt" description="Psicologa Educativa" />
                            </Card>
                            </Link>
                        </Col>
                    </Row>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contactar;