import { BrowserRouter } from "react-router-dom"
import AddTodo from "./components/AddTodo"
import Navbar from "./components/Navbar"
import Todos from "./components/Todos"
import { TodosProvider } from "./store/todos"

function App() {
    return (
        <BrowserRouter>
        <TodosProvider>
            <div className="min-h-[100vh] max-h-[100%] bg-blue-950 flex flex-col selection:text-blue-600 selection:underline items-center">
                <h1 className="text-white uppercase text-xl mt-5 font-serif">Todo List</h1>
                <Navbar/>
                <AddTodo/>
                <Todos/>
            </div>
        </TodosProvider>
        </BrowserRouter>
    )
  }
  
  export default App