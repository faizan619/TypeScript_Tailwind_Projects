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
    <ul className='w-[60%] flex flex-col gap-y-3 my-5'>
        {
            filterData.map((todo) => {
                return <li key={todo.id} className='border bg-gray-200 px-5 p-2 flex rounded-lg '>
                    <div className='inline-block w-[100%]'>
                    <input type="checkbox" id={`todo-${todo.id}`} checked={todo.completed} onChange={()=> toggleTodoAsCompleted(todo.id)} />

                    <label className='text-blue-900 mx-2 capitalize' htmlFor={`todo-${todo.id}`}>{todo.task}</label>
                    </div>
                    {
                        todo.completed &&(
                            <button className='text-white ml-5 bg-red-500 px-2 rounded-sm' type="button" onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                        )
                    }
                </li>
            })
        }
    </ul>
  )
}

export default Todos