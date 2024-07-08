import { Autho } from "../components/Autho"
import { Quote } from "../components/Quote"

export const Signin =()=>{
    return <div className="grid grid-cols-1  lg:grid-cols-2">
        <div>
        <Autho type="signin"></Autho>
        </div>
       
        <div className="hidden lg:block">
        <Quote></Quote>
        </div>
        
    </div>
}