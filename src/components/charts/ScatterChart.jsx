import { Scatter } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useState } from "react";
import { ScatterData } from "../../mocks/data";

function ScatterChart({ tailwindStyles }) {
  const [scatterData, setScatterData] = useState({
    labels: ScatterData.map((data) => data.x),
    datasets: [
      {
        label: "Users Gained",
        data: ScatterData.map((data) => data.y),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className={`w-full ${tailwindStyles}`}>
      <Scatter data={scatterData} />
    </div>
  );
}

export default ScatterChart;
