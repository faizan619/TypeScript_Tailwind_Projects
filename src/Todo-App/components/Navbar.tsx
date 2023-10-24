import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="flex justify-evenly p-2 w-[100%] ">
        <p className="text-purple-300 text-xl hover:text-white hover:underline"><Link to="/">All</Link></p>
        <p className="text-purple-300 text-xl hover:text-white hover:underline"><Link to="/?todos=active">Active</Link></p>
        <p className="text-purple-300 text-xl hover:text-white hover:underline"><Link to="/?todos=completed">Completed</Link></p>
    </nav>
  )
}

export default Navbar