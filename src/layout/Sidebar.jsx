function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        Start Bootstrap
      </div>

      <div className="sidebar-section">
        <p className="section-title">CORE</p>
        <a className="nav-item active">Dashboard</a>
      </div>

      <div className="sidebar-section">
        <p className="section-title">INTERFACE</p>
        <a className="nav-item">Layouts</a>
        <a className="nav-item">Pages</a>
      </div>

      <div className="sidebar-section">
        <p className="section-title">ADDONS</p>
        <a className="nav-item">Charts</a>
        <a className="nav-item">Tables</a>
      </div>
    </div>
  )
}

export default Sidebar