import React from 'react';
import { Layout, Tabs } from 'antd';
import ResumePage from "../../Asessments/resume";
import ImageHeader from '../imagenes/studying.jpg'
import Footer from "../../Components/footer"

const Explorer = () => {
    return (
        <div>
            <Layout>
                <ResumePage title={'Explora otros horizontes'} img={ImageHeader} />
            </Layout>
            <div className="container">

            </div>
            <Footer />
        </div>
    )
}

export default Explorer;