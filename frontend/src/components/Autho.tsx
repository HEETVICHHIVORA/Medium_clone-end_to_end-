import { Link, useNavigate } from "react-router-dom"
import { Inputbox } from "./Inputbox"
import { useState } from "react"
import {Signupend} from "@heetcodes/medium-common2"
import { BACKEND_URL } from "../config"
import axios from 'axios'
export const Autho = ({type} :{type:"signup " |"signin"})=>{
    const navigate = useNavigate();
    const [postinputs,setpostinputs] = useState<Signupend>({
         name:"",
        username:"",
        password:"",
       
    })
    async function   sendreq(){
    try{
        const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signin"?"signin":"signup"}`,
             postinputs
        )
        const jwt = response.data;
        console.log(jwt);
        localStorage.setItem("token",jwt)
        navigate("/blogs")
    }
    catch{
        alert("hey there wrong inputs!!!!")         
    }
    }
    console.log(postinputs)
    return <div className="h-screen flex justify-center flex-col">
          <div className="flex justify-center">
        <div className="bg-slate-200 p-10 w-2/5 rounded-lg" >
            <div className="text-3xl font-extrabold flex justify-center mb-5">
            {type=== "signin"? "Login":"Create an account"} 
            </div>
            <div className="text-slate-400">

                {type=== "signin"? "Don't have an account ":"Already have an account?"} 
                <Link className="underline pl-2 " to={type=== "signin"?"/signup":"/signin"}>
                {type=== "signin" ?"Sign up":"Login"}
                </Link>
            </div>
            <Inputbox label={"Name"} placeholder={"Enter your name"} onchange={(e)=>{
                setpostinputs({
                    ...postinputs,
                    name:e.target.value
                })
            }}></Inputbox>
            <Inputbox label={"Username"} placeholder={"Enter your username"} onchange={(e)=>{
                setpostinputs({
                    ...postinputs,
                    username:e.target.value
                })
            }}></Inputbox>
            <Inputbox label={"password"} type="password" placeholder={"password"} onchange={(e)=>{
                setpostinputs({
                    ...postinputs,
                    password:e.target.value
                })
            }}></Inputbox>
            <div className="flex justify-center">
            <button onClick={sendreq} type="button" className=" w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-6 ">
             {type ==="signin"?"Login":"Sign up"}
            </button>
            </div>
            

        </div>
      </div>
    </div>
}