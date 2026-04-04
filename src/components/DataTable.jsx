import { useState } from "react"
import ru from "../assets/flags/ru.png"
import fr from "../assets/flags/fr.png"
import de from "../assets/flags/de.png"
import pt from "../assets/flags/pt.png"
import ca from "../assets/flags/ca.png"
import vn from "../assets/flags/vn.png"
import br from "../assets/flags/br.png"
import mex from "../assets/flags/mex.png"

const data = [
    { id: 1, country: "Russia", flag: ru, area: "17,075,200", population: "146,989,754" },
    { id: 2, country: "France", flag: fr, area: "640,679", population: "64,979,548" },
    { id: 3, country: "Germany", flag: de, area: "357,114", population: "82,114,224" },
    { id: 4, country: "Portugal", flag: pt, area: "92,090", population: "10,329,506" },

    { id: 5, country: "Canada", flag: ca, area: "9,984,670", population: "38,048,738" },
    { id: 6, country: "Vietnam", flag: vn, area: "331,212", population: "97,468,029" },
    { id: 7, country: "Brazil", flag: br, area: "8,515,767", population: "212,559,417" },
    { id: 8, country: "Mexico", flag: mex, area: "1,964,375", population: "128,932,753" }
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
    const totalPages = Math.ceil(filtered.length / itemsPerPage)

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
                {Array.from({ length: totalPages }, (_, i) => {
                    const page = i + 1

                    return (
                        <button
                            key={page}
                            className={page === currentPage ? "active" : ""}
                            onClick={() => setCurrentPage(page)}
                        >
                            {page}
                        </button>
                    )
                })}
            </div>

        </div>
    )
}

export default DataTable