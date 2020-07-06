import React from 'react';
import { Layout, Tabs } from 'antd';
import ResumePage from "../../Asessments/resume";
import ImageHeader from '../imagenes/patient.jpg'
import Footer from "../../Components/footer"

const Contactar = () => {
    return (
        <div>
            <Layout>
                <ResumePage title={'Consulta con los expertos'} img={ImageHeader} />
            </Layout>
            <div className="container">

            </div>
            <Footer />
        </div>
    )
}

export default Contactar;