import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler
} from "chart.js"

import { Line } from "react-chartjs-2"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler
)

const data = {
  labels: ["Mar 1","Mar 3","Mar 5","Mar 7","Mar 9","Mar 11","Mar 13"],
  datasets: [
    {
      label: "Sessions",
      data: [10000,30000,18000,29000,33000,24000,38000],
      fill: true
    }
  ]
}

function AreaChart(){
  return <Line data={data}/>
}

export default AreaChart