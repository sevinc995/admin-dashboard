import { useState } from "react"
import ru from "../assets/flags/ru.png"
import fr from "../assets/flags/fr.png"
import de from "../assets/flags/de.png"
import pt from "../assets/flags/pt.png"

const data = [
    { id: 1, country: "Russia", flag: ru, area: "17,075,200", population: "146,989,754" },
    { id: 2, country: "France", flag: fr, area: "640,679", population: "64,979,548" },
    { id: 3, country: "Germany", flag: de, area: "357,114", population: "82,114,224" },
    { id: 4, country: "Portugal", flag: pt, area: "92,090", population: "10,329,506" }
]

function DataTable() {
    const [search, setSearch] = useState("")
    const [currentPage, setCurrentPage] = useState(1)

    const itemsPerPage = 4

    const filtered = data.filter(item =>
        item.country.toLowerCase().includes(search.toLowerCase())
    )

    const start = (currentPage - 1) * itemsPerPage
    const paginated = filtered.slice(start, start + itemsPerPage)

    return (
        <div className="table-box">

            <div className="table-header">
                <h3>DataTable Example</h3>
            </div>

            <div className="table-search">
                <span>Full text search:</span>
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Country</th>
                        <th>Area</th>
                        <th>Population</th>
                    </tr>
                </thead>

                <tbody>
                    {paginated.map(row => (
                        <tr key={row.id}>
                            <td>{row.id}</td>

                            <td className="country-cell">
                                <img src={row.flag} alt="" />
                                {row.country}
                            </td>

                            <td>{row.area}</td>
                            <td>{row.population}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="pagination">
                {[1].map(page => (
                    <button
                        key={page}
                        className={page === currentPage ? "active" : ""}
                        onClick={() => setCurrentPage(page)}
                    >
                        {page}
                    </button>
                ))}
            </div>

        </div>
    )
}

export default DataTable