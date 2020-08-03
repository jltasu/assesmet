import React from "react";
import { Tabs, Layout, Carousel } from "antd";
import { Link } from "react-router-dom";
import { Row, Col, Divider, Descriptions } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import Footer from "../../Components/footer";
import FormContact from "../../Components/formcontact";

const { TabPane } = Tabs;

const ProfileContact = () => {
  return (
    <Layout className="layout">
      <header className="site-navbar site-navbar-target" role="banner">
        <div className="container">
          <div className="row align-items-center position-relative">
            <div className="col-lg-1.5 text-center">
              <div className="site-logo">
                <a>
                  <Link
                    className="nav-link"
                    to="/asessments/contact"
                    style={{ fontSize: 24, paddingTop: 0.5 }}
                  >
                    <ArrowLeftOutlined />
                  </Link>
                </a>
              </div>
              <div className="ml-auto toggle-button d-inline-block d-lg-none">
                <a
                  href="#"
                  className="site-menu-toggle py-5 js-menu-toggle text-white"
                >
                  <span className="icon-menu h3 text-white"></span>
                </a>
              </div>
            </div>
          </div>
          <Row gutter={16}>
            <Col className="gutter-row" span={6}>
              <div className="h3 text-white" style={{ fontSize: 34 }}>
                {"Psych. Elma Mutt"}
              </div>
            </Col>
          </Row>
          {/* <div>
                        <b><h3 className="h3 text-white" style={{ paddingLeft: 35, paddingTop: 35, fontSize: 35 }}>{"Psych. Elma Mutt"}</h3></b>
                        <b><h5 className="h5 text-white" style={{ paddingLeft: 35, paddingTop: 35, fontSize: 18 }}>{"Psicologia Educativa"}</h5></b>
                    </div> */}
        </div>
      </header>
      <div className="site-wrap" id="home-section">
        <div className="site-mobile-menu site-navbar-target">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3">
              <span className="icon-close2 js-menu-toggle"></span>
            </div>
          </div>
          <div class="site-mobile-menu-body"></div>
        </div>
      </div>
      <div
        className="ftco-cover-4 overlay"
        style={{
          backgroundImage: `url(https://previews.123rf.com/images/seventyfour74/seventyfour741708/seventyfour74170800167/83829695-retrato-de-hermosa-mujer-psic%C3%B3loga-con-gafas-posando-con-portapapeles-en-la-oficina-de-terapia-c%C3%B3moda-sonr.jpg)`,
        }}
      ></div>
      <div style={{ padding: 25 }} className="container">
        <Tabs defaultActiveKey="1" centered>
          <TabPane tab="Resumen" key="1">
            Diane F. Halpern es psicóloga estadounidense y ex presidenta de la
            Asociación Estadounidense de Psicología (APA). Es Decana de Ciencias
            Sociales en las Escuelas de Minerva en KGI ( Keck Graduate Institute
            ) y también profesora de psicología de la familia McElwee en
            Claremont McKenna College . También es ex presidenta de la Western
            Psychological Association, The Society for the Teaching of
            Psychology y la Division of General Psychology.
          </TabPane>
          <TabPane tab="Información" key="2">
            <Descriptions >
              <Descriptions.Item label="UserName">
                Zhou Maomao
              </Descriptions.Item>
              <Descriptions.Item label="Telephone">
                1810000000
              </Descriptions.Item>
              <Descriptions.Item label="Live">
                Hangzhou, Zhejiang
              </Descriptions.Item>
              <Descriptions.Item label="Remark">empty</Descriptions.Item>
              <Descriptions.Item label="Address">
                No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
              </Descriptions.Item>
            </Descriptions>
            
            <FormContact />
          </TabPane>
        </Tabs>
      </div>
      <Footer />
    </Layout>
  );
};

export default ProfileContact;
