import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useState } from "react";

function BarChart({ tailwindStyles }) {
  const contarAceptacion = (data) => {
    let positivos = 0;
    let negativos = 0;
    data.forEach((game) => {
      // Verificar el valor de 'aceptacion'
      if (game.aceptacion === "Si") {
        positivos++;
      } else if (game.aceptacion === "No") {
        negativos++;
      }
    });
    return [positivos, negativos];
  };

  const [SteamData, setSteamData] = useState({
    labels: [
      "Videogames with negative acceptance",
      "Videogames with negative acceptance",
    ],
    datasets: [
      {
        label: "Videogame acceptance",
        data: [21682, 5393], //contarAceptacion(steamData), //21682 5393
        backgroundColor: [
          "#22cfcf",
          "#2a71d0",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
        // bar width
        barPercentage: 0.4,
      },
    ],
  });

  return (
    <div className={`w-full ${tailwindStyles}`}>
      <Bar data={SteamData} />
    </div>
  );
}

export default BarChart;
