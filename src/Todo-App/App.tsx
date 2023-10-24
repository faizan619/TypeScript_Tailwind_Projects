import Navbar from "./components/Navbar"

function App() {
    return (
      <div className="min-h-[100vh] max-h-[100%] bg-blue-950 flex flex-col selection:text-blue-600 selection:underline items-center">
        <h1 className="text-white uppercase text-3xl mt-5 font-serif">Todo List</h1>
        <Navbar/>
      </div>
    )
  }
  
  export default App