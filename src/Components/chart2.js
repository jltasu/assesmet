import React from "react";
import { FacebookOutlined, TwitterOutlined} from '@ant-design/icons';
import { Card, Col, Row } from "antd";

const Chart2 = () => {
  return (
    <div className="container">
      <div className="row justify-content-center text-center mb-5">
        <h3 className="mb-4 primary">Luis, conocete un poco más.</h3>
      </div>
      <div className="site-card-border-less-wrapper">
        <Row gutter={16}>
          <Col span={8}>
            <Card
              actions={[
                <FacebookOutlined />,
                <TwitterOutlined />
              ]} 
              title="Tus Intereses" 
              bordered={false}>
              <b>Practico y realista. Decisivo, actuas con rapidez
              para poner en practica las determinaciones. <b>Eres
              el que organiza proyectos y personas </b> para hacer las cosas,
              te centras en la obtención de resultados de la manera mas 
              eficiente posible. Muy cuidadoso en las rutinas de la rutina diaria</b>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              actions={[
                <FacebookOutlined />,
                <TwitterOutlined />
              ]} 
              title="Tus habilidades" 
              bordered={false}>
              <b><b>Emprendedor</b>. Te gustan los riesgos y eres perseverante.
              Valoras el poder y tienes habilidades para convencer a 
              otros. Extrovertido, lider nato y con buenas relaciones
              interpersonales. Buscas situaciones sociales que te permitan
              satisfacer las necesidades del dominio.</b>
        </Card>
          </Col>
          <Col span={8}>
            <Card
              actions={[
                <FacebookOutlined />,
                <TwitterOutlined />
              ]} 
              title="Tu personalidad" 
              bordered={false}>
              <b><b>Posees la capacidad de expresarte correctamente con cierta facilidad
              y espontainedad </b>, para producir, expresar y relacionar palabras
              y para conocer el significado de las palabras. Por esto seguramente
              seas capaz de desempeñarte exitosamente en tareas ligadas al liderazgo y 
              manejo de masas.</b>
        </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
};
export default Chart2;
