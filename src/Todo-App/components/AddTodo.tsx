import { useState } from "react"
import { useTodos } from "../store/todos"

function AddTodo() {

    const [todo,setTodo] = useState("")
    const {handleAddToDo} = useTodos();

    const handleFormSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleAddToDo(todo);
        setTodo("")
    }


  return (
    <form className="mt-2 p-2 w-[70%] gap-5 flex flex-row" onSubmit={handleFormSubmit}>
         <input className="w-[100%] px-2 capitalize" type="text" value={todo} onChange={(e) => setTodo(e.target.value)} autoFocus placeholder="Enter your Task" />
         <button className="border px-4 uppercase text-purple-700 bg-white rounded-sm" type="submit">Add</button>
    </form>
  )
}

export default AddTodo