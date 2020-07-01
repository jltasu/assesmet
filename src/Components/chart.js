import React, { useState, useEffect } from 'react';
import ImageHeader from '../Pages/imagenes/hero_1.jpg'
import {Radar} from 'react-chartjs-2'

const Chart = () => {
   
       const [chartData, setChartData] = useState({})
        const chort = () => {
            setChartData({
            labels: ['lunes', 'martes','miercoles', 'jueves','sabado'],
            datasets: [
                {
                    label:'level of the ticcness',
                    data: [23,34,15,56],
                    backgroundColor:[
                        'rgba(75,192,192,0.6)'
                    ],
                    borderWidth:4
                },
            
            ]
            })
        }  
        useEffect(() => {
            chort()
        },[]) 
    return(
        <div>
            <div class="ftco-blocks-cover-1">
                    {/* <div class="ftco-cover-1 overlay" style="background-image: url('images/hero_1.jpg')"> */}
                    <div className="ftco-cover-1 overlay" style={{ backgroundImage: `url(${ImageHeader})` }}>
                        <div class="container">
                            <div class="row align-items-center justify-content-center">
                                <div class="col-lg-6 text-center">
                                    <h1>Contact Us</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                
                <Radar data={chartData}/>
                
        </div>
        
    )
}
export default Chart;