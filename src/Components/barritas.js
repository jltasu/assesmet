import React, { useState, useEffect } from "react";

import { Line } from "react-chartjs-2";
const Barritas = () => {
  const [chartData, setChartData] = useState({});
  const chort = () => {
    setChartData({
      labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo"],
      datasets: [
        {
          label: "level of the ticcness",
          data: [50, 34, 86, 95],
          backgroundColor: ["rgb(191, 238, 119)"],
          borderWidth: 4,
        },
      ],
    });
  };
  useEffect(() => {
    chort();
  }, []);
  return (
    <div style={{ padding: "2rem" }}>
      <div>
        <h2>
          <font styles="vertical-align: inherit;">
            <font styles="vertical-align: inherit;">
              Habilidades en las que puedes concentrarte
            </font>
          </font>
        </h2>
        <div>
          <Line data={chartData} />
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
export default Barritas;
