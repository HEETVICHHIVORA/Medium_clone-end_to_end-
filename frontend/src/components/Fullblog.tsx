import { Appbar } from "./Appbar"
import { Blog } from "../hooks"
export const Fullblog =({blog}:{blog:Blog})=>{
    
    return  <div>
        <Appbar></Appbar>
        <div className="grid grid-cols-12 px-10 w-full">
        <div className="col-span-8">
           <div className="text-3xl font-extrabold ">{blog.title}</div>
        </div>
        <div className="">
            {blog.id}
        </div>
        <div className="col-span-4">
      
        </div>
    </div>
    </div> 
}