import { Link } from "react-router-dom";

// Interface for Blogcard inputs
interface BlogcardInputs {
    authorname: string;
    title: string;
    content: string;
    publishdate: string;
    id:string
  }
  
  // Blogcard component
  export const Blogcard = ({
    authorname,
    title,
    content,
    publishdate,
    id
  }: BlogcardInputs) => {
    return (
        <Link to={`/blog/${id}`}>
        <div className="border-b-2 bolder-slate-300 pb-4 p-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex ">
          <Avatar size="small" name={authorname} />
          <div className="font-extralight pl-2 text-sm flex justify-center flex-col">
            {authorname}
          </div>
          <div className="font-thin pl-2 text-sm flex justify-center flex-col">
            - {publishdate}
          </div>
        </div>
  
        <div className="text-xl font-semibold pt-2">{title}</div>
        <div className="text-md font-thin">{content.slice(0, 100)} ...</div>
        <div className="text-slate-400 text-sm font-thin">
          {`${Math.ceil(content.length / 100)} minutes`}
        </div>
      </div>
      </Link>
      
    );
  };
  
  // Avatar component with optional size property
  export function Avatar({ name, size = "small" }: { name: string; size: "small" | "big" }) {
    return (
      <div
        className={`relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full ${
          size === "small" ? `w-6 h-6` : ""
        } dark:bg-gray-600`}
      >
        <span className={`font-medium text-gray-600 ${size==="small"?"text-xs":"text-md"} dark:text-gray-300`}>{name[0]}</span>
      </div>
    );
  }
  