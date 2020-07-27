import React from "react";
import Chart from "../../Components/chart";
import Footer from "../../Components/footer"
import { Layout, Tabs, Skeleton } from 'antd';
import ResumePage from "../../Asessments/resume";
import ImageHeader from '../imagenes/bannerimages.jpg'
import Chart2 from "../../Components/chart2";
import Barritas from "../../Components/barritas";
import Bubble from "../../Components/bubble";
const { TabPane } = Tabs;


const Reportes = () => {

    return (
        <div>
            <Layout>
                <ResumePage title={'Mis Reportes Personalizados'} img={ImageHeader}/>
            </Layout>
            <div className="container" style={{paddingBottom: 12}}>
                <Tabs defaultActiveKey="1" centered size={'large'}>
                    <TabPane tab="Resumen" key="1">
                        <Skeleton active />
                    </TabPane>
                    <TabPane tab="Intereses" key="2">
                    <Barritas></Barritas>
                    </TabPane>
                    <TabPane tab="Habilidades" key="3">
                        
                        <Chart2></Chart2>
                    </TabPane>
                    <TabPane tab="Personalidad" key="4">
                        <Bubble></Bubble>
                    </TabPane>
                </Tabs>
            </div>
            <Footer></Footer>
        </div>
    )

}
export default Reportes;