// import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="flex justify-evenly p-2 w-[100%] ">
        {/* <Link to="/" >All</Link>
        <Link to="/?todos=active">Active</Link>
        <Link to="/?todos=completed">Active</Link> */}
        {/* <Link></Link> */}
        <p className="text-purple-300 text-xl hover:text-white hover:underline"><a href="/">All</a></p>
        <p className="text-purple-300 text-xl hover:text-white hover:underline"><a href="/?todos=active">Active</a></p>
        <p className="text-purple-300 text-xl hover:text-white hover:underline"><a href="/?todos=completed">Completed</a></p>
    </nav>
  )
}

export default Navbar