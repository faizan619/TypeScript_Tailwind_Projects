import { useState } from "react"
import { useTodos } from "../store/todos"
import '../style/index.css'

function AddTodo() {

    const [todo,setTodo] = useState("")
    const {handleAddToDo} = useTodos();

    const handleFormSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (todo.trim() !== "") {
          handleAddToDo(todo);
          setTodo("");
      }
    }

  return (
    <form className="sm:w-[70%] lg:w-[65%] mt-2 p-2 w-[95%] gap-2 flex flex-row" onSubmit={handleFormSubmit}>
         <input className="w-[100%] placeholder:text-sm px-2 capitalize h-8 rounded-sm" type="text" value={todo} onChange={(e) => setTodo(e.target.value)} autoFocus placeholder="Task.." />
         <button className="border px-2 text-sm uppercase text-purple-700 bg-white rounded-sm" type="submit">Add</button>
    </form>
  )
}

export default AddTodo