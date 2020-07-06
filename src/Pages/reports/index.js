import React from "react";
import Chart from "../../Components/chart";
import Footer from "../../Components/footer"
import { Layout, Tabs } from 'antd';
import ResumePage from "../../Asessments/resume";
import ImageHeader from '../imagenes/bannerimages.jpg'
const { TabPane } = Tabs;


const Reportes = () => {

    return (
        <div>
            <Layout>
                <ResumePage title={'Mis Reportes Personalizados'} img={ImageHeader}/>
            </Layout>
            <div className="container">
                <Tabs defaultActiveKey="1" centered size={'large'}>
                    <TabPane tab="Resumen" key="1">
                        <Chart></Chart>
                    </TabPane>
                    <TabPane tab="Intereses" key="2">
                        Content of Tab Pane 2
                    </TabPane>
                    <TabPane tab="Habilidades" key="3">
                        Content of Tab Pane 3
                    </TabPane>
                    <TabPane tab="Personalidad" key="4">
                        Content of Tab Pane 4
                    </TabPane>
                </Tabs>
            </div>
            <Footer></Footer>
        </div>
    )

}
export default Reportes;