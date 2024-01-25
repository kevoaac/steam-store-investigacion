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
    "Definición del problema", // nombre
    null, // recurso
    new Date(2024, 1, 5), // fecha de inicio
    new Date(2024, 1, 19), // fecha de finalización
    null, // duración
    100, //porcentaje 1 a 100
    null, // dependencias
  ],
  [
    "capitulo2",
    "Tema2",
    "Capitulo 2",
    new Date(2024, 1, 19),
    new Date(2024, 2, 10),
    null,
    100,
    null,
  ],
  [
    "capitulo3",
    "Tema3",
    "Capitulo 3",
    new Date(2024, 2, 10),
    new Date(2024, 2, 20),
    null,
    100,
    null,
  ],
  [
    "capitulo4",
    "Tema4",
    "Capitulo 4",
    new Date(2024, 2, 20),
    new Date(2024, 2, 30),
    null,
    100,
    null,
  ],
  [
    "capitulo5",
    "Tema5",
    "Capitulo 5",
    new Date(2024, 2, 30),
    new Date(2024, 3, 1),
    null,
    100,
    null,
  ],
];

export const data = [columns, ...rows];

export const options = {
  gantt: {
    trackHeight: 33, // altura de cada tarea
    innerGridTrack: { fill: "#242424" }, //
    barCornerRadius: 6, // curvatura de las esquinas de cada tarea
    barHeight: 20, // altura de cada tarea
    labelMaxWidth: 500, // ancho máximo de las etiquetas
    labelStyle: { fontName: "Onest Variable", fontSize: 14 }, // estilo de las etiquetas
  },
  backgroundColor: {
    fill: "606060", // color de fondo
  },
};

export function Gantt() {
  return (
    <div className="w-full font-bold rounded-lg overflow-hidden">
      <Chart
        chartType="Gantt"
        width="100%"
        height="100%"
        data={data}
        options={options}
      />
    </div>
  );
}
