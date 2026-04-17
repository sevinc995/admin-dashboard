import { color } from "chart.js/helpers"
import AreaChart from "../components/AreaChart"
import BarChart from "../components/BarChart"
import DataTable from "../components/DataTable"

<DataTable />


function Dashboard() {
  return (
    <div className="dashboard">

      <h1>Dashboard</h1>

      {/* Cards */}
      <div className="cards">

        <div className="card primary">
          <p>Primary Card</p>
          <span>View Details</span>
        </div>

        <div className="card warning">
          <p>Warning Card</p>
          <span>View Details</span>
        </div>

        <div className="card success">
          <p>Success Card</p>
          <span>View Details</span>
        </div>

        <div className="card danger">
          <p>Danger Card</p>
          <span>View Details</span>
        </div>

      </div>

      {/* Charts */}
      <div className="charts">

        <div className="chart-box">
          <h3>Area Chart Example</h3>
          <AreaChart />
        </div>

        <div className="chart-box">
          <h3>Bar Chart Example</h3>
          <BarChart />
        </div>

      </div>

      {}
      <DataTable />

    </div>
  )
}

export default Dashboard