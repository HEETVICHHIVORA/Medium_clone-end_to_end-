import { Appbar } from "../components/Appbar"
import {Blogcard} from "../components/Blogcard"
import { useBlogs } from "../hooks"
export const Blogs =()=>{
     const {loading,blogs} = useBlogs();
    
     if(loading){
        return <div>
            Loading!!!...
        </div>
     }
     console.log(loading)
    return <div>
        <div>
        <Appbar></Appbar>
        </div>
        
         <div className="flex justify-center">
        
        <div className=" max-w-xl">
         {blogs.map(blog=>  <Blogcard 
        id={blog.id}
        title={blog.author.name}
        authorname={blog.author.name||""}
        content={blog.content}
        publishdate="17 July,2024"
        ></Blogcard>)
    }
       
        
    </div>
    </div>
    </div> 
    
    
}