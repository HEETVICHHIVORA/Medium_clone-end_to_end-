import { useParams } from "react-router-dom";
import { Fullblog } from "../components/Fullblog"
import { useBlog } from "../hooks"

export const Blog =()=>{
    const {id}= useParams();
    const {loading,blog}= useBlog({
        id:id||""
    });
   
    if(loading){
        return <div>
            loading////
        </div>
    }
    
    return <div>
        <Fullblog blog={blog}></Fullblog>
    </div>
}