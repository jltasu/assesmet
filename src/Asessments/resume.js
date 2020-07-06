import React from 'react'
import { Layout } from 'antd';
import HeaderAssesment from '../Components/headerAssesment';

const ResumePage = ({title, img}) => {
    return (
        <Layout className="layout">
            <HeaderAssesment title={title}></HeaderAssesment>
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
            <div className="ftco-cover-4 overlay" style={{backgroundImage: `url(${img})`}}></div>
        </Layout>
    )
}

export default ResumePage