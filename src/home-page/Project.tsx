interface ProjectProps {
  title:string;
  img:string;
  link:string;
}

function Project(props:ProjectProps) {
  return (
        <div className="border hover:scale-105 transition-all duration-500 hover:shadow-[] p-2 w-72 h-96 flex flex-col rounded-md ">
            <h1 className="font-serif text-xl tracking-wider mb-2">{props.title}</h1>
            <img src={props.img}  alt="image" className="h-[100%] rounded-lg mb-2 object-cover" />
            <a href={props.link}><button type="button" className="border-2 py-1 px-5 rounded-lg hover:bg-[#faae17] hover:text-[#1c1e29]">Preview</button></a>
        </div>
  )
}

export default Project