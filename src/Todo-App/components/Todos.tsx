import { useSearchParams } from 'react-router-dom'
import { useTodos } from '../store/todos'

function Todos() {

    const {todos,toggleTodoAsCompleted,handleDeleteTodo} = useTodos();

    const [searchParams] = useSearchParams();
    let todosData = searchParams.get("todos");

    let filterData = todos;

    if(todosData === "active"){
        filterData = todos.filter((task)=> task.completed===false);
    }
    else if(todosData === "completed"){
        filterData = todos.filter((task)=> task.completed===true);
    }

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