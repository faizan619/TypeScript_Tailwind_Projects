import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="flex justify-evenly p-2 w-[100%] ">
        <p className="text-purple-300 text-sm hover:text-white hover:underline"><Link to="/todo">All</Link></p>
        <p className="text-purple-300 text-sm hover:text-white hover:underline"><Link to="/todo?todos=active">Active</Link></p>
        <p className="text-purple-300 text-sm hover:text-white hover:underline"><Link to="/todo?todos=completed">Completed</Link></p>
    </nav>
  )
}

export default Navbar