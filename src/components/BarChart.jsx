import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement
} from "chart.js"

import { Bar } from "react-chartjs-2"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement
)

const data = {
  labels:["January","February","March","April","May","June"],
  datasets:[
    {
      label:"Revenue",
      data:[4000,5200,6200,7800,9800,15000]
    }
  ]
}

function BarChart(){
  return <Bar data={data}/>
}

export default BarChart