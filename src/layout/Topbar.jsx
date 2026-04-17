function Topbar() {
  return (
    <div className="topbar">
      <input placeholder="Search for..." />
      <span 
                        style={{
                            position: "absolute",
                            right: "25px",
                            top: "5px",
                        }}
                    >
                        🔍
                    </span>
    </div>
  )
}

export default Topbar