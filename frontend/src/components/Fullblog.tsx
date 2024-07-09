import { Appbar } from "./Appbar"
import { Blog } from "../hooks"
const today = new Date();
const formattedDate = today.toLocaleDateString('en-GB', { // Specify 'en-GB' locale for dd/mm/yyyy
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
});
export const Fullblog =({blog}:{blog:Blog})=>{
    
    return  <div>
        <Appbar></Appbar>
        <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full max-w-screen-2xl">
        <div className="col-span-8">
           <div className="pt-10 pl-2 text-5xl font-extrabold ">
            {blog.title}
           </div>
        <div className="p-2 text-slate-500 capitalize">
           Posted on {formattedDate}
        </div>
        <div className="font-medium pl-2">
            {blog.content}
        </div>
        </div>
        <div className="pt-10 col-span-4 pl-4 text-2xl capitalize">
           <div className="font-bold text-slate-600">Author</div>
            <div>
              {blog.author.name}
            </div>
            
        </div>
    </div></div>
        
    </div> 
}