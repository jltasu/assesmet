import React from 'react';
import { Layout, Tabs } from 'antd';
import ResumePage from "../../Asessments/resume";
import ImageHeader from '../imagenes/studying.jpg'
import Footer from "../../Components/footer"
import CardInfo from '../../Components/cardinfo';
import { Divider } from 'antd';

const { TabPane } = Tabs;

const data = [
    {
        image: 'ingenieria-de-sistemas',
        title:'Ingenieria de Sistemas',
        info:'La carrera de Ingeniería de servicios.',
        description:'hola mundo'
    },
    {
        image:'ingenieria-ambiental',
        title:'Ingenieria Ambiental',
        description:'asdasd',
        info:'La carrera de Ingeniería de Sistemas de la Facultad de Ingeniería y Arquitectura de la Universidad Peruana Unión, tiene como objetivo preparar profesionales con conocimientos científicos en concordancia con la filosofía de sistemas, y una habilidad creadora tal que le permita identificar problemas, planificar, proyectar, mantener, supervisar, administrar proyectos y formular soluciones integrales de sistemas organizacionales e informáticos, utilizando herramientas tales como el modelamiento de sistemas, diseño, re diseño de sistemas aplicados a los sistemas de producción y de servicios.',
    },
    {
        image:'ingenieria-civil',
        title:'Ingenieria Civil',
        description:'asdasd',
        info:'ingenieria civil',
    }
]
const Explorer = () => {
    return (
        <div>
            <Layout>
                <ResumePage title={'Explora otros horizontes'} img={ImageHeader} />
            </Layout>
            <div className="container" style={{ paddingTop: 25, paddingBottom: 30 }}>
            <Tabs defaultActiveKey="1" tabPosition={"left"} style={{ height: 320 }}>
                <TabPane tab={`Ingenieria`} key={1}>
                    <h3>Facultad de Ingenieria y Arquitectura</h3>
                    <Divider />
                    <div className="row no-gutters list-grouped" style={{ paddingBottom: 16 }}>
                        {data.map((carrera) =>(
                            <CardInfo image={carrera.image} title={carrera.title} description={carrera.description} info={carrera.info}/>
                            ))}
                         
                    </div>
                </TabPane>
                <TabPane tab={`Ciencias de la Salud`} key={2}>
                    <h3>Facultad de Ciencias de la Salud</h3>
                    <Divider />
                </TabPane>
                <TabPane tab={`Ciencias Empresariales`} key={3}>
                <h3>Facultad de Ciencias Empresariales</h3>
                    <Divider />
                </TabPane>
                <TabPane tab={`Ciencias Humanas y Educación`} key={4}>
                <h3>Facultad de Ciencias Humanas y Educación</h3>
                    <Divider />
                </TabPane>
                <TabPane tab={`Teologia`} key={5}>
                <h3>Facultad de Teologia</h3>
                    <Divider />
                </TabPane>
            </Tabs>
            </div>
            <Footer />
        </div>
    )
}

export default Explorer;