import { useSearchParams } from 'react-router-dom'
import { useTodos } from '../store/todos'
import toast from 'react-hot-toast';
import { useEffect,useState } from 'react';


function Todos() {

    const {todos,toggleTodoAsCompleted,handleDeleteTodo} = useTodos();
    const [filterData, setFilterData] = useState(todos);
    const [searchParams] = useSearchParams();
    let todosData = searchParams.get("todos");

    useEffect(() => {
        if (todosData === "active") {
            setFilterData(todos.filter((task) => !task.completed));
                toast.success("Active Task Filtered")
        } else if (todosData === "completed") {
            setFilterData(todos.filter((task) => task.completed));
            toast.success("Complete Task Filtered")
        } else {
            setFilterData(todos);
            toast.success("Task Filtered")
        }
    }, [todos, todosData]);

    // let filterData = todos;

    // if(todosData === "active"){
    //     filterData = todos.filter((task)=> task.completed===false);
    // }
    // else if(todosData === "completed"){
    //     filterData = todos.filter((task)=> task.completed===true);
    //     toast.success("Complete Task Filtered")
    // }


  return (
    <ul className='w-[95%] flex flex-col gap-y-3 my-5 sm:w-[70%] lg:w-[60%]'>
        {
            filterData.map((todo) => {
                return <li key={todo.id} className='border-1 h-12 bg-gray-200 px-2 p-1 flex rounded-lg '>
                    <div className='flex items-center w-[100%]'>
                    <input type="checkbox" id={`todo-${todo.id}`} checked={todo.completed} onChange={()=> toggleTodoAsCompleted(todo.id)} />

                    <label className='text-blue-900 mx-1 capitalize text-sm' htmlFor={`todo-${todo.id}`}>{todo.task}</label>
                    </div>
                    {
                        todo.completed &&(
                            <button className='text-white ml-3 bg-red-500 text-sm px-1 rounded-sm hover:bg-red-800' type="button" onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                        )
                    }
                </li>
            })
        }
    </ul>
  )
}

export default Todos