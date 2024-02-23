import { Chart } from "react-google-charts";
// import "@fontsource-variable/onest";

const columns = [
  { type: "string", label: "Task ID" },
  { type: "string", label: "Task Name" },
  { type: "string", label: "Resource" },
  { type: "date", label: "Start Date" },
  { type: "date", label: "End Date" },
  { type: "number", label: "Duration" },
  { type: "number", label: "Percent Complete" },
  { type: "string", label: "Dependencies" },
];

const rows = [
  [
    "capitulo1", // id
    "Problem Definition", // nombre // traducción Definición del problema
    null, // recurso
    new Date(2024, 0, 5), // fecha de inicio
    new Date(2024, 0, 19), // fecha de finalización
    null, // duración
    100, //porcentaje 1 a 100
    null, // dependencias
  ],
  [
    "capitulo2",
    "Reference Framework", // traducción Marco referencial
    "Capitulo 2",
    new Date(2024, 0, 19),
    new Date(2024, 0, 26),
    null,
    100,
    null,
  ],
  [
    "capitulo3",
    "Methodological and Administrative Framework", // traducción Marco metodológico y administrativo
    "Capitulo 3",
    new Date(2024, 0, 26),
    new Date(2024, 1, 2),
    null,
    100,
    null,
  ],
  [
    "capitulo4",
    "Data Collection and Analysis", // traducción Recopilación y análisis de datos
    "Capitulo 4",
    new Date(2024, 1, 2),
    new Date(2024, 1, 9),
    null,
    100,
    null,
  ],
  [
    "capitulo5",
    "Results and Conclusions", // traducción Resultados y conclusiones
    "Capitulo 5",
    new Date(2024, 1, 9),
    new Date(2024, 1, 16),
    null,
    100,
    null,
  ],
  [
    "capitulo6",
    "Research Presentation", // traducción Presentación de investigación
    "capitulo6",
    new Date(2024, 1, 16),
    new Date(2024, 1, 23),
    null,
    100,
    null,
  ],
];

export const data = [columns, ...rows];

export const options = {
  gantt: {
    trackHeight: 33, // altura de cada tarea
    innerGridTrack: { fill: "#1e2329" }, //
    barCornerRadius: 6, // curvatura de las esquinas de cada tarea
    barHeight: 20, // altura de cada tarea
    labelMaxWidth: 500, // ancho máximo de las etiquetas
    labelStyle: { fontName: "Onest Variable", fontSize: 14 }, // estilo de las etiquetas
  },
  backgroundColor: {
    fill: "#606060", // color de fondo
  },
};

export function Gantt() {
  return (
    <div className="w-full font-bold rounded-lg overflow-hidden">
      <Chart
        chartType="Gantt"
        width="100%"
        height="230px"
        data={data}
        options={options}
      />
    </div>
  );
}
