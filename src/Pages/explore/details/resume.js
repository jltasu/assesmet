import React from "react";
import Footer from "../../../Components/footer";
import { Link } from "react-router-dom";
import { Tabs, Empty } from "antd";
import { ArrowLeftOutlined, CheckCircleFilled } from "@ant-design/icons";
import { List, Typography, Divider } from 'antd';
const { TabPane } = Tabs;
const data = [
  "Administrador de base de datos",
  "Auditor de sistemas de información.",
  "Gestor de proyectos TIC’s (hardware, software y comunicaciones)",
  "Administrador de redes y comunicaciones. Implementación de infraestructura tecnológica.",
  "Administrador de la seguridad informática",
  "Desarrollador de software. Implementación de sistemas de información: Arquitectura de software.",
  "Consultor en tecnologías de la información y comunicaciones.",
  "Gerente de informática y de sistemas.",
];
const data1 = [
    'Aprendizaje continuo.',
 'Comunicación eficaz.',
'Solución de problemas.',
'Trabajo en equipo',
'Liderazgo.',
]
const Career = (props) => {
  let titulo = `${props.location.titulo}`;
  let texto = `${props.location.texto}`;
  console.log(titulo);
  let imageUrl = require(`../../../assets/imagenes/${props.location.state}.jpg`);
  // let imageUrl = require(`../../../assets/imagenes/ingenieria-de-sistemas.jpg`)
  return (
    <div>
      <header className="site-navbar site-navbar-target" role="banner">
        <div className="container">
          <div className="row align-items-center position-relative">
            <div className="col-lg-1.5 text-center">
              <div className="site-logo">
                <a>
                  <Link
                    className="nav-link"
                    to="/asessments/explore"
                    style={{ fontSize: 25 }}
                  >
                    <ArrowLeftOutlined />
                  </Link>
                </a>
              </div>
              <div className="ml-auto toggle-button d-inline-block d-lg-none">
                <a
                  href="/#"
                  className="site-menu-toggle py-5 js-menu-toggle text-white"
                >
                  <span className="icon-menu h3 text-white"></span>
                </a>
              </div>
            </div>
          </div>
          <div>
            <b>
              <h3
                className="h3 text-white"
                style={{ paddingLeft: 35, paddingTop: 35, fontSize: 35 }}
              >
                {titulo}
              </h3>
            </b>
            <b>
              <h5
                className="h5 text-white"
                style={{ paddingLeft: 35, paddingTop: 35, fontSize: 18 }}
              >
                {"Facultad de Ingenieria y Arquitectura"}
              </h5>
            </b>
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
          <div class="site-mobile-menu-body"></div>
        </div>
      </div>
      <div
        className="ftco-cover-4 overlay"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div style={{ padding: 25 }} className="container">
        <Tabs defaultActiveKey="1" centered>
          <TabPane tab="Presentación" key="1" style={{fontSize:'18px'}}>
            La carrera de Ingeniería de Sistemas de la Facultad de Ingeniería y
            Arquitectura de la Universidad Peruana Unión, tiene como objetivo
            preparar profesionales con conocimientos científicos en concordancia
            con la filosofía de sistemas, y una habilidad creadora tal que le
            permita identificar problemas, planificar, proyectar, mantener,
            supervisar, administrar proyectos y formular soluciones integrales
            de sistemas organizacionales e informáticos, utilizando herramientas
            tales como el modelamiento de sistemas, diseño, re diseño de
            sistemas aplicados a los sistemas de producción y de servicios.
          </TabPane>
          <TabPane tab="Campo Laboral" key="2" style={{fontSize:'18px'}}>
            El profesional de Ingeniería de Sistemas graduado en la Universidad
            Peruana Unión se encuentra intelectual, actitudinal y
            profesionalmente habilitado para desempeñar los siguientes roles:
            Analista funcional, procesos (Estándares): Análisis de procesos,
            modelado de procesos, evaluación de procesos, simulación de
            procesos. En gestión de las tecnologías de información y
            comunicaciones (Estándares), tenemos los roles de:
            <Divider orientation="left"></Divider>
            <List
              bordered
              dataSource={data}
              renderItem={(item) => (
                <List.Item>
                  <Typography.Text ><CheckCircleFilled style={{ color: "#952F57" }}/></Typography.Text> {item}
                </List.Item>
              )}
            />
          </TabPane>
          <TabPane tab="Perfil Profesional" key="3" style={{fontSize:'18px'}}>
          El profesional de Ingeniería de Sistemas de la Universidad Peruana Unión, tiene como competencias generales:
          <Divider orientation="left"></Divider>
          <List
              bordered
              dataSource={data1}
              renderItem={(item) => (
                <List.Item>
                  <Typography.Text><CheckCircleFilled style={{ color: "#952F57" }}/></Typography.Text> {item}
                </List.Item>
              )}
            />
          </TabPane>
          <TabPane tab="Proyección Profesional" key="4">
            <Empty
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              style={{ color: "black" }}
            />
          </TabPane>
        </Tabs>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Career;
