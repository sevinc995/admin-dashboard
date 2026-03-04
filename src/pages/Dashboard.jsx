function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

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
    </div>
  )
}

export default Dashboard