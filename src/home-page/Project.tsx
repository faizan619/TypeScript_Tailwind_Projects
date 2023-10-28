

function Project() {
  return (
        <div className="border p-2 flex flex-col  ">
            <h1 className="font-serif text-xl tracking-wider mb-2">Project Title</h1>
            <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--51RtiLTV--/c_imagga_scale,f_auto,fl_progressive,h_1080,q_auto,w_1080/https://dev-to-uploads.s3.amazonaws.com/i/in7r7auvg6xujj5fm1gm.png" alt="image" className="h-32 mb-2 object-cover border " />
            <button type="button" className="border py-1 px-5 hover:bg-gray-900 rounded-lg">Preview</button>
        </div>
  )
}

export default Project