import React from 'react'
import { Layout } from 'antd';
import ImageHeader from '../Pages/imagenes/hero_1.jpg'
import HeaderAssesment from '../Components/headerAssesment';

const ResumePage = () => {
    return (
        <Layout className="layout">
            <HeaderAssesment></HeaderAssesment>
            <div class="site-wrap" id="home-section">
                <div class="site-mobile-menu site-navbar-target">
                    <div class="site-mobile-menu-header">
                        <div class="site-mobile-menu-close mt-3">
                            <span class="icon-close2 js-menu-toggle"></span>
                        </div>
                    </div>
                    <div class="site-mobile-menu-body" ></div>
                </div>
            </div>
            <div style={{height: 280, backgroundColor:'red', backgroundImage: `url(${ImageHeader})`}}></div>
        </Layout>
    )
}

export default ResumePage