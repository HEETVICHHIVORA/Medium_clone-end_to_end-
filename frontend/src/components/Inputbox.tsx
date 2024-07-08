interface labelinput {
    label:string,
    placeholder:string,
    onchange:(e:any)=> void;
    type?:string;
}
export const  Inputbox =({label,placeholder,onchange,type}:labelinput)=>{
       return <div>
       <label  className="mb-2 text-sm font-medium pb-3">{label}</label>
       <input onChange={onchange} type={type||"text"} id="first_name" className=" mt-3 mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required />
       </div>
}