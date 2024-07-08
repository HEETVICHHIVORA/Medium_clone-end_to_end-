import { useEffect, useState } from "react";
import axios from "axios"
import { BACKEND_URL } from "../config";
export interface Blog{
  "content":string;
  "title":string;
  "id":string;
  "author":{
    "name":string
  }
}
export const useBlog=(({id}:{id:string})=>{
    const [loading,setLoading]= useState(true);
    const [blog,setblog]=useState<Blog>()  
useEffect(() => {
 async function fetchBlogs() {
  
   try {
     const response = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
       headers:{
           Authorization:localStorage.getItem("token")
       }
      
     });
   
     if (response.status !== 200) {
       throw new Error(`Error fetching blogs: ${response.status}`);
     }

     const data = response.data;
     console.log(data)
     setblog(data.blog);
     
   } catch (error) {
     console.error("Error fetching blogs:", error);
   } finally {
     setLoading(false);
   }
 }

 fetchBlogs(); // Call the function inside useEffect
}, [id]);

     
    return{
       loading,
       blog
    }
})
export const useBlogs=()=>{
     const [loading,setLoading]= useState(true);
     const [blogs,setblogs]=useState<Blog[]>([])
     
    
useEffect(() => {
  async function fetchBlogs() {
   
    try {
      const response = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
        headers:{
            Authorization:localStorage.getItem("token")
        }
      });

      if (response.status !== 200) {
        throw new Error(`Error fetching blogs: ${response.status}`);
      }

      const data = response.data;
      setblogs(data.blogs);
       console.log(setblogs)
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  }

  fetchBlogs(); // Call the function inside useEffect
}, []);

      
     return{
        loading,
        blogs
     }

}