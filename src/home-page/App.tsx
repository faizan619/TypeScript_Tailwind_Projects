import Project from "./Project"

function App() {
  return (
    <div className="bg-[#1c1e29] flex flex-col items-center min-h-[100vh] max-h-[100%] text-[#faae17] p-2">
      <div className="h-32 flex justify-center items-center w-[100%] font-serif border text-center text-2xl">Projects made with Typescript and Tailwindcss</div>
      <div className="project_content mt-5 w-3/4 text-center uppercase">
        <p>Here are some of my projects.</p>
      <div className=" flex gap-y-10 gap-x-4 flex-wrap p-2 py-5 justify-around">
        <Project 
          title="Todo App" 
          img="https://github.com/faizan619/TypeScript_Tailwind_Projects/blob/main/src/assets/todo.PNG?raw=true"
          link="/todo"
        />
        <Project
        title="popover steps"
        link="/driver"
        />
      </div>
      </div>
    </div>
  )
}
export default App