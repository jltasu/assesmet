import React from 'react';
import { Layout, Tabs } from 'antd';
import ResumePage from "../../Asessments/resume";
import ImageHeader from '../imagenes/studying.jpg'
import Footer from "../../Components/footer"
import Ambiental from '../imagenes/ambiental.jpg';
import Civil from '../imagenes/civil.jpg';
import Sistemas from '../imagenes/sistemas.jpg';
import CardInfo from '../../Components/cardinfo';
import { Divider } from 'antd';

const { TabPane } = Tabs;

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
                        <CardInfo image={Sistemas} title={"Ingenieria de Sistemas"} description={"This is a test"} />
                        <CardInfo image={Civil} title={"Ingenieria Civil"} description={"This is a test"} />
                        <CardInfo image={Ambiental} title={"Ingenieria Ambiental"} description={"This is a test"} />
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