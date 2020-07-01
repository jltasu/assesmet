import React, { useState, useEffect } from "react";
import ImageHeader from "../Pages/imagenes/hero_1.jpg";
import { Radar } from "react-chartjs-2";

const Chart = () => {
  const [chartData, setChartData] = useState({});
  const chort = () => {
    setChartData({
      labels: ["lunes", "martes", "miercoles", "jueves", "sabado"],
      datasets: [
        {
          label: "level of the ticcness",
          data: [23, 34, 15, 56],
          backgroundColor: ["rgba(75,192,192,0.6)"],
          borderWidth: 4,
        },
      ],
    });
  };
  useEffect(() => {
    chort();
  }, []);
  return (
    <div styles= {Tex}> 
      <div>
        <Radar data={chartData} />
      </div>
      <div >
        <h2>
          <font styles="vertical-align: inherit;">
            <font styles="vertical-align: inherit;">
              Habilidades en las que puedes concentrarte
            </font>
          </font>
        </h2>
        <p>
          <img
            src="https://d5lqosquewn6c.cloudfront.net/static/reports/compiled/images/fake-text-short.svg"
            class="ReportPlaceholderCopy"
          />
        </p>
        <h2>
          <font styles="vertical-align: inherit;">
            <font styles="vertical-align: inherit;">
              Habilidades en las que puedes concentrarte
            </font>
          </font>
        </h2>
        <p>
          <img
            src="https://d5lqosquewn6c.cloudfront.net/static/reports/compiled/images/fake-text-short.svg"
            class="ReportPlaceholderCopy"
          />
        </p>
      </div>
    </div>
  );
};
export default Chart;
