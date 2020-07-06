import React, { useState, useEffect } from "react";

import { Pie } from "react-chartjs-2";

const Bubble = () => {
  const [chartData, setChartData] = useState({});
  const chort = () => {
    setChartData({
      labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo"],
      datasets: [
        {
          label: "level of the ticcness",
          data: [50, 34, 86, 95],
          backgroundColor: ["rgb(250, 235, 215)","rgb(255, 228, 196)","rgb(240, 255, 255)","rgb(127, 255, 212)"],
          borderWidth: 4,
        },
      ],
    });
  };
  useEffect(() => {
    chort();
  }, []);
  return (
    <div style={{padding: '2rem'}}> 
      <div >
        <h2>
          <font styles="vertical-align: inherit;">
            <font styles="vertical-align: inherit;">
              Habilidades en las que puedes concentrarte
            </font>
          </font>
        </h2>
        <div>
        <Pie data={chartData} />
      </div>
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
            className="ReportPlaceholderCopy"
          />
        </p>
      </div>
    </div>
  );
};
export default Bubble;
